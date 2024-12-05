import { Projects } from '../components/Projects/Projects'
import styles from '../styles/ProjectsPage.module.scss'
// import { projects } from '../data/projects'

export const ProjectsPage = () => {
    return (
        <section className={styles.projectsPage}>
            <div className={styles.content__top}>
                <span className={styles.page__title}>
                    &lt; Here, you can know me a little more and see my projects /&gt;
                </span>
                <a href="https://hh.ru/resume_converter/Анисенко%20Максим%20Андреевич.pdf?hash=ef39ebb2ff0d13a02c0039ed1f577968764970&type=pdf&hhtmSource=resume&hhtmFrom=resume_list" className={styles.cv__link}>Download CV</a>
            </div>
            <Projects />
        </section>
    )
}
