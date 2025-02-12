
import { useEffect, useState } from "react";
import Slider from "../components/Slider";

export default function Home() {

    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            window.Telegram.WebApp.init();
        }
    }, []);
    return (
        <main className="h-screen">
            <Slider />
        </main>
    );
}
