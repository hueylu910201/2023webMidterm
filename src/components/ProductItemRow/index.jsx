import Link from '../Link';
import styles from './productitemRow.module.css';
import { theme } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

import { motion, AnimatePresence } from 'framer-motion';

export default function ProductItemRow({ product, index }) {
  const {
    token: { colorTextBase },
  } = theme.useToken();

  return (
    <div style={{ marginBottom: '1rem' }} className={styles.container}>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card
            hoverable
            cover={
              <Link to={`/products/id/${product.id}`}>
                <div className={styles.cover}>
                  <img
                    style={{ width: '90%', height: '90%', borderRadius: '3%' }}
                    src={product.image}
                    alt={product.name}
                  />
                </div>
              </Link>
            }
          >
            <Meta
              title={
                <div className={styles.item}>
                  <div className={styles.info}>
                    <p className={styles.name} style={{ color: colorTextBase }}>
                      {product.name}
                    </p>
                    <div className={styles.mainInfo}>
                      <span className={styles.category} style={{ color: colorTextBase }}>
                        {product.category}
                      </span>
                      <span className={styles.during} style={{ color: colorTextBase }}>
                        {product.during}
                      </span>
                    </div>
                  </div>
                </div>
              }
            />
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}