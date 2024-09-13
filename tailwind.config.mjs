/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        dBlue: "#091540",
        lBlue: "#7692FF",
        mBlue: "#3D518C",
      },
    },
  },
  plugins: [],
};
