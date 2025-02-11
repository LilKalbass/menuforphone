export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 100 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? 100 : direction === 'right' ? -80 : 0,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.3,
                delay: delay,
                ease: [0.25, 0.75, 0.5, 1],
            },
        },
        exit: {
            y: direction === 'up' ? -80 : direction === 'down' ? 80 : 0,
            x: direction === 'left' ? -80 : direction === 'right' ? 80 : 0,
            opacity: 0,
            transition: {
                type: 'tween',
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
            },
        }
    };
};
