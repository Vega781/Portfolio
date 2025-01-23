import { FC } from "react"
import styles from './StackList.module.scss'
import { Technology } from "../../types/TechStack"
// import { Icon } from '@iconify/react';
import { getTechIconUrl } from "../../utils/getTechIconUrl";

interface StackListProps {
    technologies: Technology[],
    ulClassName?: string;
    liClassName?: string;
    iconContainerClassName?: string;
    iconClassName?: string;
}

export const StackList: FC<StackListProps> = ({ technologies, ulClassName, liClassName, iconContainerClassName, iconClassName }) => {
    return (
        <ul className={ulClassName}>
            {technologies.map((tech, index) => (
                <li key={index} className={liClassName}>
                    <div className={iconContainerClassName}>
                        {/* <Icon icon={tech.icon} className={iconClassName} /> */}
                        <img src={getTechIconUrl(tech.icon)} alt={tech.name} className={iconClassName} />
                    </div>
                    <span className={styles.name}>{tech.name}</span>
                </li>
            ))}
        </ul>
    )
}