"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import InputMask from "react-input-mask";
import React from "react";
import { toast } from "sonner";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";

const phoneValidation = /^(?:\+7|8)?\s?\(?[1-9]\d{2}\)?\s?\d{3}-?\d{2}-?\d{2}$/;

const formSchema = z
  .object({
    name: z.string().min(1, { message: "Укажите имя" }),
    email: z
      .string()
      .email({ message: "Укажите корректный email" })
      .optional()
      .or(z.literal("")),
    phone: z
      .string()
      .regex(phoneValidation, { message: "Введите корректный номер телефона" })
      .optional()
      .or(z.literal("")),
    agreement: z.boolean().default(false),
  })
  .refine((data) => data.email || data.phone, {
    message: "Одно из полей [email, phone] обязательно",
    path: ["email"],
  })
  .superRefine((values, ctx) => {
    if (!values.phone && !values.email) {
      ctx.addIssue({
        message:
          "Необходимо указать либо телефон, либо адрес электронной почты.",
        code: z.ZodIssueCode.custom,
        path: ["phone"],
      });
      ctx.addIssue({
        message:
          "Необходимо указать либо телефон, либо адрес электронной почты.",
        code: z.ZodIssueCode.custom,
        path: ["email"],
      });
    }
  });

export function EmailForm() {
  const [loading, setLoading] = React.useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      agreement: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      toast.success(data.message);
      if (res.ok) form.reset();
    } catch {
      toast.error("Ошибка отправки. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={`h-[52px] bg-[#F0F3F8] border-[#E3E6EB] text-center text-[15px] leading-[20px] tracking-tight ${
                      form.formState.errors.name
                        ? "text-[#F52222] placeholder:text-[#F52222] border-[#F52222]"
                        : ""
                    }`}
                    placeholder={
                      form.formState.errors.name?.message || "Ваше Имя"
                    }
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="mb-1">
            <div className="flex flex-col xl:flex-row gap-2 mb-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className={`w-full xl:w-[194px] h-[52px] bg-[#F0F3F8] border-[#E3E6EB] text-center text-[15px] leading-[20px] tracking-tight ${
                          form.formState.errors.email
                            ? "text-[#F52222] placeholder:text-[#F52222] border-[#F52222]"
                            : ""
                        }`}
                        placeholder={
                          form.formState.errors.email?.message || "E-mail"
                        }
                        // type="email"
                        autoComplete="email"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <div className="flex w-full items-center justify-center xl:w-fit">
                <span className="">или</span>
              </div>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputMask
                        mask="+7 (999) 999-99-99"
                        value={field.value}
                        onChange={field.onChange}
                      >
                        {(inputProps: any) => (
                          <Input
                            {...inputProps}
                            className={`xl:w-[194px] h-[52px] bg-[#F0F3F8] border-[#E3E6EB] text-center text-[15px] leading-[20px] tracking-tight ${
                              form.formState.errors.phone
                                ? "text-[#F52222] placeholder:text-[#F52222] border-[#F52222]"
                                : ""
                            }`}
                            placeholder={
                              form.formState.errors.phone?.message ||
                              "+7(000)000-00-00"
                            }
                          />
                        )}
                      </InputMask>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="agreement"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="agreement"
                      className={
                        form.formState.errors.agreement
                          ? "border-[#F52222]"
                          : ""
                      }
                    />
                  </FormControl>
                  <Label
                    htmlFor="agreement"
                    className={`text-xs leading-tight select-none cursor-pointer mt-[0!important]`}
                  >
                    Я подтверждаю согласие на обработку{" "}
                    <a
                      href="/policy.docx"
                      className="text-[#7B4EFF] underline font-medium transition-colors hover:text-[#592ac2]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      персональных данных
                    </a>
                  </Label>
                </FormItem>
              )}
            />
          </div>

          <Button
            isLoading={loading}
            type="submit"
            disabled={!form.formState.isValid || !form.watch("agreement")}
            className="h-[52px] w-full"
          >
            Отправить
          </Button>
        </div>
      </form>
    </Form>
  );
}
