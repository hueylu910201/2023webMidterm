import React from 'react';
import { Steps } from 'antd';

export default function CheckoutSteps(props) {
  return (
    <div className="container checkout-steps">
      <Steps current={props.current}  type="navigation" >
        <Steps.Step title="基本資料" />
        <Steps.Step title="選擇支付方式" />
        <Steps.Step title="確認訂單" />
        <Steps.Step title="送出訂單" />
      </Steps>
    </div>
  );
}
