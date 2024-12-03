import { Swiper, SwiperSlide } from 'swiper/react';
import { Icon } from '@iconify/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from './TechSlider.module.scss';
import { technologies } from '../../data/technologies';

export const TechSlider = () => {
    return (
        <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={2.5}
            pagination={{ clickable: true }}
            className={styles.swiper}
        >
            {technologies.map((tech, index) => (
                <SwiperSlide key={index}>
                    <div
                        className={styles.slide}
                        style={{ backgroundColor: tech.bgColor }}
                    >
                        <Icon icon={tech.icon} className={styles.icon} />
                        <div className={styles.name}>{tech.name}</div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}