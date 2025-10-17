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
          primary: "#0000FF", // 
          secondary: "#1500FF", // กรอบ
          info: "#76D7EA", // ฟ้าสดใส
          accent: "#64A7FA", // 
          neutral: "#F3F9FC", // ฟ้าขาว
          "base-100": "#FFFFFF", // 
          "base-300": "#CFD4D4", // 
          success: "#9E9E9E", // เทา
          warning: "#FCDE70", // เหลืองพาสเทล
          error: "#fe5858", // แดงพาสเทล
        },
      },
    ],
  }
};
