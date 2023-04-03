import { useState } from "react";
import { Menu, Dropdown } from 'antd';
import Link from "../Link"
import NavBar from "../NavBar";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import CartSummary from "../CartSummary";
import SetColorMode from "../SetColorMode"

export default function Header({ title, products }) {
    const [isOnTouch, setIsOnTouch] = useState(false);
    const menu = (
        <Menu>
            <Menu.Item key="1">
                <Link to="/products/category/動畫">動畫</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/products/category/動作">喜劇</Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to="/products/category/冒險">動作</Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to="/products/category/音樂歌舞">音樂歌舞</Link>
            </Menu.Item>
            <Menu.Item key="5">
                <Link to="/products/category/冒險">冒險</Link>
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="container">
            <div className={styles.header}>
                <div className={styles.headerWwrap}>
                    <HamburgerMenu
                        onClick={() => setIsOnTouch(!isOnTouch)}
                        isOnTouch={isOnTouch}
                    />
                    <div className={styles.headerItem}>
                        <Link to="/">
                            <span className={styles.headerTitle}>
                                首頁
                            </span>
                        </Link>
                        <Link to="/products/category">
                            <Dropdown overlay={menu}>
                                <span className={styles.headerTitle}>分類</span>
                            </Dropdown>
                        </Link>
                        <div className={styles.iconWrap}>
                            <SetColorMode />
                            <CartSummary />
                        </div>
                    </div>
                </div>
                <div className={styles.iconWrap2}>
                    <SetColorMode />
                    <CartSummary />
                </div>
                <h1 className={styles.categortTitle}>
                    {title}
                </h1>
                <div className={styles.navBar}>
                    <NavBar open={isOnTouch} title={title} onClose={() => setIsOnTouch(false)} />
                </div>

            </div>
        </div>

    );
}

