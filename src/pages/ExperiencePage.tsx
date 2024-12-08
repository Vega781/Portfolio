import { ExperienceEffect } from '../components/Effects/ExperienceEffect'
import styles from '../styles/ExperiencePage.module.scss'

export const ExperiencePage = () => {
    return (
        <div className={styles.experience}>
            <ExperienceEffect className={styles.experience__container}>
                <h1 className={styles.experience__title}>Experience</h1>
                <p className={styles.experience__text}>
                I am at the start of my development career, currently building practical experience through personal projects and open-source contributions. My strong foundation in React, TypeScript, and modern web development practices demonstrates my commitment to writing quality code. I am actively seeking my first commercial role where I can apply my technical skills and grow as a professional developer.
                </p>
            </ExperienceEffect>
        </div>
    )
}