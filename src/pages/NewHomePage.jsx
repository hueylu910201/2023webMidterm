import Header from "../components/Header"
import MyCarousel from "../components/MyCarousel";
import ProductListRow from "../components/ProductListRow";
import Footer from "../components/Footer";
import movies from "../json/products.json"


export default function NewHomePage() {
    return (
        <div className="mainmainLayout">
             <Header/>
            <MyCarousel/>
            <ProductListRow movies={movies}/>
            <Footer/>
        </div>
    )
}