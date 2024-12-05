import { motion } from "framer-motion"
import { FC } from "react"
import { Effect } from "../../types/Effect"
import styles from '../Header/Header.module.scss'

const menuVariants = {
    open: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    closed: { opacity: 0, height: 0, transition: { duration: 0.3 } },
};

export const BurgerEffect: FC<Effect> = ({ children, isOpen }) => {
    return (
        <motion.nav
            className={styles.nav__590}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
        >
            {children}
        </motion.nav>
    )
}