import Header from "../components/Header"
import MyCarousel from "../components/MyCarousel";
import ProductListRow from "../components/ProductListRow";
import Information from "../components/Information";
import Footer from "../components/Footer";
import movies from "../json/products.json"


export default function NewHomePage() {
    return (
        <div className="mainmainLayout" style={{overflowX:'hidden',width:'100%'}}>
            <Header/>
            <MyCarousel/>
            <ProductListRow movies={movies}/>
            <Information/>
            <Footer/>
        </div>
    )
}