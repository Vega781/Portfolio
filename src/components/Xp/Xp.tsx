import { TechSlider } from '../TechSlider/TechSlider'
import styles from './Xp.module.scss'

export const Xp = () => {
    return (
        <section className={styles.xp}>
            <div className={styles.xp__container}>
                <div className={styles.xp__left}>
                    <span className={styles.xp__years}>1 year of</span>
                    <h2 className={styles.xp__title}>XP</h2>
                    <span className={styles.xp__description}>with the most popular frontend ecosystems</span>
                </div>
                <div className={styles.xp__right}>
                    <TechSlider />
                </div>
            </div>
        </section>
    )
}