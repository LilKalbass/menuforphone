'use client'

import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import WebApp from "@twa-dev/sdk";

export default function Home() {
    const [isTelegram, setIsTelegram] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            WebApp.ready(); // Инициализация WebApp SDK
            setIsTelegram(true);
        }
    }, []);

    if (!isTelegram) return null; // Не рендерим вне Telegram WebApp

    return (
        <main className="h-screen">
            <Slider />
        </main>
    );
}
