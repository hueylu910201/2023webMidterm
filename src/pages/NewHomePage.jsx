import Header from "../components/Header"
import MyCarousel from "../components/MyCarousel";
import ProductListRow from "../components/ProductListRow";
import Information from "../components/Information";
import Footer from "../components/Footer";
import movies from "../json/products.json";
import { theme } from "antd";
import { motion } from "framer-motion";


export default function NewHomePage() {
    const {
        token: { colorList },
    } = theme.useToken();
    return (
        <motion.div
            initial={{ opacity:0, x:-200, y:0}}
            animate={{ opacity:1, x:0, y:0}}
            exit={{ opacity:0, x:window.innerWidth}}
            transition={{ duration:0.3, type:"spring"}}
        >
            <div className="mainmainLayout" style={{ overflowX: 'hidden', width: '100%', backgroundColor: colorList }}>
                <Header />
                <MyCarousel />
                <ProductListRow movies={movies} />
                <Information />
                <Footer />
            </div>
        </motion.div>

    )
}