/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
      },
    },
    screens: {
      ph: '360px',
      pl: '500px',
      sm: '640px',
      tb: '768px',
      md: '1024px',
      lg: '1200px',
      xl: '1468px'
    },
    fontFamily: {
      primary: 'var(--font-pt-serif)',
      secondary: 'var(--font-forum)',
      odd: 'var(--font-exo)'
    },
    extend: {
      colors: {
        primary: "#065465",
        secondary: "#17939F",
        underlinec: "#A9D1D8"
      },
      backgroundImage: {
        chips: 'url(/assets/bg/chipsBg.webp)',
        flowers: 'url(/assets/bg/flowerBg.webp)',
        garnish: 'url(/assets/bg/garnishBg.webp)',
        syrops: 'url(/assets/bg/syropBg.webp)'
      }
    },
  },
  plugins: [],
};
