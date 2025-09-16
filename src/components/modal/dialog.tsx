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

interface DialogFormProps {
  children?: React.ReactNode;
}

export function DialogForm({ children }: DialogFormProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-[360px] md:w-[486px] rounded-lg p-7">
        <DialogHeader>
          <DialogTitle className="flex justify-center mb-6">
            <Logo className="max-h-[50px] max-w-[157px]" />
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
