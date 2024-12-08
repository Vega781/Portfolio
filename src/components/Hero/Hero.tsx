import styles from './Hero.module.scss'
import avatar from '../../assets/hero1.gif'
import { HeroLeft } from '../Effects/Hero/HeroLeft'
import { HeroRight } from '../Effects/Hero/HeroRight'

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <div className={styles.hero__1350}>
                    <HeroRight>
                        <img src={avatar} className={styles.hero__avatar} alt="Avatar" />
                    </HeroRight>
                </div>
                <div className={styles.hero__left}>
                    <HeroLeft>
                        <h1 className={styles.hero__title}>Hi, I'm Max</h1>
                        <p className={styles.hero__description}>
                            <span className={styles.whiteText}>Software Developer</span> focused on building scalable web applications with React and TypeScript. Experienced in component-driven development, state management, and modern frontend practices. Currently expanding into full-stack development.
                        </p>
                        <div className={styles.hero__links}>
                            <a href="https://cv.hexlet.io/ru/resumes/13626/pdfs/base" className={styles.hero__link}>Download CV</a>
                            <a href="https://fakecrime.bio/vega7" className={styles.hero__link}>Contact me</a>
                        </div>
                    </HeroLeft>
                </div>
                <div className={styles.hero__right}>
                    <HeroRight>
                        <img src={avatar} className={styles.hero__avatar} alt="Avatar" />
                    </HeroRight>
                </div>
            </div>
        </section>
    )
}