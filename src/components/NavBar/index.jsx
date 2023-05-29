import NavLink from '../NavLink';
import { Drawer, Menu, theme } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import styles from './navbar.module.css';

export default function NavBar({ open, onClose, title }) {
    const _title = window.location.pathname === '/' ? '首頁' : title;
    title = _title;
    const { SubMenu } = Menu;
    const {
        token: { colorBgBase, colorTextBase, fontFamily, colorHover },
    } = theme.useToken();
    const NavBarContent = () => (
        <>
            <NavLink to="/"
                className={({ isActive }) => (isActive ? styles.navItemActive : styles.navItem)}>
                首頁
            </NavLink>
            <Menu mode="inline" triggerSubMenuAction="click">
                <SubMenu title="電影分類" style={{ fontSize: '1.1rem', fontFfamily: 'FakePearl-Regular' , marginLeft:'-1rem' ,}}>
                    <Menu.Item key="0">
                        <NavLink to="/products/category/">所有分類</NavLink>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <NavLink to="/products/category/動畫">動畫</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to="/products/category/喜劇">喜劇</NavLink>
                    </Menu.Item>
                    <Menu.Item key="23">
                        <NavLink to="/products/category/動作">動作</NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <NavLink to="/products/category/音樂歌舞">音樂歌舞</NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <NavLink to="/products/category/冒險">冒險</NavLink>
                    </Menu.Item>
                </SubMenu>
            </Menu>
            <NavLink to="/"
                className={styles.navItem}>
                關於我們
            </NavLink>

            {/* <NavLink to="/products/category/動畫"
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
            </NavLink> */}


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
                theme={theme}
            >
                <div className={styles.drawer}>
                    <NavBarContent />
                </div>
            </Drawer>
        </>

    );
}