import Link from '../Link';
import styles from './productitemRow.module.css';
import { theme } from 'antd';

export default function ProductItemRow({product}) {
   const {
      token: { colorTextBase },
  } = theme.useToken();
   return (
      <div className={styles.item}>
         <Link to={`/products/id/${product.id}`}>
            <img
               style={{ width: '100%' ,height: '100%',borderRadius:'3%'}}
               src={product.image}
               alt={product.name} />
         </Link>
         <div className={styles.info}>
            <p className={styles.name}style={{color:colorTextBase}}>
               {product.name}
            </p>
            <div className={styles.mainInfo}>
               <span className={styles.category}style={{color:colorTextBase}}>
                  {product.category}
               </span>
               <span
                  className={styles.during}style={{color:colorTextBase}}>
                  片長 : {product.during}
               </span>
            </div>

         </div>
      </div>
   );
}
