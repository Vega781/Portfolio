import styles from './Hero.module.scss'
import avatar from '../../assets/hero1.gif'
import { HeroLeft } from '../Effects/Hero/HeroLeft'
import { HeroRight } from '../Effects/Hero/HeroRight'

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <div className={styles.hero__left}>
                    <HeroLeft>
                        <h1 className={styles.hero__title}>Hi, I'm Max</h1>
                        <p className={styles.hero__description}>
                            <span className={styles.whiteText}>Software Developer</span> working with React and modern web technologies. My experience includes building responsive interfaces, collaborating on feature development, and implementing modern development practices.
                        </p>
                        <div className={styles.hero__links}>
                            <a href="https://hh.ru/resume_converter/Анисенко%20Максим%20Андреевич.pdf?hash=ef39ebb2ff0d13a02c0039ed1f577968764970&type=pdf&hhtmSource=resume&hhtmFrom=resume_list" className={styles.hero__link}>Download CV</a>
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