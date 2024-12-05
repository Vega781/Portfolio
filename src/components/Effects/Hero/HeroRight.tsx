import { motion } from "framer-motion"
import { Effect } from "../../../types/Effect";
import { FC } from "react";

const heroVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

export const HeroRight: FC<Effect> = ({ children }) => {
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