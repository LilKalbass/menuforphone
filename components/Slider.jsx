"use client";

import { useState } from "react";

export default function Slider() {
    const [activeTab, setActiveTab] = useState("chips");

    // Фон для каждой вкладки
    const backgroundImages = {
        chips: "bg-chips",
        flowers: "bg-flowers",
        fruits: "bg-garnish",  // Использую backgroundImage 'garnish' для fruits
        vegetables: "bg-syrops",  // Использую backgroundImage 'syrops' для vegetables
    };

    return (
        <div className={`relative w-full h-screen flex flex-col pt-[36%] ${backgroundImages[activeTab]} bg-left-top bg-origin-border bg-no-repeat bg-cover`}>
            {/* Это фон, который будет перекрывать весь экран */}
            <div className="relative z-10 p-4">
                {/* Кнопки-переключатели */}
                <div className="flex border-b">
                    {["chips", "flowers", "fruits", "vegetables"].map((tab) => (
                        <button
                            key={tab}
                            className={`p-2 px-4 border-b-2 transition-all ${
                                activeTab === tab ? "border-blue-500 font-bold" : "border-transparent"
                            }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab === "chips" ? "Чипсы" :
                                tab === "flowers" ? "Цветы" :
                                    tab === "fruits" ? "Фрукты" :
                                        "Овощи"}
                        </button>
                    ))}
                </div>

                {/* Списки */}
                {activeTab === "chips" && (
                    <ul className="list-disc pl-4 p-4">
                        <li>Лейс</li>
                        <li>Принглс</li>
                        <li>Доритос</li>
                    </ul>
                )}

                {activeTab === "flowers" && (
                    <ul className="list-disc pl-4 p-4">
                        <li>Роза</li>
                        <li>Тюльпан</li>
                        <li>Лилия</li>
                    </ul>
                )}

                {activeTab === "fruits" && (
                    <ul className="list-disc pl-4 p-4">
                        <li>Яблоко</li>
                        <li>Банан</li>
                        <li>Апельсин</li>
                    </ul>
                )}

                {activeTab === "vegetables" && (
                    <ul className="list-disc pl-4 p-4">
                        <li>Морковь</li>
                        <li>Огурец</li>
                        <li>Помидор</li>
                    </ul>
                )}
            </div>
        </div>
    );
}
