import { useParams } from 'react-router-dom';
import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";
import { motion } from "framer-motion";


function Product() {
   const {
      token: { colorBgBase, colorTextBase },
   } = theme.useToken();
   const { productId } = useParams();
   const product = products.find(
      (x) => x.id === productId
   );

   return (
      <motion.div
         initial={{ opacity: 0, x: -200, y: 0 }}
         animate={{ opacity: 1, x: 0, y: 0 }}
         exit={{ opacity: 0, x: window.innerWidth }}
         transition={{ duration: 0.3, type: "spring" }}
      >
         <div className="mainLayout">
            <Helmet>
               <title>product</title>
               <style>{`
               body { 
                  background-color: ${colorBgBase}; 
                  color: ${colorTextBase}
               }
            `}</style>
            </Helmet>
            <Header
               className="layoutHeader"
               title="電影介紹"
               slogan="An example made by Vite."
            />
            <div className="layoutContent container">
               <ProductDetail product={product} />
            </div>
            <Footer className="layoutFooter" />
         </div>
      </motion.div>

   );
}

export default Product;
