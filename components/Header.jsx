import Image from "next/image";

export const Header = () => {
    return (
        <header className="flex flex-col absolute inset-0">
            <div className="container mx-auto h-full flex items-start justify-center">
                <div className="md:w-2/5 z-50 flex flex-col items-center">
                    <Image
                        src="/assets/favicon.ico"
                        style={{
                            width: "26%",
                            height: "auto",
                        }}
                        width={100}
                        height={100}
                        priority
                        alt="logo_img"
                        className="object-contain"
                    />
                    <h2 className="text-[16px] text-center text-primary">ВНИМАНИЕ!!!!!! <br/> ИДЕТ ОБСТРЕЛ ФЕКАЛЬЯМИ, ПРИГНИСЬ!!!</h2>
                </div>
            </div>
        </header>
    );
};
