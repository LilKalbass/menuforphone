"use client";

import { useState } from "react";

// Пример данных
const menuData = {
    Menu: [
        {
            Title: "Чіпси",
            BackgroundImage: "/assets/bg/chipsBg.webp",  // Фон для чипсов
            ListItems: [
                { ItemName: "Банан", ItemImg: "/assets/chips/Banana.webp", ItemPrice: "100", ItemWeight: "50" },
                { ItemName: "Банан", ItemImg: "/assets/chips/Banana.webp", ItemPrice: "100", ItemWeight: "50" }
            ]
        },
        {
            Title: "Квіти",
            BackgroundImage: "/assets/bg/flowerBg.webp",  // Фон для цветов
            ListItems: [
                { ItemName: "Лаванда", ItemImg: "/assets/flowers/Lavender.webp", ItemPrice: "50", ItemWeight: "1" },
                { ItemName: "Лаванда", ItemImg: "/assets/flowers/Lavender.webp", ItemPrice: "50", ItemWeight: "1" },
            ]
        },
        {
            Title: "Гарніш",
            BackgroundImage: "/assets/bg/garnishBg.webp",  // Фон для цветов
            ListItems: [
                { ItemName: "Лаванда", ItemImg: "/assets/flowers/Lavender.webp", ItemPrice: "50", ItemWeight: "1" },
                { ItemName: "Лаванда", ItemImg: "/assets/flowers/Lavender.webp", ItemPrice: "50", ItemWeight: "1" },
            ]
        },
        {
            Title: "Сиропи",
            BackgroundImage: "/assets/bg/syropBg.webp",  // Фон для цветов
            ListItems: [
                { ItemName: "Лаванда", ItemImg: "/assets/flowers/Lavender.webp", ItemPrice: "50", ItemWeight: "1" },
                { ItemName: "Лаванда", ItemImg: "/assets/flowers/Lavender.webp", ItemPrice: "50", ItemWeight: "1" },
            ]
        }
    ]
};

export default function Slider() {
    // Устанавливаем начальное значение для activeTab как первый элемент в массиве
    const [activeTab, setActiveTab] = useState(menuData.Menu[0].Title.toLowerCase());

    // Получаем текущую категорию из данных
    const currentCategory = menuData.Menu.find(
        (category) => category.Title.toLowerCase() === activeTab
    );

    return (
        <div
            className={`relative w-full h-screen flex flex-col pt-[40%] bg-origin-border bg-no-repeat bg-[left_20%_top_100%]`}
            style={{
                backgroundImage: currentCategory ? `url(${currentCategory.BackgroundImage})` : "",
            }}
        >
            <div className="relative z-10 p-4 ml-[16%]">
                {/* Кнопки переключения вкладок */}
                <div className="flex border-b">
                    {menuData.Menu.map((category) => (
                        <button
                            key={category.Title}
                            className={`p-2 px-4 border-b-2 transition-all ${
                                activeTab === category.Title.toLowerCase()
                                    ? "border-blue-500 font-bold"
                                    : "border-transparent"
                            }`}
                            onClick={() => setActiveTab(category.Title.toLowerCase())}
                        >
                            {category.Title}
                        </button>
                    ))}
                </div>

                {/* Список товаров в активной категории */}
                <p className='flex justify-end font-secondary'>Ціна/Вага</p>

                {currentCategory && (
                    <div className="flex flex-col gap-y-4">
                        {currentCategory.ListItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-4 border-b"
                            >
                                <div className='flex items-center justify-between w-full'>
                                    <p className="font-semibold ml-2">{item.ItemName}</p>
                                    <p className='font-secondary font-bold'>{item.ItemPrice}/{item.ItemWeight}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
