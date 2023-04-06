import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    colorBgBase	: "#222222",
    colorTextBase: "#ffffff",
    fontFamily:'Noto Sans TC',
    colorTextFooter: "#ffffff",
    fontWeight:"900",
    colorBgFooter: "#000000",
    colorHeader:"#494c4d",
    colorInformation:"#444545",
    colorList:"#212121",
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "#9192f5",
    }
  },
};

const lightTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorBgFooter: "#02a4f0",
    colorTextFooter: '#ffffff',
    colorHover:'#a8a8a8',
    colorHeader:'#94BFEB',
    colorInformation:'#a7e3ff',
    colorList:'#ffffff',
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "#9192f5",
    },
  },
};

export { lightTheme, darkTheme };
