import {Open_Sans, Caveat } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin", "cyrillic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
    subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: "DreamMenu",
  description: "Price list for DreamShop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${caveat.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
