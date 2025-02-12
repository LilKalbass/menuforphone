import {PT_Serif, Forum, Exo_2 } from "next/font/google";
import "./globals.css";
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
  description: "Price list for DreamShop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
