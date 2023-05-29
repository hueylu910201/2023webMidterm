import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Row, Col, Button , theme} from "antd";
import { selectCartItems, selectPaymentMethod, savePrice, selectShippingAddress } from "../../redux/cartSlice";

export default function PlaceOrderCard() {
   const {
      token: { colorHeader, colorTextBase, colorCardBg, colorInformation, colorLogin },
   } = theme.useToken();
   const cartItems = useSelector(selectCartItems);
   const shippingAddress = useSelector(selectShippingAddress);
   const paymentMethod = useSelector(selectPaymentMethod);
   const navigate = useNavigate();

   const placeOrderHandler = () => {
      dispatch(savePrice({
         itemPrice, shippingPrice, taxPrice, totalPrice
      }));
      navigate('/shopping/Result');
   };

   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }

   const toPrice = (num) => Number(num.toFixed(2)); // 5.123 => "5.12" => 5.12
   const itemsPrice = toPrice(
      cartItems.reduce((a, c) => a + c.qty * c.price, 0)
   );
   const shippingPrice = itemsPrice > 100 ? toPrice(0) : toPrice(10);
   const taxPrice = toPrice(0.15 * itemsPrice);
   const totalPrice = itemsPrice + shippingPrice + taxPrice;


   return (
      <Row gutter={[24, 24]} justify="center" style={{backgroundColor:colorCardBg}}>
         <Col
            xs={{ span: 20 }}
            lg={{ span: 4 }}

         >
            <div className="card card-body">
               <h1 style={{ display: 'flex', justifyContent: 'center' ,fontWeight:'bold'}}>個人資料</h1>
               <p>
                  <div style={{ display: 'flex', justifyContent: 'center' }}><strong >姓名:</strong> {shippingAddress.fullName} <br /></div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}><strong>地址: </strong> {shippingAddress.address}<br /></div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}> <strong>郵遞區號: </strong>{shippingAddress.city}<br /></div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}> <strong>手機號碼: </strong>{shippingAddress.country}<br /></div>
                  <div style={{ display: 'flex', justifyContent: 'center' }}><p ><strong>支付方式:</strong>{paymentMethod}</p></div>
               </p>
            </div>
            <div className="card card-body">

            </div>
            <div className="card card-body">
               <h1 style={{ display: 'flex', justifyContent: 'center' ,fontWeight:'bold'}}>您的商品</h1>
               {cartItems.length === 0 ? (
                  <div>購物車空空的!</div>
               ) : (
                  cartItems.map(item => (
                     <li key={item.id} className="cart-item" style={{ textDecoration: 'none', listStyle: 'none' }}>
                        <div className="cart-image" style={{ display: 'flex', justifyContent: 'center' }}>
                           <img src={item.image} alt={item.name} style={{ height: '20rem' }} />
                        </div>
                        <div className="cart-item-content">
                           <div className="cart-name" style={{display:'flex',justifyContent:'center'}}>商品名稱:{item.name}</div>
                           <div className="product-qty"style={{display:'flex',justifyContent:'center'}}>
                              數量: {item.qty} (${item.price * item.qty})
                           </div>
                        </div>

                     </li>
                  ))
               )}
               <div className="cart-total-price-wrap" style={{display:'flex',justifyContent:'center'}}>
                  <h1>總價:${getTotalPrice()}</h1>
                  <div className="cart-total-price"></div>
               </div>
               <Link to="/shopping/Result">
                  <Button
                     className="primary-btn"
                     block
                     type="primary"
                     onClick={placeOrderHandler}
                     style={{ backgroundColor: colorInformation }}
                  >
                     確認送出
                  </Button>
               </Link>

               <Link to="/shopping/payment">
                  <Button
                     type="primary"
                     block
                     className="primary-btn"
                     style={{ backgroundColor: colorInformation ,marginTop:'1rem',marginBottom:'1rem'}}
                  >
                     上一步
                  </Button>
               </Link>
            </div>

         </Col>
      </Row>

   );
}

