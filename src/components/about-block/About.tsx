"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

import { useGetServicesBloks } from "@/shared/hooks/services/useGetServicesBlocks";
import { Container } from "../ui/container";
import { SectionHeader } from "../section-header";
import Link from "next/link";

const AboutBlock = () => {
  const { data: services } = useGetServicesBloks();

  return (
    <section className="mt-[80px] max-lg:mt-[64px] max-md:mt-[40px]">
      <Container>
        <Card className="rounded-[24px] border-muted">
          <CardHeader className="gap-[12px]">
            <SectionHeader
              className="mb-[32px] md:mb-[56px] xl:mb-[48px]"
              title="Лицензии и правовая информация"
              description="Клиника осуществляет медицинскую деятельность на основании
              действующей лицензии в соответствии с законодательством РФ"
            />
          </CardHeader>

          <CardContent className="flex flex-col gap-[40px]">
            {/* Лицензия */}
            <div className="flex gap-6 w-full max-md:flex-col">
              <div className="flex flex-col gap-3 w-full">
                <h4 className="font-medium text-lg">
                  Информация о юридическом лице
                </h4>

                <ul className="space-y-[6px] text-sm text-muted-foreground w-full">
                  <li>
                    Юридический адрес: Краснодарский край, г. Краснодар, ул.
                    Постовая, д. 23
                  </li>
                  <li>Фактический адрес: г. Краснодар, ул. Постовая, 23</li>
                  <li>ИНН: 2309184646</li>
                  <li>ОГРН: 1242300018674</li>
                  <li>Телефон: +7 (918) 232-13-13</li>
                  <li>Email: kompas_zdorovya23@mail.ru</li>
                </ul>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <h4 className="font-medium text-lg">
                  Лицензия на медицинскую деятельность
                </h4>

                <ul className="space-y-[6px] text-sm">
                  <li>
                    <span className="text-muted-foreground">Номер:</span>{" "}
                    Л041-01126-23/01430991
                  </li>
                  <li>
                    <span className="text-muted-foreground">Дата выдачи:</span>{" "}
                    10.10.2024
                  </li>
                  <li>
                    <span className="text-muted-foreground">Орган:</span>{" "}
                    Министерство здравоохранения Краснодарского края
                  </li>
                </ul>

                <Button className="w-fit gap-[8px]">
                  <a
                    href="#!"
                    className="flex items-center gap-2 px-2"
                    rel="noopener noreferrer"
                  >
                    <FileText size={16} />
                    Скачать лицензию
                  </a>
                </Button>
              </div>
            </div>

            {/* Перечень услуг по лицензии */}
            <div>
              <h3 className="font-medium mb-[16px]">
                Перечень медицинских услуг по лицензии
              </h3>

              <Accordion type="multiple" className="w-full flex flex-col gap-2">
                {services?.servicesBlock.map((block) => (
                  <AccordionItem
                    key={block.id}
                    value={block.id}
                    className="border-muted"
                  >
                    <AccordionTrigger className="text-left px-4">
                      <div className="flex items-center gap-[10px]">
                        <span>{block.title}</span>
                        <Badge>{block.allServices.length}</Badge>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent>
                      <ul className="grid md:grid-cols-2 gap-x-[24px] gap-y-[8px] text-sm pt-3">
                        {block.allServices.map((service) => (
                          <li key={service.id} className="flex gap-[6px]">
                            <span className="text-primary">•</span>
                            <Link
                              href={`/therapy/${service.id}`}
                              className="hover:underline transition-all duration-300"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};

export { AboutBlock };
