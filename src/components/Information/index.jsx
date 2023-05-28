import { Row, Col } from "antd";
import { useState, useEffect } from 'react';
import { theme } from "antd";
import { motion } from 'framer-motion';
import Link from "../Link"
import styles from "../Information/information.module.css"


export default function Information() {
    const {
        token: { colorInformation, colorTextBase },
    } = theme.useToken();
    
    return (
        <Row gutter={[24, 24]} className={styles.container} style={{ backgroundColor: colorInformation }}>
            <Col
                sm={{ span: 24 }}
                lg={{ span: 6 }}
                xl={{ span: 10 }}
                xxl={{ span: 6 }}
                className={`${styles.content}`}
            >


                <motion.div
                    className={styles.textArea}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <p className={styles.contentTitle} style={{ color: colorTextBase }}>最新消息</p>
                    <Link to="/"><h2>2023/03/25 賀!南港分店新開幕</h2></Link>
                    <Link to="/"><h2>2023/03/20 最新!黑豹2藍光DVD上架了</h2></Link>
                    <Link to="/"><h2>2023/03/19 行動支付功能上線</h2></Link>
                    <Link to="/"><h2>2023/03/10 官網維護時間公告</h2></Link>
                    <Link to="/"><h2>2023/02/10 新會員等級上路中</h2></Link>
                </motion.div>


            </Col>

            <Col
                sm={{ span: 24 }}
                lg={{ span: 1 }}
                xl={{ span: 1 }}
                xxl={{ span: 1 }}
                className={styles.content2}>

                <div className={styles.textLine}>
                </div>

            </Col>

            <Col
                sm={{ span: 24 }}
                lg={{ span: 6 }}
                xl={{ span: 10 }}
                xxl={{ span: 6 }}
                className={styles.content}>

                <motion.div
                    className={styles.textArea}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}

                >
                    <p className={styles.contentTitle} style={{ color: colorTextBase }}>優惠活動</p>
                    <Link to="/"> <h2>2023/04/01 兒童節優惠 動畫片8折</h2></Link>
                    <Link to="/"> <h2>2023/03/31 匯豐銀行刷卡滿額享79折</h2></Link>
                    <Link to="/"><h2>2023/01/01 6000元消費回饋好禮專區</h2></Link>
                    <Link to="/"><h2>2023/03/25 普發6000元回饋專區</h2></Link>
                    <Link to="/"> <h2>2023/01/31 新會員免費兌換一部電影</h2></Link>
                </motion.div>

            </Col>

        </Row>

    )
}