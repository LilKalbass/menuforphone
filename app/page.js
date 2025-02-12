"use client";

import { useEffect, useState } from "react";
import Slider from "../components/Slider";

export default function Home() {
    const [isTelegramWebApp, setIsTelegramWebApp] = useState(false);
    const [clientReady, setClientReady] = useState(false); // флаг, указывающий на готовность клиента

    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            const webApp = window.Telegram.WebApp;

            // Убедитесь, что метод init() существует
            if (webApp?.init) {
                webApp.init();
                setIsTelegramWebApp(true); // Устанавливаем состояние для условного рендеринга
            } else {
                console.error("Метод init() не найден.");
            }
        }

        // Устанавливаем стили, зависящие от высоты экрана в WebApp
        if (typeof window !== "undefined") {
            document.documentElement.style.setProperty('--tg-viewport-height', `${window.innerHeight}px`);
            document.documentElement.style.setProperty('--tg-viewport-stable-height', `${window.innerHeight}px`);
        }

        setClientReady(true); // Устанавливаем флаг после первого рендера
    }, []);

    if (!clientReady) {
        return null; // Показать ничего до готовности клиента
    }

    if (!isTelegramWebApp) {
        return (
            <p className="flex h-screen items-center justify-center text-lg font-bold text-center px-2">
                Пожалуйста, откройте в Telegram WebApp
            </p>
        );
    }

    return (
        <main className="h-screen">
            <Slider />
        </main>
    );
}
