"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const phoneValidation = new RegExp(
  /^(?:\+7|8)?\s?\(?([1-9][0-9]{2})\)?\s?(\d{3})\s?(\d{2})\s?(\d{2})$/
);

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Укажите имя",
  }),
  email: z.string().email({
    message: "Укажите почту",
  }),
  phone: z
    .string()
    .min(1, {
      message: "Поле не может быть пустым",
    })
    .regex(phoneValidation, { message: "invalid phone" }),
});

export function EmailForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  const isPending = false;

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("🚀 ~ onSubmit ~ values:", values);
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
                  className="h-[52px] bg-[#F0F3F8] border-[#E3E6EB] text-[15px] leading-[20px] tracking-tight"
                    placeholder="Ваше Имя"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-2 mb-[24px]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-[194px] h-[52px] bg-[#F0F3F8] border-[#E3E6EB] text-[15px] leading-[20px] tracking-tight"
                      placeholder="E-mail"
                      type="email"
                      autoComplete="email"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-center w-fit">
              <span className="">или</span>
            </div>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="w-[194px] h-[52px] bg-[#F0F3F8] border-[#E3E6EB] text-[15px] leading-[20px] tracking-tight"
                      placeholder="Телефон"
                      type="phone"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" disabled={isPending} className="h-[52px] w-full">
            Продолжить
          </Button>
        </div>
      </form>
    </Form>
  );
}
