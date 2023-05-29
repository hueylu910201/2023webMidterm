import { Button, Result, theme } from 'antd';
import { Link } from 'react-router-dom';


export default function ShoppingResult () {
    const {
        token: { colorHeader, colorTextBase, colorCardBg, colorInformation, colorLogin },
    } = theme.useToken();

    return(
        <div style={{ backgroundColor: colorCardBg ,height:'100vh'}}>
        <Result
            status="success"
            title="購買成功!"
            subTitle="感謝您的購買!我們會盡快處理您的訂單!"
            extra={[
                <Link to="/">
                    <Button type="primary" key="console" style={{backgroundColor:colorInformation}}>
                        回到首頁
                    </Button>
                </Link>

            ]}
            
        />
    </div>
    );


}