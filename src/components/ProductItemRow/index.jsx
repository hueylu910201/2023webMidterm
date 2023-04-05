import Link from '../Link';
import styles from './productitemRow.module.css';

export default function ProductItemRow({product}) {
   return (
      <div className={styles.item}>
         <Link to={`/products/id/${product.id}`}>
            <img
               style={{ width: '100%' ,height: '100%',borderRadius:'3%'}}
               src={product.image}
               alt={product.name} />
         </Link>
         <div className={styles.info}>
            <p className={styles.name}>
               {product.name}
            </p>
            <div className={styles.mainInfo}>
               <span className={styles.category}>
                  {product.category}
               </span>
               <span
                  className={styles.during}>
                  片長 : {product.during}
               </span>
            </div>

         </div>
      </div>
   );
}
