import { motion } from "framer-motion"
import { FC } from "react";
import { Effect } from "../../../types/Effect";

const ListVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: -20, transition: { duration: 0.3 } }
};

interface ListEffectProps extends Effect {
    className?: string;
    uniqueKey: string | number;
}

export const ListEffect: FC<ListEffectProps> = ({ children, className, uniqueKey }) => {
    return (
        <motion.div
            className={className}
            key={uniqueKey}
            initial='hidden'
            whileInView='visible'
            variants={ListVariants}
            viewport={{ once: true, amount: 0.3 }}
        >
            {children}
        </motion.div>
    )
}