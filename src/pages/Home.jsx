import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import ScrollToTopButton from '../components/ScrollToTopButton';
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList";
// import products from "../json/products.json";
import { useProducts } from '../react-query';
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function Home() {
  const {
    token: { colorBgBase, colorTextBase, fontFamily },
  } = theme.useToken();
  const { categoryName } = useParams();
  const category = !categoryName
    ? "/"
    : categoryName.toUpperCase()
    ;

  const { data, isLoading } = useProducts(category);
  const products = data || [];

  const title = !categoryName
    ? "電影清單"
    : products[0]?.category;

  return (
    <motion.div
      initial={{ opacity: 0, x: -200, y: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: window.innerWidth }}
      transition={{ duration: 0.3, type: "spring" }}
    >
      <ScrollToTopOnMount />
      <div className="mainLayout" style={{ overflowX: 'hidden' }}>
        <Helmet>
          <title>{title}</title>
          <style>{`
            body { 
              background-color: ${colorBgBase}; 
              color: ${colorTextBase};
              fontfamily: ${fontFamily};
              font-family: 'FakePearl-Regular',sans-serif;
            }
        `}</style>
        </Helmet>
        <Header
          className="layoutHeader"
          title={title}
          slogan="An example made by Vite."
          products={products}
        />
        <div className="layoutCOntent container">
          <ProductList products={products} isLoading={isLoading} />
        </div>
        <Footer className="layoutFooter" />
      </div>
      <ScrollToTopButton />
    </motion.div>


  );
}

export default Home;
