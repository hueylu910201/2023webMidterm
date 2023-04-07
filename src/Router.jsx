import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import { useSelector } from "react-redux";
import { HelmetProvider } from 'react-helmet-async'
import { darkTheme, lightTheme } from './theme';
import { selectLightMode } from "./redux/colorSlice";
import AnimateRouter from './AnimateRouter';

function Router() {
  const lightMode = useSelector(selectLightMode);
  const theme = lightMode ? lightTheme : darkTheme;
  return (
      <ConfigProvider theme={theme} >
        <HelmetProvider context={{}}>
          <BrowserRouter>
            <AnimateRouter/>
          </BrowserRouter>
        </HelmetProvider>
      </ConfigProvider>
  );
}

export default Router;
