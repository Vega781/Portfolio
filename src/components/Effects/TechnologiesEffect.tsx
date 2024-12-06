import { motion } from "framer-motion";
import { FC } from "react";
import { Effect } from "../../types/Effect";

const technologiesVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export const TechnologiesEffect: FC<Effect> = ({ children, className }) => {
    return (
        <motion.ul
            className={className}
            initial="hidden"
            whileInView="visible"
            variants={technologiesVariants}
            viewport={{ once: true, amount: 0.1 }}
        >
            {children}
        </motion.ul>
    );
}; 