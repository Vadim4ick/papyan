import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "@/shared/providers/providers";
import { Toaster } from "sonner";

const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],

  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Клиника компас здоровья | Краснодар",

  description: "Клиника Компас Здоровья, г. Краснодар",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable}`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">{children}</main>

            <Footer />
          </div>
        </Providers>

        <Toaster richColors />
      </body>
    </html>
  );
}
