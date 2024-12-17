import { DoctorDetailInfo } from "@/components/doctor-detail-info";


export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  console.log("🚀 ~ slug:", slug)
  return (
  <section className="container mx-auto max-w-[1364px] px-[20px]">

    <DoctorDetailInfo/>
    
  </section>
  )
}

