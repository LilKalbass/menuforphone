import {useEffect, useState} from "react";

export const LazyBackground = ({ bgImage, children, className }) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setIsIntersecting(true);
                            observer.disconnect();
                        }
                    });
                },
                { threshold: 0.1 }
            );

            const element = document.getElementById('lazy-background');
            if (element) {
                observer.observe(element);
            }

            return () => {
                if (observer) {
                    observer.disconnect();
                }
            };
        }
    }, []);

    return (
        <div
            id="lazy-background"
            className={className}
            style={{
                backgroundImage: isIntersecting ? `url(${bgImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
            }}
        >
            {children}
        </div>
    );
};