import {PT_Serif, Forum, Exo_2 } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import Head from "next/head";
import Script from "next/script";

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "700"]
});

const forum = Forum({
  variable: "--font-forum",
  subsets: ["cyrillic"],
  weight: "400"
});

const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["cyrillic"]
});

export const metadata = {
  title: "DreamMenu",
  description: "Прайс Лист для ознайомлення з актуальними цінами в режимі реального часу.",
  lang: "uk"
};

export default function RootLayout({ children }) {
  const [isTelegramWebApp, setIsTelegramWebApp] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      setIsTelegramWebApp(true);
      window.Telegram.WebApp.init();
    }
  }, []);

  if (!isTelegramWebApp) {
    return <p>Пожалуйста, откройте приложение в Telegram WebApp</p>;
  }
  return (
    <html lang="en">
    <Head>
      <Script
          async
          type="text/javascript"
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
      ></Script>
    </Head>
      <body
        className={`${ptSerif.variable} ${forum.variable} ${exo.variable} antialiased transition-all`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
