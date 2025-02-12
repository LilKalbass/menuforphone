"use client";

import { useState, useEffect } from "react";
import { menuData } from "/public/data";
import { LazyBackground } from "../components/LazyBack";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../public/variants";
import { ItemPopup } from "../components/PopUp";

export default function Slider() {
    const [activeTab, setActiveTab] = useState(menuData.Menu[0].Title.toLowerCase());
    const [selectedItem, setSelectedItem] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            window.Telegram.WebApp.init();
        }
    }, []);

    useEffect(() => {
        menuData.Menu.forEach((category) => {
            const img = new Image();
            img.src = category.BackgroundImage;
        });
    }, []);

    const isValidItem = (item) => {
        const isEmptyName = !item.ItemName || item.ItemName.trim().replace(/[-_\s]/g, "").length === 0;
        const isEmptyPriceAndWeight = !item.ItemPrice && !item.ItemWeight;

        return !(isEmptyName || isEmptyPriceAndWeight);
    };


    const currentCategory = menuData.Menu.find(
        (category) => category.Title.toLowerCase() === activeTab
    );

    return (
        <LazyBackground
            bgImage={currentCategory?.BackgroundImage}
            className="transition-all relative items-center w-full h-screen flex flex-col pt-[40%] bg-origin-border bg-no-repeat bg-[left_36%_top_100%] bg-cover"
        >
            <div className="relative z-10 pt-6 flex flex-col">
                <div className="flex items-center gap-x-4 justify-center">
                    {menuData.Menu.map((category) => (
                        <button
                            key={category.Title}
                            className={`border-b-2 font-secondary text-[18px] transition-all duration-300 ${activeTab === category.Title.toLowerCase() ? "border-primary font-bold text-primary" : "border-transparent hover:border-orange-500 hover:text-orange-500 text-secondary"}`}
                            onClick={() => {
                                setActiveTab(category.Title.toLowerCase());
                                setSelectedItem(null);
                            }}
                        >
                            {category.Title}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-8/12 flex flex-col">
                <p className="flex justify-end text-[14px] py-1">Ціна/Вага</p>
                <AnimatePresence mode="wait">
                    {currentCategory && (
                        <motion.div
                            className="flex flex-col gap-y-3 transition-all"
                            variants={fadeIn("right", 0)}
                            initial="hidden"
                            animate="show"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.1 }}
                            key={activeTab}
                        >
                            {currentCategory.ListItems.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4 border-b border-underlinec">
                                    <div
                                        className="flex items-center justify-between w-full group cursor-pointer"
                                        onClick={() => {
                                            if (isValidItem(item)) {
                                                setSelectedItem(item);
                                            }
                                        }}
                                    >
                                        <p className="font-primary italic text-[16px] ml-1 cursor-pointer transition group-hover:text-primary">
                                            {item.ItemName}
                                        </p>
                                        {(item.ItemPrice || item.ItemWeight) && (
                                            <p className="font-odd">
                                                {item.ItemPrice}{item.ItemPrice && item.ItemWeight && "/"}{item.ItemWeight}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
            {selectedItem && (
                <ItemPopup
                    item={selectedItem}
                    closePopup={() => setSelectedItem(null)}
                    categoryTitle={activeTab}
                />
            )}

        </LazyBackground>
    );
}
