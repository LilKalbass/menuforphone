"use client";

import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";

export default function Home() {
    const [isTelegramWebApp, setIsTelegramWebApp] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            setIsTelegramWebApp(true);
            window.Telegram.WebApp.init();
        }
    }, []);

    if (!isTelegramWebApp) {
        return (
            <p className="flex h-screen items-center justify-center text-lg font-bold text-center px-2">
                Будь ласка, відкрийте в <br/> Telegram WebApp
            </p>
        );
    }

    return (
        <>
            <Header/>
            <main className="h-screen">
                <Slider />
            </main>
            <Footer/>
        </>
    );
}
