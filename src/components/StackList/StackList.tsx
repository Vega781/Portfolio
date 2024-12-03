import { FC } from "react"
import styles from './StackList.module.scss'
import { Technology } from "../../types/TechStack"
import { Icon } from '@iconify/react';

interface StackListProps {
    technologies: Technology[]
    liClassName?: string;
    iconContainerClassName?: string;
    iconClassName?: string;
}

export const StackList: FC<StackListProps> = ({ technologies, liClassName, iconContainerClassName, iconClassName }) => {
    return (
        <ul className={styles.stack__list}>
            {technologies.map((tech, index) => (
                <li key={index} className={liClassName}>
                    <div className={iconContainerClassName}>
                        <Icon icon={tech.icon} className={iconClassName} />
                    </div>
                    <span className={styles.name}>{tech.name}</span>
                </li>
            ))}
        </ul>
    )
}