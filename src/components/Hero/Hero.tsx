import styles from './Hero.module.scss'
import avatar from '../../assets/avatar.png'
import GradientText from '../Effects/GradientText'

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.hero__container}>
                <div className={styles.hero__left}>
                    <h1 className={styles.hero__title}>Hi, I'm <GradientText text="Vega7" /></h1>
                    <p className={styles.hero__description}>
                        Frontend Developer working with React and modern web technologies. My experience includes building responsive interfaces, collaborating on feature development, and implementing modern development practices.
                    </p>
                    <div className={styles.hero__links}>
                        <a href="https://hh.ru/resume_converter/Анисенко%20Максим%20Андреевич.pdf?hash=ef39ebb2ff0d13a02c0039ed1f577968764970&type=pdf&hhtmSource=resume&hhtmFrom=resume_list" className={styles.hero__link}>Download CV</a>
                        <a href="https://fakecrime.bio/vega7" className={styles.hero__link}>Contact me</a>
                    </div>
                </div>
                <div className={styles.hero__right}>
                    <img src={avatar} className={styles.hero__avatar} alt="Avatar" />
                </div>
            </div>
        </section>
    )
}