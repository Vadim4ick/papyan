import { GetConsultCard } from "@/components/cards/get-consult-card";
import { Container } from "@/components/ui/container";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <Container>
      Описание терапии: {slug}
      <GetConsultCard title={"Хивамат-терапия"} regularPrice={"2200"} newPrice={"1700"}  />
    </Container>
  );
}