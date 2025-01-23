import styles from './TechnologiesUsed.module.scss'
import { frameworks, technologies, languages, styling, others } from "../../data/technologies"
import { StackList } from '../StackList/StackList'
import { TechnologiesEffect } from '../Effects/TechnologiesEffect'

export const TechnologiesUsed = () => {
    return (
        <section className={styles.technologies}>
            <h2 className={styles.technologies__title}>These are the<br /> technologies I&rsquo;ve been using</h2>
            <TechnologiesEffect className={styles.technologies__container}>
                <li className={`${styles.technologies__langs} ${styles.technologies__item}`}>
                    <span className={styles.technologies__block_title}>Languages</span>
                    <StackList technologies={languages} liClassName={styles.list__li} iconContainerClassName={styles.icon__container} iconClassName={styles.li__icon} />
                </li>
                <li className={`${styles.frameworks__frontend} ${styles.technologies__item}`}>
                    <span className={styles.technologies__block_title}>Frameworks</span>
                    <StackList technologies={frameworks} liClassName={styles.list__li} iconContainerClassName={styles.icon__container} iconClassName={styles.li__icon} />
                </li>
                <li className={`${styles.technologies__frontend} ${styles.technologies__item}`}>
                    <span className={styles.technologies__block_title}>Technologies</span>
                    <StackList technologies={technologies} liClassName={styles.list__li} iconContainerClassName={styles.icon__container} iconClassName={styles.li__icon} />
                </li>
                <li className={`${styles.technologies__backend} ${styles.technologies__item}`}>
                    <span className={styles.technologies__block_title}>Styling</span>
                    <StackList technologies={styling} liClassName={styles.list__li} iconContainerClassName={styles.icon__container} iconClassName={styles.li__icon} />
                </li>
                <li className={`${styles.technologies__backend} ${styles.technologies__item}`}>
                    <span className={styles.technologies__block_title}>Other</span>
                    <StackList technologies={others} liClassName={styles.list__li} iconContainerClassName={styles.icon__container} iconClassName={styles.li__icon} />
                </li>
                <li className={`${styles.technologies__1200} ${styles.technologies__item}`}>
                    <span className={styles.technologies__block_title}>Technologies</span>
                    <StackList technologies={technologies} liClassName={styles.list__li} iconContainerClassName={styles.icon__container} iconClassName={styles.li__icon} />
                </li>
            </TechnologiesEffect>
        </section>
    )
}
