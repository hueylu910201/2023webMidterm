import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button , theme } from "antd";
import { Link } from "react-router-dom";
import CheckoutSteps from "../CheckoutSteps";
import { selectShippingAddress, saveShippingAddress } from "../../redux/cartSlice";
import styles from "./shippingaddresscard.module.css";

export default function ShippingAddressCard() {
  const {
    token: { colorHeader, colorTextBase, colorCardBg, colorInformation, colorLogin },
 } = theme.useToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shippingAddress = useSelector(selectShippingAddress);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    dispatch(saveShippingAddress(values));
    navigate("/shopping/payment");
  };

  return (
    <Form
      onFinish={handleSubmit}
      name="normal_login"
      className={styles.shippingForm}
      initialValues={shippingAddress}
      form={form}
      style={{ backgroundColor: colorCardBg, borderColor: colorHeader }}
    >
      <Form.Item
        label="全名: "
        name="fullName"
        rules={[
          {
            type: "string",
          },
          {
            required: true,
            message: "Please input your full name",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Enter full name" />
      </Form.Item>
      <Form.Item
        label="地址: "
        name="address"
        rules={[
          {
            type: "string",
          },
          {
            required: true,
            message: "Please input your address",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Enter Address" />
      </Form.Item>
      <Form.Item
        label="郵遞區號: "
        name="city"
        rules={[
          {
            required: true,
            message: "Please input your city",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Enter city" />
      </Form.Item>


      <Form.Item
        label="手機號碼: "
        name="country"
        rules={[
          {
            required: true,
            message: "Please input your country",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Enter country" />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.shippingForm__button}
          style={{ backgroundColor: colorInformation }}
        >
          下一步
        </Button>
      </Form.Item>

      <Form.Item>
        <Link to="/">
          <Button
            type="primary"
            className={styles.shippingForm__button}
            style={{ backgroundColor: colorInformation }}
          >
            取消
          </Button>
        </Link>
      </Form.Item>

    </Form>
  );
}

