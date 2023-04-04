import { Carousel } from "antd"
import styles from "./carousel.module.css"

export default function MyCarousel() {
    return (
        <>
            <Carousel autoplay easing className={styles.carouselContainer}>
                <div className={styles.contentStyle}>
                    <img
                        alt="carousel1"
                        className={styles.carouselItem}
                        src="\images\carousel1.jpg"
                    />
                </div>
                <div className={styles.contentStyle}>
                    <img
                        alt="carousel2"
                        className={styles.carouselItem}
                        src="\images\carousel2.jpg"
                    />
                </div>
                <div className={styles.contentStyle}>
                    <img
                        alt="carousel1"
                        className={styles.carouselItem}
                        src="\images\carousel3.jpg"
                    />
                </div>
            </Carousel>
        </>

    )
}