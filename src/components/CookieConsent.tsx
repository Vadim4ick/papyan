"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="
        fixed bottom-6 right-6 z-50
        max-md:left-4 max-md:right-4 max-md:bottom-4
        rounded-2xl bg-white p-6
        shadow-[0_10px_40px_rgba(0,0,0,0.12)]
        max-w-[420px] w-full
      "
    >
      <div className="flex flex-col gap-5 text-center">
        {/* Иконка */}
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-500 text-lg">
          🍪
        </div>

        {/* Текст */}
        <p className="text-sm leading-relaxed text-primary-black font-medium">
          Наш сайт использует файлы cookie для улучшения пользовательского
          опыта, персонализации контента и анализа трафика.
        </p>

        {/* Кнопка */}
        <Button
          onClick={acceptCookies}
          className="
            h-11 rounded-full w-full
            text-sm font-semibold
            px-6
          "
        >
          Ясно, принимаю
        </Button>
      </div>
    </div>
  );
}
