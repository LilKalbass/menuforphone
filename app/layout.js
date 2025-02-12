import {PT_Serif, Forum, Exo_2 } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

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
