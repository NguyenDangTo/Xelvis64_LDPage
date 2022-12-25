/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        default_hero: "url('/ig-img-1.jpeg')",
        blog_hero: "url('/ig-img-2.jpeg')",
        project_hero: "url('/ig-img-3.jpeg')",
        about_hero: "url('/ig-img-4.jpeg')",
      },
    },
  },
  important: true,
  plugins: [],
};
