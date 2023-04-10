import { Modal, Button, Select, theme } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems } from "../../redux/cartSlice";

import styles from "./basketmodal.module.css"
import { CartIcon } from "../Icons";
import { selectCartItems } from "../../redux/cartSlice";
const { Option } = Select;

export default function BasketModal({ isOpen, toggleModal }) {
   const { token: { colorHeader} } = theme.useToken();

   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);

   const handleCancel = () => toggleModal(!isOpen);
   const getTotalPrice = () => {
      return (cartItems.length > 0) ?
         cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   }

   return (
      <Modal
         title="您的購物車"
         open={isOpen}
         onCancel={handleCancel}
         footer={null}
      >
         {cartItems.length === 0 ? (
            <div>購物車空空的!</div>
         ) : (
            cartItems.map(item => (
               <li key={item.id} className={styles.item}>
                  <Link to={`/products/id/${item.id}?qtyFromBasket=${item.qty}`}>
                     <div onClick={handleCancel}>
                        <img className={styles.image} src={item.image} alt={item.name} />
                     </div>
                  </Link>
                  <div className={styles.content}>
                     <div className={styles.name}>{item.name}</div>
                     <div>
                        數量: {"   "}
                        <Select
                           defaultValue={item.qty}
                           onChange={(qty) => dispatch(addCartItems({
                              id: item.id,
                              name: item.name,
                              image: item.image,
                              price: item.price,
                              countInStock: item.countInStock,
                              qty,
                           }))}
                        >
                           {[...Array(item.countInStock).keys()].map((x) => (
                              <Option key={x + 1} value={x + 1}>
                                 {x + 1}
                              </Option>
                           ))}
                        </Select>
                     </div>
                  </div>
                  <div>
                     <div className={styles.price}>
                        ${item.price * item.qty}
                     </div>
                     <div className={styles.delete} onClick={() => dispatch(removeCartItems(item.id))}>
                        x
                     </div>
                  </div>
               </li>
            ))
         )}
         <div className={styles.wrap}>
            總金額:
            <div className={styles.totalPrice}>${getTotalPrice()}</div>
         </div>
         <div className={styles.noticeContainer} style={{borderColor:colorHeader}}>
            <h3>注意事項</h3>
            <p>1.每部電影出租後72小時內可無限次觀看，超時費用將另計。</p>
            <p>2.請勿私自拷貝、轉售、側錄，違者可罰200萬新台幣整。</p>
            <p>3.如有發現光碟磨損、無法觀看等人為損壞情形須照價賠償。</p>
            <p>4.若光碟有破損導致無法觀看，請盡速向本公司聯繫做替換。</p>
         </div>
         <Button
            className={styles.btn}
            type="primary"
            style={{backgroundColor:colorHeader}}
         >
            <CartIcon color={"#ffffff"} />
            <span style={{ marginLeft: 12 }}>結帳</span>
         </Button>
      </Modal>
   );
}