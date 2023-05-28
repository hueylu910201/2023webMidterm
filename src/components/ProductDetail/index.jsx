import { useState, useEffect } from "react";
import ReactPlayer from 'react-player'
import { Row, Col, Select } from "antd";
import { motion } from "framer-motion";
import { useSearchParams } from 'react-router-dom';
import AddToBasket from "../AddToBasket"
import CommentSection from "../CommentSection";
import styles from "./productdetail.module.css"
const { Option } = Select;

function ProductDetail({ product }) {
   const [searchParams] = useSearchParams();
   const String = product.description_long;
   const [descriptionLines, setDescriptionLines] = useState([]);
   const qtyFromBasket = searchParams.get('qtyFromBasket');
   const initQty = !!qtyFromBasket ? Number(qtyFromBasket) : product.countInStock > 0 ? 1 : 0
   const [qty, setQty] = useState(initQty);

   useEffect(() => {
      setQty(initQty)
   }, [initQty])

   useEffect(() => {
      if (typeof product.description_long === 'string') {
         const lines = product.description_long.split("\n");
         setDescriptionLines(lines);
      }
   }, [product.description_long]);


   const typingContainer = {
      hidden: { opacity: 0 },
      show: {
         opacity: 1,
         transition: {
            staggerChildren: 0.14,
         }
      }
   }

   const typingText = {
      hidden: { opacity: 0, y: "-20px" },
      show: {
         opacity: 1,
         y: "0",
         transition: {
            ease: 'easeIn',
         }
      }
   }

   return (
      <div className={styles.container}>
         <Row gutter={[32, 32]}
            style={{ justifyContent: 'center', marginTop: '2rem', width: '100%' }}
         >
            <Col
               xs={{ span: 24 }}
               lg={{ span: 8 }}
               xl={{ span: 6 }}
               justifyContent='center'
            >
               <img
                  alt={product.name}
                  className={styles.image}
                  src={product.image}
               />
            </Col>
            <Col
               xs={{ span: 24 }}
               lg={{ span: 12 }}
               justifyContent='start'
            >
               {/* <div className={styles.info} >


               </div> */}
               <div className={styles.wrap}>
                  <h1 className={styles.name} >
                     {product.name}
                  </h1>
                  <h1 className={styles.name} >
                     {product.eng_name}
                  </h1>
                  <h3 className={styles.during} >
                     時長:{product.during}
                  </h3>
                  <h2 className={styles.director} >
                     導演:{product.director}
                  </h2>
                  <h2 className={styles.actor} >
                     演員:{product.actor}
                  </h2>
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
               </div>
               <AddToBasket product={product} qty={qty} />
            </Col>
            <Col
               xs={{ span: 24 }}
               lg={{ span: 18 }}
            >
               <motion.div initial={{opacity:0}} whileInView={{ opacity: 1 }} style={{marginTop:'4rem'}}>
                  <motion.h2
                     variants={typingContainer} initial="hidden" animate="show" 
                  >  劇情簡介:{
                        descriptionLines.map((line, i) => (
                           <motion.p className={styles.description} key={i} variants={typingText}>
                              {line}
                           </motion.p>
                        ))
                     }
                  </motion.h2>
               </motion.div>

            </Col>
            <Col
               xs={{ span: 24 }}
               lg={{ span: 18 }}
               justifyContent='center'
            >
               <Row justify='center'>
                  <Col md={{ span: 24 }} lg={{ span: 24 }} justifyContent='center'>
                     <div className={styles.playerWrapper}>
                        <ReactPlayer
                           url={product.url}
                           width='100%'
                           height='100%'
                        />
                     </div>
                  </Col>
               </Row>
            </Col>
            {/* <Col              
               xs={{ span: 21 }}
               sm={{ span: 10 }}
               lg={{ span: 8 }}
               xl={{ span: 8 }}
               xxl={{ span: 4 }}
               justifyContent='center'>
               <CommentSection productId={product}/>
            </Col> */}

         </Row>

      </div>

   );
}

export default ProductDetail;