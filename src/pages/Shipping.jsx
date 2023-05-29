import { theme } from 'antd';
import { Helmet } from "react-helmet-async"
import ShippingHeader from '../components/ShippingHeader';
import Footer from "../components/Footer";
import ShippingAddressCard from '../components/ShippingAddressCard';

function Shipping() {
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
            title="填寫基本資料" step1 step2
            className="layoutHeader"
            current={0}
         />
         <div className="layoutContent container">
            <ShippingAddressCard />
         </div>
         <Footer className="layoutFooter" />
      </div>
   );
}

export default Shipping;
