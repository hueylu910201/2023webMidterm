import { Row, Col } from "antd";
import ProductItemRow from "../ProductItemRow";
import styles from "../ProductListRow/productListRow.module.css"

export default function ProductListRow({movies}) {
  return (
    <div className={styles.porductList}>
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

  );
}

