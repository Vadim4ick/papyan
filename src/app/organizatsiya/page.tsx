import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";

const docs = [
  {
    title: "Регламент по оказанию услуг и положение об ответственном",
    href: "/docs/1_Приказ_о_Регламенте_по_оказанию_услуг_и_Положение_об_ответственном.doc",
  },
  {
    title: "Информация о предоставлении медуслуг и информировании",
    href: "/docs/2_Приказ_об_Информации_о_предоставлении_медуслуг_и_Информировании.doc",
  },
  {
    title: "Положение программы госгарантий",
    href: "/docs/3_Приказ_об_Положении_Программы_госгарантий.doc",
  },
  {
    title: "Информация о правилах поведения пациентов",
    href: "/docs/4_Приказ_об_информации_о_правилах_поведения_пациентов.doc",
  },
  {
    title: "Оказание помощи сверх стандарта",
    href: "/docs/5_Приказ_об_оказании_помощи_сверх_стандарта.doc",
  },
  {
    title: "Определение тарифов на медуслуги",
    href: "/docs/6_Приказ_об_определении_тарифов_на_медуслуги.doc",
  },
  {
    title: "Оказание помощи иностранным гражданам",
    href: "/docs/7_Приказ_об_оказании_помощи_иностранным_гражданам.doc",
  },
];

export default function Orgs() {
  return (
    <Container>
      <section className="py-8 md:py-12">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Документы для скачивания
          </h1>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Выберите нужный приказ и скачайте файл в формате .doc
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {docs.map((doc, index) => (
            <Link
              key={doc.href}
              href={doc.href}
              download
              className="group relative overflow-hidden rounded-2xl border bg-background p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />

              <div className="relative flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Документ {index + 1}
                  </p>
                  <h2 className="line-clamp-2 text-sm font-medium leading-6 md:text-base">
                    {doc.title}
                  </h2>
                </div>

                <div className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border text-muted-foreground transition-colors group-hover:text-primary">
                  <Download className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
