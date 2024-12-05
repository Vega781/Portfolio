import { ExperienceEffect } from '../components/Effects/ExperienceEffect'
import styles from '../styles/ExperiencePage.module.scss'

export const ExperiencePage = () => {
    return (
        <div className={styles.experience}>
            <ExperienceEffect className={styles.experience__container}>
                <h1 className={styles.experience__title}>Experience</h1>
                <p className={styles.experience__text}>
                    Unfortunately, I currently have no commercial development experience. However, I am a quick learner with a keen interest in technology and software development. I am eager to apply my skills and knowledge in a professional setting and am committed to continuous learning and growth.
                </p>
            </ExperienceEffect>
        </div>
    )
}