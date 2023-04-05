import { useState, useEffect } from "react";
import ReactPlayer from 'react-player'
import { Row, Col, Select } from "antd";
import { useSearchParams } from 'react-router-dom';
import AddToBasket from "../AddToBasket"
import styles from "./productdetail.module.css"
const { Option } = Select;

function ProductDetail({ product }) {
   const [searchParams] = useSearchParams();
   const qtyFromBasket = searchParams.get('qtyFromBasket');
   const initQty = !!qtyFromBasket ? Number(qtyFromBasket) : product.countInStock > 0 ? 1 : 0
   const [qty, setQty] = useState(initQty);

   useEffect(() => {
      setQty(initQty)
   }, [initQty])

   return (
      <div className={styles.container}>
         <Row gutter={[24, 24]}
            style={{ justifyContent:'center',marginTop: '2rem', width: '100%' }}
         >
            <Col
               xs={{ span: 24 }}
               lg={{ span: 6 }}
            >
               <img
                  alt={product.name}
                  className={styles.image}
                  src={product.image}
               />
            </Col>
            <Col
               xs={{ span: 24 }}
               lg={{ span: 14 }}
            >
               <div className={styles.info} >
                  <h2 className={styles.category} >
                     {product.category}
                  </h2>
                  <h1 className={styles.name} >
                     {product.name}
                  </h1>
                  <h1 className={styles.name} >
                     {product.eng_name}
                  </h1>
                  <h1 className={styles.director} >
                     導演:{product.director}
                  </h1>
                  <h2 className={styles.actor} >
                     演員:{product.actor}
                  </h2>
                  <h2 className={styles.during} >
                     時長:{product.during}
                  </h2>

               </div>
            </Col>
            <Col
               xs={{ span: 24 }}
               lg={{ span: 14 }}
            >
               <h2>劇情簡介:</h2>
               <p className={styles.description}>
                  {product.description_long}
               </p>
               <div className={styles.wrap}>
                  <p className={styles.price} >
                     NT${product.price}.00
                  </p>
                  <p className={styles.status}>
                     庫存狀態: {product.countInStock > 0 ? "供貨中" : "缺貨中"}
                  </p>
                  <div className={styles.qty}>
                     數量: {"   "}
                     <Select
                        defaultValue={qty}
                        key={qty}
                        className={styles.selectStyle}
                        onChange={val => setQty(val)}
                     >
                        {[...Array(product.countInStock).keys()].map((x) => (
                           <Option key={x + 1} value={x + 1}>
                              {x + 1}
                           </Option>
                        ))}
                     </Select>
                  </div>
                  <p className={styles.qty}>
                     總價: {product.price * qty}
                  </p>
                  <AddToBasket product={product} qty={qty} />
               </div>
            </Col>
            <Col
               xs={{ span: 20 }}
               sm={{ span: 12 }}
               lg={{ span: 8 }}
               xl={{ span: 6 }}
               xxl={{ span: 4 }}
               justifyContent='center'
            >
               <div className={styles.playerWrapper}>
                  <ReactPlayer
                     url={product.url}
                     width='100%'
                     height='100%'
                  />
               </div>
            </Col>
         </Row>
      </div>

   );
}

export default ProductDetail;