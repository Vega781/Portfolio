import { motion } from "framer-motion"
import { FC } from "react";
import { Effect } from "../../../types/Effect";

const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export const HeroLeft: FC<Effect> = ({ children }) => {
    return (
        <motion.div
            initial='hidden'
            whileInView='visible'
            variants={heroVariants}
            viewport={{ once: true, amount: 0.3 }}
        >
            {children}
        </motion.div>
    )
}