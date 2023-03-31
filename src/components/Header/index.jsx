import { useState } from "react";
import Link from "../Link"
import NavBar from "../NavBar";
import styles from "./header.module.css";
import HamburgerMenu from "../HamburgerMenu"
import CartSummary from "../CartSummary";
import SetColorMode from "../SetColorMode"

export default function Header({ title, slogan }) {
    const [isOnTouch, setIsOnTouch] = useState(false);

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
                        <Link to="/">
                            <span className={styles.headerTitle}>
                                分類:{title}
                            </span>
                        </Link>
                        <div className={styles.iconWrap}>
                            <SetColorMode />
                            <CartSummary />
                        </div>
                    </div>
                </div>
                <NavBar open={isOnTouch} onClose={() => setIsOnTouch(false)} />
            </div>
        </div>

    );
}

