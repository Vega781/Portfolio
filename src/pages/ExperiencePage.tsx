import { ExperienceEffect } from '../components/Effects/ExperienceEffect'
import { ExperienceList } from '../components/ExperienceList/ExperienceList'
import styles from '../styles/ExperiencePage.module.scss'
import { socialLinks } from '../data/socialLinks'

export const ExperiencePage = () => {
    return (
        <div className={styles.experience__page}>
            <ExperienceEffect className={styles.experience__container}>
                <div className={styles.content__top}>
                    <span className={styles.page__title}>
                        &lt;Here, you can know me a little more and see <br /> my whole experience as a Frontend Software Engineer. /&gt;
                    </span>
                    <a href={socialLinks.hh} className={styles.cv__link}>Download CV</a>
                </div>
            </ExperienceEffect>
            <ExperienceList />
        </div>
    )
}