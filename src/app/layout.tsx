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

        <Script id="calltouch-requests" strategy="afterInteractive">
          {`
  Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector),Element.prototype.closest||(Element.pro>
  var ct_get_val=function(form,selector){if(!!form.querySelector(selector)){return form.querySelector(selector).value;}else{return '';}}
  
  document.addEventListener('click', function(e) {
      var t_el = e.target;
      if (t_el.closest('form [type="submit"]')){ try {
          var f = t_el.closest('form');
          var fio = ct_get_val(f,'input[name="name"]');
          var phone = ct_get_val(f,'input[name="phone"],input[placeholder*="+7(000)000-00-00"]');
          var email = ct_get_val(f,'input[name="email"]');
          var comment = ct_get_val(f,'textarea[placeholder="Дополнительная информация"]');
          var sub = 'Заявка с ' + location.hostname;
          var ct_data = {
              fio: fio,
              phoneNumber: phone,
              email: email,
              subject: sub,
              requestUrl: location.href,
              comment: comment,
              sessionId: window.call_value
          };
          var post_data = Object.keys(ct_data).reduce(function(a,k){if(!!ct_data[k]){a.push(k+'='+encodeURIComponent(ct_data[k]));}return a},[]).join('&');
          var site_id = '78669';
          var CT_URL = 'https://api.calltouch.ru/calls-service/RestAPI/requests/'+site_id+'/register/';
          var ct_valid = (!!phone || !!email) && !!fio;
          console.log(ct_data,ct_valid);
          if (ct_valid && !window.ct_snd_flag){
              window.ct_snd_flag = 1; setTimeout(function(){ window.ct_snd_flag = 0; }, 20000);
              var request = window.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest();
              request.open("POST", CT_URL, true); request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
              request.send(post_data);
          }
      } catch (e) { console.log(e); } }
  });
`}
        </Script>
      </body>
    </html>
  );
}
