import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config}*/
const config: Config = {
  content: [
   "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{ts,tsx}", // from the original configuration
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
