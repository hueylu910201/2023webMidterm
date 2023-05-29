import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import ShippingHeader from '../components/ShippingHeader';
import Footer from "../components/Footer"
import ShoppingResult from '../components/ResultCard';

function PlaceOrder() {
   const {
      token: { colorBgBase, colorTextBase },
   } = theme.useToken();

   return (
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
         <ShippingHeader
            title="PlaceOrder Page" step1 step2 step3 step4
            className="layoutHeader"
            current={3}
         />
         <div className="layoutContent container">
            <ShoppingResult />
         </div>
         <Footer className="layoutFooter" />
      </div>
   );
}

export default PlaceOrder;