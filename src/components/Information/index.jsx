import { Row, Col } from "antd";
import { theme } from "antd";
import Link from "../Link"
import styles from "../Information/information.module.css"


export default function Information() {
    const {
        token: { colorInformation , colorTextBase },
    } = theme.useToken();
    return (
        <Row gutter={[24, 24]} className={styles.container} style={{backgroundColor:colorInformation}}>
            <Col
                sm={{ span: 24 }}
                lg={{ span: 6 }}
                xl={{ span: 6 }}
                xxl={{ span: 6 }}
                className={`${styles.content}`}
            >


                <div className={styles.textArea}>
                    <p className={styles.contentTitle} style={{color: colorTextBase}}>最新消息</p>
                    <Link to="/"><h2>2023/01/01 防疫鬆綁須知</h2></Link>
                    <Link to="/"><h2>2023/01/01 防詐騙聲明</h2></Link>
                    <Link to="/"><h2>2023/01/01 防疫鬆綁須知</h2></Link>
                    <Link to="/"><h2>2023/01/01 行動版支付功能上線</h2></Link>
                    <Link to="/"><h2>2023/01/01 官方APP維護時間公告</h2></Link>
                </div>


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
                xl={{ span: 6 }}
                xxl={{ span: 6 }}
                className={styles.content}>

                <div className={styles.textArea}>
                    <p className={styles.contentTitle} style={{color: colorTextBase}}>優惠活動</p>
                    <Link to="/"> <h2>2023/01/01 揪團看電影買四送一</h2></Link>
                    <Link to="/"> <h2>2023/01/01 吉拿棒新口味八折優惠</h2></Link>
                    <Link to="/"><h2>2023/01/01 6000元消費回饋好禮專區</h2></Link>
                    <Link to="/"><h2>2023/01/01 情侶優惠活動</h2></Link>
                    <Link to="/"> <h2>2023/01/01 2023會員優惠搶先看</h2></Link>
                </div>

            </Col>

        </Row>

    )
}