import { Row, Col } from "antd";
import ProductItem from "../ProductItem";
import MoonLoader from "react-spinners/MoonLoader";
import styles from "../ProductList/productList.module.css"

export default function ProductList({ products, isLoading }) {
  return (
    <>
      {
        isLoading ?
          <div className='loading'>
            <MoonLoader
              color={'#4fadff'}
              loading={isLoading}
              size={100}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
          : <div className={styles.porductList}>
            <Row gutter={[32, 32]}>
              {products.map(product => (
                <Col
                  key={product.id}
                  sm={{ span: 12 }}
                  lg={{ span: 8 }}
                  xl={{ span: 6 }}
                  xxl={{ span: 4 }}
                >
                  <ProductItem product={product} />
                </Col>
              ))}
            </Row>
          </div>
      }
    </>



  );
}

