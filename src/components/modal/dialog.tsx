import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EmailForm } from "../email-form";
import { Logo } from "@/shared/icons/Logo";

export function DialogForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary">Записаться онлайн</Button>
      </DialogTrigger>
      <DialogContent className="w-[360px] md:w-[486px] rounded-lg p-7">
        <DialogHeader>
          <DialogTitle className="flex justify-center mb-6">
            <Logo />
          </DialogTitle>
          <DialogDescription className="mb-6">
            <p className="text-center text-2xl leading-[30px] tracking-tight font-semibold">
              Заявка на консультацию
            </p>
          </DialogDescription>
        </DialogHeader>
        <EmailForm />
      </DialogContent>
    </Dialog>
  );
}
