import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtobasket.module.css"
import { Basket } from "../Icons";
import { theme } from "antd";

export default function AddToCart({ product, qty }) {
  const {
    token: { colorHeader ,colorTextBase},
} = theme.useToken();
  const dispatch = useDispatch();

  const openNotification = () => {
    notification.open({
      message: '通知!',
      description:
        `已新增 ${qty}部 ${product.name} 到您的購物車!`,
      placement: 'bottomRight'
    });
  };

  const addToCart = () => {
    openNotification();
    dispatch(addCartItems({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      countInStock: product.countInStock,
      qty,
    }))
  };

  return (
    <Button type="primary" className={styles.btn} onClick={addToCart} style={{backgroundColor:colorHeader}}>
      <Basket color={"#ffffff"}/>加入購物車
    </Button>
  );
}
