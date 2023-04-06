import Header from "../components/Header"
import MyCarousel from "../components/MyCarousel";
import ProductListRow from "../components/ProductListRow";
import Information from "../components/Information";
import Footer from "../components/Footer";
import movies from "../json/products.json";
import { theme } from "antd";


export default function NewHomePage() {
    const {
        token: { colorList },
    } = theme.useToken();
    return (
        <div className="mainmainLayout" style={{overflowX:'hidden',width:'100%',backgroundColor:colorList}}>
            <Header/>
            <MyCarousel/>
            <ProductListRow movies={movies}/>
            <Information/>
            <Footer/>
        </div>
    )
}