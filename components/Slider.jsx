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
    const [activeTab, setActiveTab] = useState(menuData.Menu[0].Title.toLowerCase());
    const [selectedItem, setSelectedItem] = useState(null);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const currentCategory = menuData.Menu.find(
        (category) => category.Title.toLowerCase() === activeTab
    );

    const openPopup = (item) => {
        setSelectedItem(item);
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setSelectedItem(null);
        setIsPopupOpen(false);
    };

    return (
        <div className="relative items-center w-full h-screen flex flex-col pt-[40%] bg-origin-border bg-no-repea+t bg-[left_36%_top_100%] bg-cover"
             style={{
                 backgroundImage: currentCategory ? `url(${currentCategory.BackgroundImage})` : "",
             }}
        >
            <div className="relative z-10 pt-6 flex flex-col">
                {/* Кнопки переключения вкладок */}
                <div className="flex items-center gap-x-4 justify-center">
                    {menuData.Menu.map((category) => (
                        <button
                            key={category.Title}
                            className={`border-b-2 transition-all ${activeTab === category.Title.toLowerCase() ? "border-blue-500 font-bold" : "border-transparent "}`}
                            onClick={() => {
                                setActiveTab(category.Title.toLowerCase());
                                setSelectedItem(null);
                                setIsPopupOpen(false);
                            }}
                        >
                            {category.Title}
                        </button>
                    ))}
                </div>
            </div>
            <div className='w-8/12 flex flex-col'>
                <p className='flex justify-end font-secondary'>Ціна/Вага</p>
                {currentCategory && (
                    <div className="flex flex-col gap-y-4">
                        {currentCategory.ListItems.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4 border-b">
                                <div className='flex items-center justify-between w-full'
                                     onClick={() => openPopup(item)}>
                                    <p
                                        className="font-semibold ml-2 cursor-pointer hover:text-blue-500 transition"
                                    >
                                        {item.ItemName}
                                    </p>
                                    <p className='font-secondary font-bold'>{item.ItemPrice}/{item.ItemWeight}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/* Попап с картинкой */}
            {isPopupOpen && selectedItem && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                    onClick={closePopup}
                >
                    <div className="relative bg-white p-4 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
                        {/* Кнопка закрытия */}
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
                            onClick={closePopup}
                        >
                            ❌
                        </button>
                        {/* Картинка */}
                        <img
                            src={selectedItem.ItemImg}
                            alt={selectedItem.ItemName}
                            className="w-64 h-64 object-cover rounded-md"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
