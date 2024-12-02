import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg/gray": "#F9FAFF",
        "bg/line": "#25282B",
        "gray-1": "#333333",
        "gray-3": "#828282",
        brand: "#FDC435",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        PD: ["var(--font-PD)"],
        nunito: ["var(--font-nunito)"],
        comfortaa: ["var(--font-comfortaa)"],
        raleway: ["var(--font-raleway)"],
      },
      screens: {
        xsm: "285px",
      },
    },
  },
  plugins: [],
} satisfies Config;
