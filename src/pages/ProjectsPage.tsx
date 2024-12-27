import { ExperienceEffect } from '../components/Effects/ExperienceEffect'
import { Projects } from '../components/Projects/Projects'
import { socialLinks } from '../data/socialLinks'
import styles from '../styles/ProjectsPage.module.scss'

export const ProjectsPage = () => {
    return (
        <section className={styles.projectsPage}>
            <ExperienceEffect>
                <div className={styles.content__top}>
                    <span className={styles.page__title}>
                        &lt; Here, you can know me a little more and see my projects /&gt;
                    </span>
                    <a href={socialLinks.hexlet} className={styles.cv__link}>Download CV</a>
                </div>
            </ExperienceEffect>
            <Projects />
        </section>
    )
}
