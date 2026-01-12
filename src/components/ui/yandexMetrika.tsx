"use client";

import { YMInitializer } from "react-yandex-metrika";

const METRIKA_ID = 106077481;

export default function YandexMetrika() {
  return (
    <YMInitializer
      accounts={[METRIKA_ID]}
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
