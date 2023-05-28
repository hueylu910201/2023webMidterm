import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { WarningOutlined } from "@ant-design/icons";

import { useRegisterWithEmailPassword } from "../../react-query";
import styles from "./registercard.module.css"

const RegisterCard = ({ redirect }) => {

  const { mutate , error, isLoading, isError, isSuccess, data } = useRegisterWithEmailPassword();

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    mutate(values);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(redirect);
    }
  }, [isSuccess, redirect]); 

  return (
    <Form
      form={form}
      name="register"
      onFinish={onFinish}
      className={styles.registerForm}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="姓名:"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your name!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="你的信箱"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="輸入密碼"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="rePassword"
        label="確認密碼"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please re-enter your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }

              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
      >
        <Checkbox>
          已閱讀過<Link to={"/"}>同意條款</Link>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        {isLoading ? (
          <Button
            type="primary"
            className={styles.loginForm__button}
            htmlType="submit"
            loading
          >
            註冊帳號
          </Button>
        ) : (
          <Button
            type="primary"
            className={styles.loginForm__button}
            htmlType="submit"
          >
            註冊帳號
          </Button>
        )}
        已經有帳號了?{" "}
        <Link to={`/auth/login?redirect=${redirect}`}>請登入</Link>
        {!isError ? (
          <div></div>
        ) : (
          <div className={styles.loginForm__errorWrap}>
            <h3 className={styles.loginForm__errorTitle}>
              <WarningOutlined  />
              {"  "}註冊失敗!
            </h3>
            <p className={styles.loginForm__errorMessage}>{error.message}</p>
          </div>
        )}
      </Form.Item>
    </Form>
  );
};
export default RegisterCard;
