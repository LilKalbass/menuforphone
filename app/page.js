"use client";

import { useEffect, useState } from "react";
import Slider from "@/components/Slider";

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
            <p className="flex h-screen items-center justify-center text-lg font-bold">
                Пожалуйста, откройте приложение в Telegram WebApp
            </p>
        );
    }

    return (
        <main className="h-screen">
            <Slider />
        </main>
    );
}
