import { Button, Result, theme } from 'antd';
import { Link } from 'react-router-dom';
import ShippingHeader from '../ShippingHeader';
import Footer from '../Footer';
import styles from './resultCard.module.css';


export default function ShoppingResult() {
    const {
        token: { colorHeader, colorTextBase, colorCardBg, colorInformation, colorLogin },
    } = theme.useToken();

    return (
        <div style={{ backgroundColor: colorCardBg, height: '100vh' }}>
            <ShippingHeader
                title="已送出訂單" step1 step2 step3
                className="layoutHeader"
                current={3}
            />
            <div className={styles.result}>
                <Result
                    status="success"
                    title="購買成功!"
                    subTitle="感謝您的購買!我們會盡快處理您的訂單!"
                    extra={[
                        <Link to="/">
                            <Button type="primary" key="console" style={{ backgroundColor: colorInformation }}>
                                回到首頁
                            </Button>
                        </Link>

                    ]}

                />
            </div>

            <div s>
                <Footer />
            </div>

        </div>
    );


}