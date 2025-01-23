import styles from './Projects.module.scss'
import { projects } from '../../data/projects'
import { ListEffect } from '../Effects/Projects/ListEffect'
import { getTechIconUrl } from '../../utils/getTechIconUrl'
import { getTechColor } from '../../utils/getTechColor'
// import { techData } from '../../data/technologies'

export const Projects = () => {
    return (
        <div className={styles.projects}>
            <ul className={styles.projects__list}>
                {projects.map((item, index) => (
                    <ListEffect className={styles.projects__item} uniqueKey={index} key={index}>
                        <div className={styles.projects__left}>
                            <div className={styles.projects__top}>
                                <div className={styles.title__container}>
                                    <img src={item.favicon} alt="Project Icon" className={styles.projects__icon} />
                                    <h3 className={styles.projects__title}>
                                        {item.name}
                                    </h3>
                                </div>
                                <ul className={styles.technologies__list}>
                                    {item.technologies.map((tech, idx) => (
                                        <li className={styles.technologies__item} style={{ backgroundColor: getTechColor(tech) }} key={idx}>
                                            <img src={getTechIconUrl(tech)} alt={`${tech} icon`} className={styles.technology__icon} />
                                            <span className={styles.technology__span}>{tech}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.projects__links}>
                                <a href={item.link} className={styles.projects__source} target='_blank'>
                                    <svg width="30" height="31" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0.5C8.68678 0.5 7.38642 0.758658 6.17317 1.2612C4.95991 1.76375 3.85752 2.50035 2.92893 3.42893C1.05357 5.3043 0 7.84784 0 10.5C0 14.92 2.87 18.67 6.84 20C7.34 20.08 7.5 19.77 7.5 19.5V17.81C4.73 18.41 4.14 16.47 4.14 16.47C3.68 15.31 3.03 15 3.03 15C2.12 14.38 3.1 14.4 3.1 14.4C4.1 14.47 4.63 15.43 4.63 15.43C5.5 16.95 6.97 16.5 7.54 16.26C7.63 15.61 7.89 15.17 8.17 14.92C5.95 14.67 3.62 13.81 3.62 10C3.62 8.89 4 8 4.65 7.29C4.55 7.04 4.2 6 4.75 4.65C4.75 4.65 5.59 4.38 7.5 5.67C8.29 5.45 9.15 5.34 10 5.34C10.85 5.34 11.71 5.45 12.5 5.67C14.41 4.38 15.25 4.65 15.25 4.65C15.8 6 15.45 7.04 15.35 7.29C16 8 16.38 8.89 16.38 10C16.38 13.82 14.04 14.66 11.81 14.91C12.17 15.22 12.5 15.83 12.5 16.76V19.5C12.5 19.77 12.66 20.09 13.17 20C17.14 18.66 20 14.92 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7362 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5Z" fill="#B292FF" />
                                    </svg>
                                    Github
                                </a>
                                {item.url ? (
                                    <a href={item.url} className={styles.projects__source} target='_blank'>
                                        <svg width="30" height="31" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 0.5C4.47715 0.5 0 4.97715 0 10.5C0 16.0228 4.47715 20.5 10 20.5C15.5228 20.5 20 16.0228 20 10.5C20 4.97715 15.5228 0.5 10 0.5ZM14.7071 11.2071L11.7071 14.2071C11.3166 14.5976 10.6834 14.5976 10.2929 14.2071C9.90237 13.8166 9.90237 13.1834 10.2929 12.7929L11.5858 11.5H7C6.44772 11.5 6 11.0523 6 10.5C6 9.94772 6.44772 9.5 7 9.5H11.5858L10.2929 8.20711C9.90237 7.81658 9.90237 7.18342 10.2929 6.79289C10.6834 6.40237 11.3166 6.40237 11.7071 6.79289L14.7071 9.79289C15.0976 10.1834 15.0976 10.8166 14.7071 11.2071Z" fill="#B292FF" />
                                        </svg>
                                        Demo
                                    </a>
                                ) : null}
                            </div>
                        </div>
                        <div className={styles.projects__right}>
                            <span className={styles.projects__title_description}>Description</span>
                            <p className={styles.projects__description}>{item.description}</p>
                        </div>
                    </ListEffect>
                ))}
            </ul>
        </div>
    )
}