"use client";

import { useState } from "react";
import {CgClose} from "react-icons/cg";
import {motion, AnimatePresence} from "framer-motion";
import {fadeIn} from "@/variants";

const menuData = {
    Menu: [
        {
            Title: "Чіпси",
            BackgroundImage: "/assets/bg/chipsBg.webp",
            ListItems: [
                { ItemName: "Банан", ItemImg: "/assets/chips/Banana.webp", ItemPrice: "210", ItemWeight: "100" },
                { ItemName: "Кокос", ItemImg: "/assets/chips/Coconut.webp", ItemPrice: "150", ItemWeight: "100" },
                { ItemName: "Імбир", ItemImg: "/assets/chips/Ginger.webp", ItemPrice: "145", ItemWeight: "50" },
                { ItemName: "Лайм", ItemImg: "/assets/chips/Lime.webp", ItemPrice: "220", ItemWeight: "100" },
                { ItemName: "Манго", ItemImg: "/assets/chips/Mango.webp", ItemPrice: "200", ItemWeight: "50" },
                { ItemName: "Апельсин", ItemImg: "/assets/chips/Orange.webp", ItemPrice: "150", ItemWeight: "100" },
                { ItemName: "Персик", ItemImg: "/assets/chips/Peach.webp", ItemPrice: "150", ItemWeight: "50" },
                { ItemName: "Груша", ItemImg: "/assets/chips/Pear.webp", ItemPrice: "240", ItemWeight: "100" },
                { ItemName: "Ананас", ItemImg: "/assets/chips/Pineapple.webp", ItemPrice: "240", ItemWeight: "100" },
                { ItemName: "Полуниця", ItemImg: "/assets/chips/Strawberry.webp", ItemPrice: "190", ItemWeight: "50" },
            ]
        },
        {
            Title: "Квіти",
            BackgroundImage: "/assets/bg/flowerBg.webp",
            ListItems: [
                { ItemName: "Лаванда", ItemImg: "/assets/flowers/Lavender.webp", ItemPrice: "150", ItemWeight: "100ш." },
                { ItemName: "Геліхрізум", ItemImg: "/assets/flowers/Helichrysum.webp", ItemPrice: "150", ItemWeight: "50ш." },
                { ItemName: "Гіпсофіла", ItemImg: "/assets/flowers/Gypsophila.webp", ItemPrice: "110", ItemWeight: "1ш." },
                { ItemName: "Гортензія", ItemImg: "/assets/flowers/Hydrangea.webp", ItemPrice: "150", ItemWeight: "1ш." },
                { ItemName: "Гомфрена", ItemImg: "/assets/flowers/Gomphrena.webp", ItemPrice: "70", ItemWeight: "30ш." },
                { ItemName: "Бамбук", ItemImg: "/assets/flowers/Bamboo.webp", ItemPrice: "150", ItemWeight: "50ш." }
            ]
        },
        {
            Title: "Гарніш",
            BackgroundImage: "/assets/bg/garnishBg.webp",
            ListItems: [
                { ItemName: "Лаванда", ItemImg: "/assets/flowers/Lavender.webp", ItemPrice: "50", ItemWeight: "1" },
                { ItemName: "Лаванда", ItemImg: "/assets/flowers/Lavender.webp", ItemPrice: "50", ItemWeight: "1" },
            ]
        },
        {
            Title: "Сиропи",
            BackgroundImage: "/assets/bg/syropBg.webp",
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
        <div className="transition-all relative items-center w-full h-screen flex flex-col pt-[40%] bg-origin-border bg-no-repea+t bg-[left_36%_top_100%] bg-cover"
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
                            className={`border-b-2 font-secondary text-[22px] transition-all duration-300 ${activeTab === category.Title.toLowerCase() ? "border-primary font-bold text-primary" : "border-transparent hover:border-orange-500  hover:text-orange-500 text-secondary"}`}
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
                <AnimatePresence mode='wait'>
                {currentCategory && (
                    <motion.div className="flex flex-col gap-y-3 transition-all"
                                variants={fadeIn('right', 0)}
                                initial = 'hidden'
                                animate='show'
                                whileInView = {'show'}
                                viewport = {{once: false, amount: 0.1}}
                                key={activeTab}
                    >
                        {currentCategory.ListItems.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4 border-b border-underlinec">
                                <div className='flex items-center justify-between w-full group cursor-pointer'
                                     onClick={() => openPopup(item)}>
                                    <p
                                        className="font-semibold text-[16px] ml-2 cursor-pointer transition group-hover:text-primary"
                                    >
                                        {item.ItemName}
                                    </p>
                                    <p className='font-secondary font-bold'>{item.ItemPrice}/{item.ItemWeight}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
                </AnimatePresence>
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
                            className="absolute top-0 right-1 text-primary hover:text-gray-800"
                            onClick={closePopup}
                        >
                            <CgClose className='text-4xl'/>
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
