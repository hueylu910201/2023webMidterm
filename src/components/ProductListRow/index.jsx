import { Row, Col } from "antd";
import { useRef } from "react";
import ProductItemRow from "../ProductItemRow";
import styles from "../ProductListRow/productListRow.module.css"

export default function ProductListRow({ movies }) {
  const productListRef = useRef(null);

  const scrollLeft = () => {
    productListRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    productListRef.current.scrollLeft += 300;
  };
  return (
    <div>
      <a className={styles.title}>現正熱映</a>
      <div className={styles.arrowContainer}>
        <button onClick={scrollLeft} className={styles.left}>◀</button>
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
        <button onClick={scrollRight} className={styles.right}>▶</button>
      </div>
    </div>

  );
}

