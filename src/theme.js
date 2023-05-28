import { theme } from "antd";

const darkTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#1677ff",
    colorBgBase	: "#222222",
    colorTextBase: "#ffffff",
    fontFamily:'FakePearl-Regular',
    colorTextFooter: "#ffffff",
    fontWeight:"900",
    colorBgFooter: "#04101c",
    colorHeader:"#04101c",
    colorInformation:"#2e2d2d",
    colorList:"#3a3b3b",
    colorButtonTop:'#494c4d',
    colorNotice:"#7a8082"
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
    colorBgFooter: "#94BFEB",
    colorTextFooter: '#ffffff',
    colorHover:'#a8a8a8',
    colorHeader:'#94BFEB',
    colorInformation:'#a7e3ff',
    colorList:'#ffffff',
    colorButtonTop:'#d4f3ff',
    colorNotice:"#ffffff"
  },
  components: {
    Button: {
      colorPrimary: "#6366f2;",
      colorPrimaryHover: "#9192f5",
    },
  },
};

export { lightTheme, darkTheme };
