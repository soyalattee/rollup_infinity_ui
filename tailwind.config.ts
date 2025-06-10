import animate from "tailwindcss-animate";

const config = {
  content: [
    "./index.html", // HTML 파일
    "./src/**/*.{js,ts,jsx,tsx}", // 모든 소스파일
  ],
  theme: {
    extend: {},
  },
  plugins: [animate],
};

export default config;
