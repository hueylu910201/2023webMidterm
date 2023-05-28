import { Row, Col, Skeleton } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { theme } from "antd";
import { useRef } from "react";
import ProductItemRow from "../ProductItemRow";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../ProductListRow/productListRow.module.css"

function SampleNextArrow(props) {
  const {token: {colorTextBase}} = theme.useToken();
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.right}
      style={{
        ...style,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        borderRadius: '100%'
      }}
      onClick={onClick}
    >
      <div style={{ right: '100px' }}>
        <RightOutlined style={{ scale: '250%',color:colorTextBase }} />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const {token: {colorTextBase}} = theme.useToken();
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.left}
      style={{
        ...style,
        position: 'absolute',
        top: '50%',
        zIndex: '999',
        borderRadius: '100%',
        transform: 'translateY(-50%)'
      }}
      onClick={onClick}
    >
      <LeftOutlined style={{ scale: '250%' ,color:colorTextBase }} />
    </div>
  );
}

export default function ProductListRow({ movies, isLoading }) {
  const {
    token: { colorList, colorTextBase, colorInformation },
  } = theme.useToken();
  const productListRef = useRef(null);


  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div style={{ marginBottom: '2.6rem' }}>
      <a className={styles.title} style={{ backgroundColor: colorList, color: colorTextBase }}>現正熱映</a>
      <Slider  {...settings} >

        {/* <div style={{ backgroundColor: colorList }}>

  <a className={styles.title} style={{ backgroundColor: colorList, color: colorTextBase }}>現正熱映</a>

  <div className={styles.arrowContainer} style={{ backgroundColor: colorList }}>

    <button onClick={scrollLeft} className={styles.left} style={{ backgroundColor: colorInformation, color: colorTextBase }}>◀</button>

    <div className={styles.porductList} ref={productListRef}>

      <Row gutter={[32, 32]} className={styles.row}>

        {movies.map(product => (
          <Col
            key={product.id}
            sm={{ span: 12 }}
            lg={{ span: 10 }}
            xl={{ span: 6 }}
            xxl={{ span: 4 }}
          >
            <Skeleton loading={isLoading}>
              <ProductItemRow product={product} />
            </Skeleton>

          </Col>
        ))}
      </Row>
    </div>

    <button onClick={scrollRight} className={styles.right} style={{ backgroundColor: colorInformation, color: colorTextBase }}>▶</button>
  </div>


</div> */}
        {movies.map(product => (
          <Skeleton loading={isLoading}>
            <ProductItemRow product={product} />
          </Skeleton>

        ))}
      </Slider >
    </div>


  );
}

