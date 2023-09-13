module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "wave-scale": "waveScale 1s infinite",
            },
            animationDelay: {
                100: "100ms",
                200: "200ms",
                300: "300ms",
                400: "400ms",
                500: "500ms",
                600: "600ms",
                700: "700ms",
                800: "800ms",
                900: "900ms",
                1000: "1000ms",
            },
            colors: {
                slate: {
                    920: "#191C3C",
                    960: "#191730",
                },
            },
            padding: {
                25: "7.3rem",
            },
            backdropBlur: {
                none: "0",
                blur: "blur(2px)",
                "blur-lg": "blur(4px)",
                "blur-xl": "blur(8px)",
                "blur-2xl": "blur(12px)",
                "blur-3xl": "blur(16px)",
            },
            boxShadow: {
                bottom: "0 13px 10px -10px rgba(0.8, 0.8, 0.8, 0.8)",
            },
            font: {
                primary: "Ysabeau Infant, sans-serif",
            },
            fontSize: {
                'xxs': '0.55rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
