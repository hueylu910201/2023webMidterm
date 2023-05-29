import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { theme } from "antd";
import { motion } from "framer-motion";
import styles from "./profilecard.module.css"
import { useUpdateProfile, useLogout, useUserInfo } from "../../react-query";

const ProfileCard = ({ redirect }) => {
  const {
    token: { colorHeader, colorTextBase, colorCardBg, colorInformation, colorLogin, colorButtonText },
  } = theme.useToken();
  const { data: userInfo } = useUserInfo() || {};
  const update = useUpdateProfile();
  const logout = useLogout();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onUpdate = async (values) => {
    console.log("Received update info: ", values);
    update.mutate({ ...values, uid: userInfo.uid });
  };

  const onLogout = () => {
    logout.mutate();
    navigate("/");
  }

  useEffect(() => {
    form.setFieldsValue(userInfo)
  }, [userInfo])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80vh' }}
    >
      <Form
        onFinish={onUpdate}
        name="normal_login"
        className={styles.profileForm}
        form={form}
        initialValues={userInfo}
        style={{ backgroundColor: colorCardBg, borderColor: colorHeader }}

      >
        <div >
          <h1 className={styles.title} style={{ color: colorTextBase }}>個人檔案</h1>
        </div>
        <Form.Item
          label="姓名: "
          name="name"
          rules={[
            {
              type: "string",
              message: "並非有效的姓名!",
            },
            {
              message: "請輸入你的姓名!",
            },
          ]}
        >
          <Input placeholder={userInfo.name} />
        </Form.Item>
        <Form.Item
          label="地址: "
          name="adrs"
          rules={[
            {
              type: "string",
              message: "並非有效的電話號碼!",
            },
            {
              message: "請輸入你的電話號碼!",
            },
          ]}
        >
          <Input placeholder={userInfo?.adrs || ""} />
        </Form.Item>
        <Form.Item
          label="電話: "
          name="tel"
          rules={[
            {
              type: "string",
              message: "並非有效的電話號碼!",
            },
            {
              message: "請輸入你的電話號碼!",
            },
          ]}
        >
          <Input placeholder={userInfo?.tel || 'xxxx-xxxxxx'} />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.profileForm__button}
            style={{ backgroundColor: colorInformation, color: colorButtonText }}
          >
            更新個人檔案
          </Button>

          <Button
            type="primary"
            danger
            style={{ marginTop: "1rem", backgroundColor: colorHeader, color: colorButtonText }}
            className={styles.profileForm__button}
            onClick={onLogout}
          >
            登出
          </Button>
        </Form.Item>
      </Form>
    </motion.div>
  );
};
export default ProfileCard;
