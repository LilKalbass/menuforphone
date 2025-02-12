import { CgClose } from "react-icons/cg";
import Image from "next/image";
import { useState } from "react";

export const ItemPopup = ({ item, closePopup }) => {
    const [isOpen, setIsOpen] = useState(true);

    const closeLocalPopup = () => {
        setIsOpen(false);
        closePopup();
    };

    return (
        isOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                onClick={closeLocalPopup}
            >
                <div className="relative bg-white items-center flex justify-center flex-col p-4 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
                    <button
                        className="absolute top-0 right-1 text-primary hover:text-gray-800"
                        onClick={closeLocalPopup}
                    >
                        <CgClose className="text-4xl" />
                    </button>
                    <Image
                        src={item.ItemImg}
                        alt={item.ItemName}
                        width={256}
                        height={256}
                        loading='lazy'
                        className="object-cover rounded-md"
                    />
                    <p className="font-semibold text-lg">{item.ItemName}</p>
                    <p className='font-odd'>{item.ItemPrice}/{item.ItemWeight}</p>
                </div>
            </div>
        )
    );
};