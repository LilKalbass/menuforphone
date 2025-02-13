'use client'

import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import WebApp from "@twa-dev/sdk";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

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
        <>
            <Header/>
            <main className="h-screen">
                <Slider/>
            </main>
            <Footer/>
        </>
    );
}
