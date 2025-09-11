"use client";

import { YMInitializer } from "react-yandex-metrika";

export default function YandexMetrika() {
  return (
    <YMInitializer
      accounts={[104053645]}
      options={{
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        accurateTrackBounce: true,
        trackLinks: true,
      }}
      version="2"
    />
  );
}
