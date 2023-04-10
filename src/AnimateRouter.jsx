import { useLocation, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NewHomePage from './pages/NewHomePage';
import NotFoundPage from './pages/NotfonudPage';
import Product from './pages/Product';
import { AnimatePresence } from 'framer-motion';

function AnimateRouter() {
    const location = useLocation();
    return (
        //   <ConfigProvider theme={theme} >
        //     <HelmetProvider context={{}}>
        //       <BrowserRouter>
        //         <Routes>
        //         <Route path="/" element={<NewHomePage />} />
        //           <Route path="/products/category" element={<Home />} />
        //           <Route path="products">
        //             <Route path="category/:categoryName" element={<Home />} />
        //             <Route path="id/:productId" element={<Product />} />
        //           </Route>
        //         </Routes>
        //       </BrowserRouter>
        //     </HelmetProvider>
        //   </ConfigProvider>
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<NewHomePage />} />
                <Route path="/products/category" element={<Home />} />
                <Route path="products">
                    <Route path="category/:categoryName" element={<Home />} />
                    <Route path="id/:productId" element={<Product />} />
                </Route>
                <Route path="*" element={<NotFoundPage/>} />
            </Routes>
        </AnimatePresence>

    );
}

export default AnimateRouter;