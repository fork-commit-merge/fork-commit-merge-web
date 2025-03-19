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
        themes: {
          blue: {
            primary: "#13111C",
            secondary: "#0F0D15",
            accent: "#6C5CE7",
          },
          green: {
            primary: "#0F1B0F",
            secondary: "#0A140A",
            accent: "#4CAF50",
          },
          red: {
            primary: "#1B0F0F",
            secondary: "#140A0A",
            accent: "#EF4444",
          },
          yellow: {
            primary: "#1B1A0F",
            secondary: "#14130A",
            accent: "#F59E0B",
          },
          purple: {
            primary: "#1A1625",
            secondary: "#130F1E",
            accent: "#9D4EDD",
          },
        },
        slate: {
          920: "#13111C",
          960: "#0F0D15",
        },
        purple: {
          850: "#2D2B55",
          900: "#1E1E3F",
        },
        accent: {
          primary: "#6C5CE7",
          secondary: "#A3A0FB",
        }
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
        xxs: "0.55rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

