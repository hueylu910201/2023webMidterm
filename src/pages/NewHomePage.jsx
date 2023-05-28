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
import { useProductById ,useProducts} from "../react-query";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api";

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
    // const {productId}=useParams();;
    // const { data, isLoading } = useProductById(productId);
    // const movies = data || [];
    // const { data: movies, isLoading, error } = useQuery("/", getProducts);

    // if (isLoading) {
    //   return <div>Loading...</div>;
    // }
  
    // if (error) {
    //   return <div>Error: {error.message}</div>;
    // }


    const { categoryName } = useParams();
    const category = !categoryName
      ? "/"
      : categoryName.toUpperCase()
      ;
  
    const { data, isLoading } = useProducts(category);
    const movies = data || [];
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
                <Header  className="layoutHeader"/>
                <MyCarousel />
                <ProductListRow movies={movies} isLoading={isLoading} active/>
                <Information />
                <ScrollToTopButton/>
                <Footer />
            </div>
        </motion.div>

    )
}