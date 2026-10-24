/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./app.js",
    "./assets/**/*.{html,js,css}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: '#56325f',
          dark: '#392141',
          soft: '#eee6ef',
        },
        gold: '#f2d95c',
        red: '#ed2d23',
        ink: '#28222a',
        muted: '#756c78',
        cream: '#fbf8f2',
        paper: '#fffdf9',
        line: '#e9e1e7',
        green: '#344f43',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        monastic: '0.25em',
        whisper: '0.4em'
      },
      boxShadow: {
        soft: '0 18px 50px rgba(45, 28, 49, 0.12)',
        dialog: '0 25px 100px rgba(33, 19, 38, 0.25)',
        stamp: '0 5px 20px rgba(57, 33, 65, 0.09)',
        'button-hover': '0 8px 18px rgba(57, 33, 65, 0.11)',
        nav: '0 10px 18px rgba(57, 33, 65, 0.05)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-18%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
      screens: {
        'sm': '640px',
        'md': '701px',
        'lg': '1001px',
        'xl': '1280px',
        '2xl': '1450px',
      },
    },
  },
  plugins: [],
};

// Support both Tailwind Play CDN in the browser and Node module exports for build tools
if (typeof window !== 'undefined') {
  window.tailwind = window.tailwind || {};
  window.tailwind.config = config;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
}
