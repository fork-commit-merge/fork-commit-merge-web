module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'wave-scale': 'waveScale 1s infinite'
      },
      animationDelay: {
        100: '100ms',
        200: '200ms',
        300: '300ms',
        400: '400ms',
        500: '500ms',
        600: '600ms',
        700: '700ms',
        800: '800ms',
        900: '900ms',
        1000: '1000ms'
      },
      colors: {
        modern: {
          blue: 'rgba(2,104,225,0.88)',
          darkBlue: '#0F1F3A',
          navy: '#000C2D',
          lightBlue: '#6793E6',
          white: '#FFFFFF',
          gray: '#F0F4F8',
          lightGray: '#F8FAFC',
          black: '#000000'
        },
        themes: {
          blue: {
            primary: '#101935',
            secondary: '#000C2D',
            accent: '#844FBA'
          },
          green: {
            primary: '#0F1B0F',
            secondary: '#0A140A',
            accent: '#4CAF50'
          },
          red: {
            primary: '#1B0F0F',
            secondary: '#140A0A',
            accent: '#EF4444'
          },
          yellow: {
            primary: '#1B1A0F',
            secondary: '#14130A',
            accent: '#F59E0B'
          },
          purple: {
            primary: '#27005D',
            secondary: '#000C2D',
            accent: '#844FBA'
          },
          black: {
            primary: '#000000',
            secondary: '#000000',
            accent: '#000000'
          }
        },
        slate: {
          920: '#13111C',
          960: '#0F0D15'
        },
        purple: {
          850: '#844FBA',
          900: '#27005D'
        },
        accent: {
          primary: '#844FBA',
          secondary: '#A3A0FB'
        }
      },
      padding: {
        25: '7.3rem'
      },
      backdropBlur: {
        none: '0',
        blur: 'blur(2px)',
        'blur-lg': 'blur(4px)',
        'blur-xl': 'blur(8px)',
        'blur-2xl': 'blur(12px)',
        'blur-3xl': 'blur(16px)'
      },
      boxShadow: {
        bottom: '0 13px 10px -10px rgba(0.8, 0.8, 0.8, 0.8)',
        modern:
          '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'modern-hover':
          '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      },
      font: {
        primary: 'Ysabeau Infant, sans-serif'
      },
      fontSize: {
        xxs: '0.55rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
