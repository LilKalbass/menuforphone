import Image from "next/image";

export const Header = () => {
    return (
        <header className="flex flex-col absolute inset-0">
            <div className="container mx-auto h-full flex items-start justify-center">
                <div className="md:w-2/5 z-50 flex flex-col items-center">
                    <Image
                        src="/assets/Logo.svg"
                        style={{
                            width: "100%",
                            height: "auto",
                        }}
                        width={100}
                        height={100}
                        priority={true}
                        alt="logo_img"
                        className="object-contain"
                    />
                    <h2 className="text-4xl">Прайс Лист</h2>
                </div>
            </div>
        </header>
    );
};
