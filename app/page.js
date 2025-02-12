'use client'

import { useEffect } from "react";
import Slider from "@/components/Slider";
import Head from "next/head";

export default function Home() {
    useEffect(() => {
        // Проверка, что объект Telegram WebApp доступен
        if (window.Telegram && window.Telegram.WebApp) {
            window.Telegram.WebApp.init();
        }
    }, []);

    return (
        <>
            <Head>
                <script
                    async
                    type="text/javascript"
                    src="https://telegram.org/js/telegram-web-app.js"
                ></script>
            </Head>
            <main className="h-screen">
                <Slider />
            </main>
        </>
    );
}
