module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0000FF",
          secondary: "#8b9dc3",
          info: "#f7f7f7",
          accent: "#64A7FA",
          neutral: "#F3F9FC",
          "base-100": "#FFFFFF", 
          "base-300": "#CFD4D4",
          success: "#9E9E9E",
          warning: "#005b96",
          error: "#fe5858",
        },
      },
    ],
  }
};
