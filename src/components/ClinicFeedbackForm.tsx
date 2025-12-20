import React, { useState } from "react";
import { CheckCircle, Building } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Container } from "./ui/container";
import { Button } from "./ui/button";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/shared/lib/utils";

export const clinicFeedbackSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Введите имя (минимум 2 символа)")
    .max(100, "Имя слишком длинное"),

  email: z.string().trim().email("Введите корректный email"),

  phone: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) =>
        !val ||
        /^(\+?\d{1,3})?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{2}[\s.-]?\d{2}$/.test(
          val
        ),
      {
        message: "Введите корректный номер телефона",
      }
    ),

  message: z
    .string()
    .trim()
    .min(10, "Сообщение должно содержать минимум 10 символов")
    .max(2000, "Сообщение слишком длинное"),
});

export type ClinicFeedbackFormData = z.infer<typeof clinicFeedbackSchema>;

const ClinicFeedbackForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ClinicFeedbackFormData>({
    resolver: zodResolver(clinicFeedbackSchema),
    mode: "onChange",
  });

  const onSubmit = async (formData: ClinicFeedbackFormData) => {
    try {
      const res = await fetch("/api/send-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Ошибка отправки");
      }

      setSubmitted(true);

      reset();
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.log("Ошибки валидации:", err.flatten().fieldErrors);
        return;
      }

      console.error(err);
    }
  };

  return (
    <div className="py-12 px-4">
      <Container>
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Заголовок */}
          <div className="bg-primary px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6">
              <div className="text-center lg:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Обратная связь
                </h1>
                <p className="text-lg text-teal-100">Мы ценим ваше мнение</p>
              </div>

              <div className="max-w-xl bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-white text-sm leading-relaxed">
                  Если у вас есть замечания по качеству оказанных услуг или
                  предложения по улучшению работы клиники, пожалуйста, напишите
                  нам.
                  <span className="font-semibold block mt-2">
                    Мы обязательно рассмотрим ваше обращение в течение 3 рабочих
                    дней.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 p-8">
            {/* Левая колонка - Информация о руководителе */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 border-2 border-teal-100">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="text-teal-600" size={28} />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Руководство клиники
                  </h2>
                </div>

                <div className="flex flex-col items-center text-center mt-6 space-y-4">
                  <div>
                    <Image
                      src={"/boss.jpg"}
                      width={235}
                      className="rounded-md"
                      height={235}
                      alt="boss"
                    />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold text-gray-800">
                      Скокова Татьяна Петровна
                    </h3>
                    <p className="text-lg text-teal-600 font-semibold">
                      Директор клиники
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Правая колонка - Форма */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 h-max"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Написать обращение
              </h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center h-[430px] text-center">
                  <CheckCircle className="text-green-500 mb-4" size={64} />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Спасибо за обращение!
                  </h3>
                  <p className="text-gray-600">
                    Мы рассмотрим ваше сообщение в течение 3 рабочих дней
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <label className="flex flex-col gap-2">
                    <span
                      className={cn(
                        "cursor-pointer text-sm font-semibold text-gray-600 w-fit",
                        errors.name && "text-[#F52222]"
                      )}
                    >
                      Ваше имя *
                    </span>

                    <Input
                      type="text"
                      className={cn(
                        errors.name &&
                          "text-[#F52222] placeholder:text-[#F52222] border-[#F52222] focus:border-[#F52222]"
                      )}
                      {...register("name")}
                      placeholder="Иван Иванов"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span
                      className={cn(
                        "cursor-pointer text-sm font-semibold text-gray-600 w-fit",
                        errors.email && "text-[#F52222]"
                      )}
                    >
                      Email *
                    </span>

                    <Input
                      className={cn(
                        errors.email &&
                          "text-[#F52222] placeholder:text-[#F52222] border-[#F52222] focus:border-[#F52222]"
                      )}
                      {...register("email")}
                      placeholder="example@mail.ru"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span
                      className={cn(
                        "cursor-pointer text-sm font-semibold text-gray-600 w-fit",
                        errors.phone && "text-[#F52222]"
                      )}
                    >
                      Телефон
                    </span>

                    <Input
                      className={cn(
                        errors.phone &&
                          "text-[#F52222] placeholder:text-[#F52222] border-[#F52222] focus:border-[#F52222]"
                      )}
                      type="tel"
                      {...register("phone")}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span
                      className={cn(
                        "cursor-pointer text-sm font-semibold text-gray-600 w-fit",
                        errors.message && "text-[#F52222]"
                      )}
                    >
                      Ваше обращение *
                    </span>

                    <Textarea
                      className={cn(
                        errors.message &&
                          "text-[#F52222] placeholder:text-[#F52222] border-[#F52222] focus:border-[#F52222]"
                      )}
                      {...register("message")}
                      placeholder="Опишите вашу ситуацию или предложение..."
                    />
                  </label>

                  <Button
                    disabled={isSubmitting}
                    motionProps={{
                      stiffness: 142.2,
                      damping: 26.67,
                      mass: 1,
                    }}
                    variant="secondary"
                    className="w-full duration-450"
                  >
                    Отправить обращение
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export { ClinicFeedbackForm };
