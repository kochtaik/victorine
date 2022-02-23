module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      desktop: "885px",
    },
    colors: {
      base: "#9D3FE7",
      baseDark: "#602093",
      baseLight: "#AE60EB",
      error: "#D51A52",
      warning: "#FF9500",
      success: "#00B998",
      info: "#0F0BAB",
      black: "#1A141F",
      hint: "#4B3A5A",
      border: "#ABA7AF",
      disabled: "#D4D2D5",
      spacer: "#D9D1E0",
      light: "#F5F3F7",
      white: "#FFFFFF",
      transparent: "transparent",
    },
    borderRadius: {
      "none": '0',
      "sm": "4px",
      "md": "8px",
      "lg": "12px",
      "xl": "24px",
      "full": "9999px",
    },
    boxShadow: {
      xs: "0px 15px 10px 0px rgba(211, 192, 214, 0.07)",
      sm: "0px 8px 16px 0px rgba(62, 19, 77, 0.07)",
      md: "0px 15px 30px 0px rgba(62, 19, 77, 0.09)",
      // for pop-up windows
      lg: "0px 10px 30px 0px rgba(62, 19, 77, 0.47)",
    },
    extend: {},
  },
  plugins: [],
}