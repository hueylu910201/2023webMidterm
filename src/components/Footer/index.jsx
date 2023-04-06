import { theme } from 'antd';
import styles from './footer.module.css';
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons';

export default function Footer() {
    const {
        token: { colorBgFooter, colorTextFooter },
    } = theme.useToken();
    return (
        <div style={{
            backgroundColor: colorBgFooter,
            color: colorTextFooter,
        }}>
            <div className="container">
                <footer className={styles.footer}>
                    <div className={styles.content}>
                        <img
                            alt="logo"
                            className={styles.logo}
                            src="\images\movielogo.png"
                        />
                        <p>影視快帝</p>
                    </div>
                    <div className={styles.contactUS}>
                        <p style={{ fontWeight: 800 }}>服務說明</p>
                        <p>方案介紹</p>
                        <p>客服中心</p>
                        <p>隱私政策</p>
                    </div>
                    <div className={styles.contactUS}>
                        <p style={{ fontWeight: 800 }}>相關資訊</p>
                        <p>關於</p>
                        <p>使用條款</p>
                    </div>
                    <div className={styles.followUS}>
                        <p style={{ fontWeight: 800 }}>追蹤我們</p>
                        <div className={styles.iconsArea}>
                            <a href="#" >
                                <FacebookOutlined style={{ fontSize: '36px', color: colorTextFooter }} />
                            </a>
                            <a href="#">
                                <InstagramOutlined style={{ fontSize: '36px', color: colorTextFooter }} />
                            </a>
                        </div>
                    </div>
                    {/* <p className={styles.copyRight}>
                        © 2006 - 2023 Copyright Digital Technology Design
                    </p> */}
                </footer>
            </div>

        </div>

    );
}