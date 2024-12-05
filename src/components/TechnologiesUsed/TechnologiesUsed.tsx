import styles from './TechnologiesUsed.module.scss'
import { databases, frontEndEngineerDesign } from "../../data/techStack"
import { backEnd } from "../../data/techStack"
import { languages } from "../../data/techStack"
import { devops } from "../../data/techStack"
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
                <li className={`${styles.technologies__frontend} ${styles.technologies__item}`}>
                    <span className={styles.technologies__block_title}>Front-end Engineer Design</span>
                    <StackList technologies={frontEndEngineerDesign} liClassName={styles.list__li} iconContainerClassName={styles.icon__container} iconClassName={styles.li__icon} />
                </li>
                <li className={`${styles.technologies__backend} ${styles.technologies__item}`}>
                    <span className={styles.technologies__block_title}>Back-end Engineer</span>
                    <StackList technologies={backEnd} liClassName={styles.list__li} iconContainerClassName={styles.icon__container} iconClassName={styles.li__icon} />
                </li>
                <li className={`${styles.technologies__databases} ${styles.technologies__item}`}>
                    <span className={styles.technologies__block_title}>Databases</span>
                    <StackList technologies={databases} liClassName={styles.list__li} iconContainerClassName={styles.icon__container} iconClassName={styles.li__icon} />
                </li>
                <li className={`${styles.technologies__devops} ${styles.technologies__item}`}>
                    <span className={styles.technologies__block_title}>Devops</span>
                    <StackList technologies={devops} liClassName={styles.list__li} iconContainerClassName={styles.icon__container} iconClassName={styles.li__icon} />
                </li>
                <li className={`${styles.technologies__1200} ${styles.technologies__item}`}>
                    <span className={styles.technologies__block_title}>Front-end Engineer Design</span>
                    <StackList technologies={frontEndEngineerDesign} liClassName={styles.list__li} iconContainerClassName={styles.icon__container} iconClassName={styles.li__icon} />
                </li>
            </TechnologiesEffect>
        </section>
    )
}
