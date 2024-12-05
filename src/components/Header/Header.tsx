import { Link } from 'react-router-dom'
import GradientText from '../Effects/GradientText'
import styles from './Header.module.scss'
import { useState } from 'react';
import { BurgerEffect } from '../Effects/BurgerEffect';


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                {isOpen && (
                    <BurgerEffect isOpen={isOpen}>
                        <Link to='/' className={styles.nav__link} onClick={handleClose}>
                            <GradientText text="Vega7" className={styles.gradient} />
                        </Link>
                        <Link to="/projects" className={styles.nav__link} onClick={handleClose}>Projects</Link>
                        <Link to="/experience" className={styles.nav__link} onClick={handleClose}>Experience</Link>
                    </BurgerEffect>
                )}

                <div className={styles.nav__container}>
                    <Link to='/' className={styles.nav__link} onClick={handleClose}>
                        <GradientText text="Vega7" className={styles.gradient} />
                    </Link>
                    <Link to="/projects" className={styles.nav__link} onClick={handleClose}>Projects</Link>
                    <Link to="/experience" className={styles.nav__link} onClick={handleClose}>Experience</Link>
                </div>
                <nav className={styles.social__links}>
                    <a href="https://github.com/Vega781" className={styles.social__link}>
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0.5C8.68678 0.5 7.38642 0.758658 6.17317 1.2612C4.95991 1.76375 3.85752 2.50035 2.92893 3.42893C1.05357 5.3043 0 7.84784 0 10.5C0 14.92 2.87 18.67 6.84 20C7.34 20.08 7.5 19.77 7.5 19.5V17.81C4.73 18.41 4.14 16.47 4.14 16.47C3.68 15.31 3.03 15 3.03 15C2.12 14.38 3.1 14.4 3.1 14.4C4.1 14.47 4.63 15.43 4.63 15.43C5.5 16.95 6.97 16.5 7.54 16.26C7.63 15.61 7.89 15.17 8.17 14.92C5.95 14.67 3.62 13.81 3.62 10C3.62 8.89 4 8 4.65 7.29C4.55 7.04 4.2 6 4.75 4.65C4.75 4.65 5.59 4.38 7.5 5.67C8.29 5.45 9.15 5.34 10 5.34C10.85 5.34 11.71 5.45 12.5 5.67C14.41 4.38 15.25 4.65 15.25 4.65C15.8 6 15.45 7.04 15.35 7.29C16 8 16.38 8.89 16.38 10C16.38 13.82 14.04 14.66 11.81 14.91C12.17 15.22 12.5 15.83 12.5 16.76V19.5C12.5 19.77 12.66 20.09 13.17 20C17.14 18.66 20 14.92 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7362 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5Z" fill="#B292FF" />
                        </svg>
                    </a>
                    <a href="https://t.me/Vega781" className={styles.social__link}>
                        <svg width="20" height="21" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="14" fill="#B292FF" />
                            <path d="M22.9866 10.2088C23.1112 9.40332 22.3454 8.76755 21.6292 9.082L7.36482 15.3448C6.85123 15.5703 6.8888 16.3483 7.42147 16.5179L10.3631 17.4547C10.9246 17.6335 11.5325 17.541 12.0228 17.2023L18.655 12.6203C18.855 12.4821 19.073 12.7665 18.9021 12.9426L14.1281 17.8646C13.665 18.3421 13.7569 19.1512 14.314 19.5005L19.659 22.8523C20.2585 23.2282 21.0297 22.8506 21.1418 22.1261L22.9866 10.2088Z" fill="rgb(33, 31, 35)" />
                        </svg>
                    </a>
                    <a href="https://hh.ru/resume_converter/Анисенко%20Максим%20Андреевич.pdf?hash=ef39ebb2ff0d13a02c0039ed1f577968764970&type=pdf&hhtmSource=resume&hhtmFrom=resume_list" className={styles.social__link}>
                        <svg width="20" height="21" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="16" cy="16" r="14" fill="#B292FF" />
                            <path d="M10 8H22C22.5523 8 23 8.44772 23 9V23C23 23.5523 22.5523 24 22 24H10C9.44772 24 9 23.5523 9 23V9C9 8.44772 9.44772 8 10 8ZM11 10V22H21V10H11ZM13 12H19V14H13V12ZM13 15H19V17H13V15ZM13 18H17V20H13V18Z" fill="rgb(33, 31, 35)" />
                        </svg>
                    </a>
                    <a href="https://mail.ru/anmax3@mail.ru" className={styles.social__link}>
                        <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 16.5C1.45 16.5 0.979333 16.3043 0.588 15.913C0.196 15.521 0 15.05 0 14.5V2.5C0 1.95 0.196 1.47933 0.588 1.088C0.979333 0.696 1.45 0.5 2 0.5H18C18.55 0.5 19.021 0.696 19.413 1.088C19.8043 1.47933 20 1.95 20 2.5V14.5C20 15.05 19.8043 15.521 19.413 15.913C19.021 16.3043 18.55 16.5 18 16.5H2ZM10 9.325C10.0833 9.325 10.1707 9.31233 10.262 9.287C10.354 9.26233 10.4417 9.225 10.525 9.175L17.6 4.75C17.7333 4.66667 17.8333 4.56267 17.9 4.438C17.9667 4.31267 18 4.175 18 4.025C18 3.69167 17.8583 3.44167 17.575 3.275C17.2917 3.10833 17 3.11667 16.7 3.3L10 7.5L3.3 3.3C3 3.11667 2.70833 3.11233 2.425 3.287C2.14167 3.46233 2 3.70833 2 4.025C2 4.19167 2.03333 4.33733 2.1 4.462C2.16667 4.58733 2.26667 4.68333 2.4 4.75L9.475 9.175C9.55833 9.225 9.646 9.26233 9.738 9.287C9.82933 9.31233 9.91667 9.325 10 9.325Z" fill="#B292FF" />
                        </svg>
                    </a>
                </nav>
                <button className={styles.burger__button} onClick={handleOpen}>
                    <svg className={styles.burger__svg} width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6H21" stroke="#B292FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 12H21" stroke="#B292FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 18H21" stroke="#B292FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </header>
    )
}