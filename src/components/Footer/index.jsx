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
                        <p style={{ fontWeight: 800 }}>DESCRIPTIONS</p>
                        <p style={{ textIndent: '1rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum deleniti iste sit enim. Veniam eos sequi laudantium optio, saepe excepturi illo autem quibusdam delectus illum ipsa? Nobis culpa debitis error!</p>
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
                    <div className={styles.contactUS}>
                        <p style={{ fontWeight: 800 }}>聯絡我們</p>
                        <p>01 2345 6789</p>
                    </div>
                    <p className={styles.copyRight}>
                        © 2006 - 2023 Copyright Digital Technology Design
                    </p>
                </footer>
            </div>

        </div>

    );
}