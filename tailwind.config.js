// tailwind.config.js
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: {
                    960: "#191730",
                },
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
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
