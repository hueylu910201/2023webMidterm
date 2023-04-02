import NavLink from '../NavLink';
import { Drawer } from 'antd';

import styles from './navbar.module.css';

export default function NavBar({ open, onClose , title}) {

    const NavBarContent = () => (
        <>
            <NavLink to="/products/category/動畫"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                動畫
            </NavLink>
            <NavLink to="/products/category/喜劇"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                喜劇
            </NavLink>
            <NavLink to="/products/category/動作"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                動作
            </NavLink>
            <NavLink to="/products/category/音樂歌舞"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                音樂歌舞
            </NavLink>
            <NavLink to="/products/category/冒險"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                冒險
            </NavLink>        
        </>
    )

    return (
        <>
            <div className={styles.navBar}>
                <NavBarContent />
            </div>
            <Drawer 
                title={title} 
                placement="left" 
                onClose={onClose} 
                open={open} 
            >
                <div className={styles.drawer}>
                    <NavBarContent />
                </div>
            </Drawer>
        </>

    );
}