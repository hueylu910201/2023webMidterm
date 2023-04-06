import { Row, Col } from "antd";
import { theme } from "antd";
import { useRef } from "react";
import ProductItemRow from "../ProductItemRow";
import styles from "../ProductListRow/productListRow.module.css"

export default function ProductListRow({ movies }) {
  const {
    token: { colorList , colorTextBase , colorInformation},
} = theme.useToken();
  const productListRef = useRef(null);

  const scrollLeft = () => {
    productListRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    productListRef.current.scrollLeft += 300;
  };
  return (
    <div style={{backgroundColor:colorList}}>
      <a className={styles.title} style={{backgroundColor:colorList ,color:colorTextBase}}>現正熱映</a>
      <div className={styles.arrowContainer} style={{backgroundColor:colorList}}>
        <button onClick={scrollLeft} className={styles.left} style={{backgroundColor:colorInformation ,color:colorTextBase}}>◀</button>
        <div className={styles.porductList} ref={productListRef}>
          <Row gutter={[32, 32]} className={styles.row}>
            {movies.map(product => (
              <Col
                key={product.id}
                sm={{ span: 12 }}
                lg={{ span: 10 }}
                xl={{ span: 6 }}
                xxl={{ span: 4 }}
              >
                <ProductItemRow product={product} />
              </Col>
            ))}
          </Row>




        </div>
        <button onClick={scrollRight} className={styles.right} style={{backgroundColor:colorInformation ,color:colorTextBase}}>▶</button>
      </div>
    </div>

  );
}

