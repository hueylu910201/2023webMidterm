import styles from "./hamburgermenu.module.css"
import { theme } from "antd";

export default function HamMenu({ onClick, isOnTouch }) {
   const {
      token: { colorHeader },
  } = theme.useToken();
   const bar1Style = isOnTouch ? styles.hamMenuBar1_Touch : styles.hamMenuBar1;
   const bar2Style = isOnTouch ? styles.hamMenuBar2_Touch : styles.hamMenuBar2;
   const bar3Style = isOnTouch ? styles.hamMenuBar3_Touch : styles.hamMenuBar3;

   return (
      <span onClick={onClick} className={`${styles.hamMenu} ${styles.showMobile}`}>
         <span className={bar1Style} style={{backgroundColor:colorHeader}}></span>
         <span className={bar2Style} style={{backgroundColor:colorHeader}}></span>
         <span className={bar3Style} style={{backgroundColor:colorHeader}}></span>
      </span>
   );
}