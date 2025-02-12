import Slider from "@/components/Slider";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <script
                    async
                    type="text/javascript"
                    src="https://telegram.org/js/telegram-web-app.js"
                ></script>
            </Head>
            <main className="h-screen">
                <Slider />
            </main>
        </>
    );
}
