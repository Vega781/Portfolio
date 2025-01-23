import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from './TechSlider.module.scss';
import { techslider } from '../../data/technologies';
import { getTechIconUrl } from '../../utils/getTechIconUrl';

export const TechSlider = () => {
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                700: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1440: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
            pagination={{ clickable: true }}
            className={styles.swiper}
        >
            {techslider.map((tech, index) => (
                <SwiperSlide key={index}>
                    <div
                        className={styles.slide}
                        style={{ background: tech.gradient }}
                    >
                        <img src={getTechIconUrl(tech.icon)} alt={tech.name} className={styles.icon} />
                        {/* <Icon icon={tech.icon} className={styles.icon} /> */}
                        <div className={styles.name}>{tech.name}</div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}