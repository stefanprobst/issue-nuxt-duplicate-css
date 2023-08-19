export default defineNuxtConfig({
  css: ["tailwindcss/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
