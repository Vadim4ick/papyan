"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const phoneValidation = /^(?:\+7|8)?\s?\(?[1-9]\d{2}\)?\s?\d{3}-?\d{2}-?\d{2}$/

const formSchema = z
  .object({
    name: z.string().min(1, {
      message: "Укажите имя",
    }),
    email: z.string()
    .email({message: "Укажите корректный email",})
    .optional(),
    phone: z.string()
    .regex(phoneValidation, { message: "Введите корректный номер телефона" })
      .optional(),
  });



export function EmailForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
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
  console.log("Errors:", form.formState.errors);

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
                      form.formState.errors.name ? "text-[#F52222] placeholder:text-[#F52222] border-[#F52222]" : ""
                    }`}
                    placeholder={
                      form.formState.errors.name?.message || "Ваше Имя"
                    }
                    disabled={isPending}

                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex flex-col xl:flex-row gap-2 mb-[24px]">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className={`w-full xl:w-[194px] h-[52px] bg-[#F0F3F8] border-[#E3E6EB] text-center text-[15px] leading-[20px] tracking-tight ${
                        form.formState.errors.email ? "text-[#F52222] placeholder:text-[#F52222] border-[#F52222]" : ""
                      }`}
                      placeholder={
                        form.formState.errors.email?.message || "E-mail"
                      }
                      // type="email"
                      autoComplete="email"
                      disabled={isPending}
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
                    <Input
                      className={`xl:w-[194px] h-[52px] bg-[#F0F3F8] border-[#E3E6EB] text-center text-[15px] leading-[20px] tracking-tight ${
                        form.formState.errors.phone ? "text-[#F52222] placeholder:text-[#F52222] border-[#F52222]" : ""
                      }`}
                      placeholder={
                        form.formState.errors.phone?.message || "Телефон"
                      }
                      type="tel"
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={isPending}
            className="h-[52px] w-full"
          >
            Продолжить
          </Button>
        </div>
      </form>
    </Form>
  );
}
