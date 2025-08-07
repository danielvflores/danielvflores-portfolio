/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    // @tailwindcss/line-clamp ya está incluido por defecto en Tailwind CSS v3.3+
  ],
};