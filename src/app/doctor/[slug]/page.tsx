export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  console.log("🚀 ~ slug:", slug)
  return (
    <h1>Страница Врача</h1>
  )
}

