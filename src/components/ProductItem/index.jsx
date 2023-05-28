import { theme } from 'antd';
import Link from '../Link';
import styles from './productitem.module.css';
import _ from 'lodash';
import { FavoriteIcon } from '../Icons';
import { useToggleFavoriteProduct, useUserInfo } from '../../react-query';

export default function ProductItem({ product }) {

   const {
      token: { colorTextBase },
   } = theme.useToken();
   const { mutate } = useToggleFavoriteProduct();
   const { data: userInfo } = useUserInfo() || {};
   const favorites = userInfo.favorites || [];
   let isFavorite = _.includes(favorites, product.id);
   const toggleFavorite = () => {
      if (!!userInfo?.uid)
         mutate({ productId: product.id, uid: userInfo?.uid })
   }

   return (
      <div className={styles.item}>
         <Link to={`/products/id/${product.id}`}>
            <img
               style={{ width: '100%', height: '100%', borderRadius: '8%' }}
               src={product.image}
               alt={product.name} />
         </Link>
         <div className={styles.info}>
            <h2 className={styles.name}>
               {product.name}
            </h2>
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
