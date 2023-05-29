import { useDispatch, useSelector } from "react-redux";
import { useNavigate ,Link} from "react-router-dom";
import { Form, Radio, Button , theme} from "antd";
import CheckoutSteps from "../CheckoutSteps";
import { selectPaymentMethod, savePaymentMethod } from "../../redux/cartSlice";
import styles from "./paymentmethodcard.module.css";

export default function PaymentMethodCard() {
   const {
      token: { colorHeader, colorTextBase, colorCardBg, colorInformation, colorLogin },
   } = theme.useToken();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { paymentMethod: paymentMethod } = useSelector(selectPaymentMethod);
   const [form] = Form.useForm();

   const handleSubmit = ({ paymentMethod: value }) => {
      dispatch(savePaymentMethod(value));
      navigate('/shopping/placeorder');
   };

   return (
      <Form
         onFinish={handleSubmit}
         name="normal_login"
         className={styles.paymentForm}
         initialValues={paymentMethod}
         form={form}
      >

         <Form.Item name="paymentMethod" label="支付方式: " rules={[{ required: true }]}>
            <Radio.Group>
               <Radio value="Google pay">Google pay</Radio>
               <Radio value="貨到付款">貨到付款</Radio>
               <Radio value="Line pay">Line pay</Radio>
            </Radio.Group>
         </Form.Item>

         <Form.Item>
            <Button
               type="primary"
               htmlType="submit"
               className={styles.paymentForm__button}
               style={{ backgroundColor: colorInformation }}
            >
               下一步
            </Button>
         </Form.Item>
         <Form.Item>
            <Link to="/shopping/shipping">
               <Button
                  type="primary"
                  className={styles.paymentForm__button}
                  style={{ backgroundColor: colorInformation }}
               >
                  上一步
               </Button>
            </Link>
         </Form.Item>
      </Form>
   );
}

