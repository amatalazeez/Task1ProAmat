/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          '600': '#6E5773',
          '200': '#BB8493',
          '100': '#704264',

          '700': '#23021F',
          // يمكنك إضافة المزيد من تدرجات اللون البنفسجي هنا
        },
      },
      // أي إعدادات Tailwind CSS أخرى
    },
  },
  plugins: [require("flowbite/plugin")],
};
