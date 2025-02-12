'use client'

import {FaTelegram} from "react-icons/fa6";
import {useEffect} from "react";

export const Footer = () => {
    useEffect(() => {
        if (typeof window !== "undefined" && window.Telegram?.WebApp) {
            window.Telegram.WebApp.init();
        }
    }, []);
    return (
        <footer className='absolute z-[90] items-center bottom-3 left-1/2 transform -translate-x-1/2 flex'>
            <div className='flex py-0.5 items-center'>
                <a href="https://t.me/SenonKray" target="_blank" rel="noopener noreferrer" className=''>
                    <FaTelegram className='text-[26px] '/>
                </a>
            </div>
        </footer>
    )
}