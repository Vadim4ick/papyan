import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, phone, message } = data;

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Укажите имя или email, или сообщение." },
      { status: 400 }
    );
  }

  if (email && !/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(email)) {
    return NextResponse.json(
      { message: "Укажите корректный email." },
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
    <h2>Обратная связь от ${name}</h2>
    <p><b>Имя:</b> ${name}</p>
    ${email ? `<p><b>Email:</b> ${email}</p>` : ""}
    ${phone ? `<p><b>Телефон:</b> ${phone}</p>` : ""}
    <p><b>Сообщение:</b> ${message}</p>
  `;

  // Telegram отправка
  const tgMessage = `
<b>Обратная связь от ${name}</b>
<b>Имя:</b> ${name}
${email ? `<b>Email:</b> ${email}` : ""}
${phone ? `<b>Телефон:</b> ${phone}` : ""}
<b>Сообщение:</b> ${message}
  `.trim();

  const tgUrl = `https://api.telegram.org/bot${process.env.TG_TOKEN}/sendMessage`;

  try {
    await transporter.sendMail({
      from: `"Компас Здоровья" <${process.env.SMTP_MAIL}>`,
      to: "kompas_zdorovya23@mail.ru", // Получатель
      subject: "Новое сообщение с обратной связи",
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
