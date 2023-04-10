import Header from "../components/Header"
import MyCarousel from "../components/MyCarousel";
import ProductListRow from "../components/ProductListRow";
import Information from "../components/Information";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import movies from "../json/products.json";
import { theme } from "antd";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async"
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


export default function NewHomePage() {
    const {
        token: { colorList },
    } = theme.useToken();
    return (
        <motion.div
            initial={{ opacity: 0, x: -200, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: window.innerWidth }}
            transition={{ duration: 0.3, type: "spring" }}
        >
            <ScrollToTopOnMount/>
            <div className="mainmainLayout" style={{ overflowX: 'hidden', width: '100%', backgroundColor: colorList }}>
                <Helmet>
                    <title>影視快帝</title>
                </Helmet>
                <Header />
                <MyCarousel />
                <ProductListRow movies={movies} />
                <Information />
                <ScrollToTopButton/>
                <Footer />
            </div>
        </motion.div>

    )
}