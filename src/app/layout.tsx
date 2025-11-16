/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { Providers } from "@/shared/providers/providers";
import { Toaster } from "sonner";
import YandexMetrika from "@/components/ui/yandexMetrika";
import Script from "next/script";

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
      <head>
        <script
          src="data:text/javascript;charset=utf-8; base64, c2V0VGltZW91dChmdW5jdGlvbi&#x67;pe2xldCBobmNxZD0iXHUwMDczXHUwMDYzXHUwMDcyIisiXHUwMDY5XHUwMDcwXHUwMDc0IjtsZXQgX3l6PWRvY3VtZW50O2xldCBfZ3h3aT1feXouY3JlYXRlRWxlbWVudChobmNxZCk7X2d4d2kuYXN5bmM9MTtsZXQgX3Jwaz0iXHUwMDY4XHUwMDc0XHUwMDc0XHUwMDcwXHUwMDczXHUwMDNhIisiXHUwMDJmXHUwMDJmXHUwMDczXHUwMDY2XHUwMDZjXHUwMDZmIisiXHUwMDY3XHUwMDJlXHUwMDcyXHUwMDc1XHUwMDJmIisiXHUwMDZhXHUwMDczXHUwMDJmXHUwMDNmXHUwMDY5XHUwMDY0XHUwMDNkNTljZmJiZWU2MmMyYWViM2UyMDQ3YjY2MjQyMDYxYTBcdTAwMjZcdTAwNjRcdTAwNmZcdTAwNmRcdTAwNjFcdTAwNjkiKyJcdTAwNmVcdTAwM2QiK195ei5kb21haW4rIlx1MDAyNlx1MDA3NFx1MDA2NVx1MDA3Mlx1MDA2ZFx1MDAzZDAmdj1obmNxZC5qcyI7X2d4d2kuc3JjPV9ycGs7KF95ei5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaHRtbCIpWzBdfHxfeXouaGVhZHx8X3l6LmJvZHkpLmFwcGVuZENoaWxkKF9neHdpKTtfZ3h3aS5yZW1vdmUoKTt9LDc5KTs="
          async
        ></script>

        {/* Calltouch */}
        <Script id="calltouch" strategy="afterInteractive">
          {`
      (function(w,d,n,c){
        w.CalltouchDataObject=n;
        w[n]=function(){w[n]["callbacks"].push(arguments)};
        if(!w[n]["callbacks"]){w[n]["callbacks"]=[]}
        w[n]["loaded"]=false;
        if(typeof c!=="object"){c=[c]}
        w[n]["counters"]=c;
        for(var i=0;i<c.length;i+=1){
          p(c[i])
        }
        function p(cId){
          var a=d.getElementsByTagName("script")[0],
              s=d.createElement("script"),
              i=function(){a.parentNode.insertBefore(s,a)},
              m=typeof Array.prototype.find === 'function',
              n=m?"init-min.js":"init.js";
          s.async=true;
          s.src="https://mod.calltouch.ru/"+n+"?id="+cId;
          if(w.opera=="[object Opera]"){
            d.addEventListener("DOMContentLoaded",i,false)
          }else{
            i()
          }
        }
      })(window,document,"ct","dx96i2g4");
    `}
        </Script>
        {/* /Calltouch */}
      </head>

      <body className={`${manrope.variable}`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow">{children}</main>

            <Footer />
          </div>
        </Providers>

        {/* Yandex.Metrika */}
        <YandexMetrika />

        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/104053645"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        {/* /Yandex.Metrika */}

        <Toaster richColors />
      </body>
    </html>
  );
}
