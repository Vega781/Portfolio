import { motion } from "framer-motion"
import { FC } from "react";
import { Effect } from "../../types/Effect";

const ExperienceVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, y: -50, transition: { duration: 0.3 } }
};

export const ExperienceEffect: FC<Effect> = ({ children, className  }) => {
    return (
        <motion.div
            className={className}
            initial='hidden'
            whileInView='visible'
            variants={ExperienceVariants}
            viewport={{ once: true, amount: 0.3 }}
        >
            {children}
        </motion.div>
    )
}