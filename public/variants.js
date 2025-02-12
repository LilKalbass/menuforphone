export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
            opacity: 0,
            x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
            transition: {
                type: 'tween',
                duration: 0.5,
                delay: delay,
                ease: [0.8, 0.5, 0.7, 1],  // Adjusted easing function for smoother transitions
            },
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.2,
                delay: delay,
                ease: [0.8, 0.5, 0.7, 1],  // Adjusted easing function for smoother transitions



            },
        },
    };
};
