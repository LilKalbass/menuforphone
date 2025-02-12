'use client'

import { useEffect, useState } from "react";
import Slider from "../components/Slider";

export default function Home() {
    const [isTelegramWebApp, setIsTelegramWebApp] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            setIsTelegramWebApp(true);
            window.Telegram.WebApp.init();
        }
    }, []);

    return (
        <main className="h-screen">
            {isTelegramWebApp ? <Slider /> : <p>Пожалуйста, откройте в Telegram WebApp</p>}
        </main>
    );
}
