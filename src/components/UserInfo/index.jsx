import { UserOutlined, UserSwitchOutlined } from '@ant-design/icons';
import { theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from "../../react-query";
import styles from "./userinfo.module.css";

export default function UserInfo(props) {
   const { data: userInfo} = useUserInfo();
   const navigate = useNavigate();
   const {
      token: { colorTextBase },
    } = theme.useToken();

   const goToProfile = () => {
      if(userInfo?.name)
         navigate("/auth/profile")
      else
         navigate("/auth/login?redirect=/auth/profile");
   };

   return (

      <div onClick={goToProfile} style={{ ...props.style ,color:colorTextBase}} className={styles.userInfo} >
         {userInfo
            ? <UserOutlined className={styles.userInfoOutlined} />
            : <UserSwitchOutlined className={styles.userInfoOutlined} />
         }
         <p className={styles.userInfoText}>
            {!!userInfo?.name
               ? `${userInfo.name}'s`
               : `請登入`
            }
         </p>
      </div>

   );
}
