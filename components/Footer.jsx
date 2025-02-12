import {FaTelegram, FaPhone} from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className='absolute z-[90] items-center bottom-3 left-1/2 transform -translate-x-1/2 flex'>
            <div className='flex gap-x-2 py-0.5 items-center'>
                <a href="https://t.me/+380730672127" target="_blank" rel="noopener noreferrer" className=''>
                    <FaTelegram className='text-[26px] text-primary'/>
                </a>
                <a href={`tel:${+380730672127}`} className=''>
                    <FaPhone className='text-[26px] text-primary'/>
                </a>
            </div>
        </footer>
    )
}