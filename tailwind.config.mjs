/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: "320px", max: "640px" }, // Small devices (phones)
        md: { min: "641px", max: "1024px" }, // Medium devices (tablets)
        lg: { min: "1025px", max: "2440px" }, // Large devices (laptops, desktops)
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('daisyui'),],
};
