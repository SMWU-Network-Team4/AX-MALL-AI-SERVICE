// src/styles/theme.ts

const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",

    gray: {
      gray: "#8E8E93",
      gray3: "#C7C7CC",
      gray5: "#E5E5EA",
      gray6: "#F2F2F7"
    },

    green: {
      base: "#0B8E0F",
      dark: "#0B8E0F"
    },
  },

  typography: {
    heading3: {
      fontFamily: "Pretendard",
      fontWeight: 600,
      fontSize: "20px",
      lineHeight: "28px",
      letterSpacing: "-0.2%",
    },
    body1: {
      fontFamily: "Pretendard",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0%",
    },
    body2: {
      fontFamily: "Pretendard",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0%",
    },
  },

  radius: {
    s: "8px",
    m: "12px",
    l: "20px",
  },

  shadow: {
    card: "0px 2px 8px rgba(0,0,0,0.08)",
    popup: "0px 4px 12px rgba(0,0,0,0.15)",
  },
};

export default theme;
