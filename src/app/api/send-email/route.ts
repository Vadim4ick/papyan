import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email/phone validation как на фронте
const phoneValidation = /^(?:\+7|8)?\s?\(?[1-9]\d{2}\)?\s?\d{3}-?\d{2}-?\d{2}$/;

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, phone } = data;

  if (!name || (!email && !phone)) {
    return NextResponse.json(
      { message: "Укажите имя и хотя бы одно из полей: телефон или e-mail." },
      { status: 400 }
    );
  }
  if (email && !/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return NextResponse.json(
      { message: "Укажите корректный email." },
      { status: 400 }
    );
  }
  if (phone && !phoneValidation.test(phone)) {
    return NextResponse.json(
      { message: "Укажите корректный телефон." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_MAIL, // Логин отправителя
      pass: process.env.SMTP_PASSWORD, // Пароль/ключ приложения
    },
  });

  // Формируем красивое письмо
  const htmlMessage = `
    <h2>Новая заявка на консультацию</h2>
    <p><b>Имя:</b> ${name}</p>
    ${email ? `<p><b>Email:</b> ${email}</p>` : ""}
    ${phone ? `<p><b>Телефон:</b> ${phone}</p>` : ""}
  `;

  // Telegram отправка
  const tgMessage = `
<b>Заявка на консультацию</b>
<b>Имя:</b> ${name}
${email ? `<b>Email:</b> ${email}` : ""}
${phone ? `<b>Телефон:</b> ${phone}` : ""}
  `.trim();

  const tgUrl = `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`;

  try {
    await transporter.sendMail({
      from: `"Компас Здоровья" <${process.env.SMTP_MAIL}>`,
      to: "kompas_zdorovya23@mail.ru", // Получатель
      subject: "Заявка на консультацию",
      html: htmlMessage,
    });

    const tgRes = await fetch(tgUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TG_CHAT_ID,
        text: tgMessage,
        parse_mode: "HTML",
      }),
    });

    if (!tgRes.ok) {
      const err = await tgRes.text();
      console.error("TG API error:", err);
      throw new Error("Ошибка при отправке в Telegram");
    }

    return NextResponse.json({ message: "Заявка успешно отправлена!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Ошибка при отправке письма" },
      { status: 500 }
    );
  }
}
