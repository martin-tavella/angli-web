// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Usa el nombre de la variable CSS que definiste
        'vintageRotter': ["var(--font-vintage-rotter)", "serif"],
         'manrope': ['var(--font-manrope)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
