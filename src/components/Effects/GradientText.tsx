import React from 'react';
import { motion } from 'framer-motion';

// Определяем варианты анимации для градиента
const gradientVariants = {
    animate: {
        // Двигаем градиент справа налево
        backgroundPosition: ['0% 50%', '200% 50%'],
        transition: {
            duration: 2, // Длительность анимации
            ease: 'linear', // Линейная анимация
            repeat: Infinity, // Бесконечное повторение
        },
    },
};

interface GradientTextProps {
    text: string;
    className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ text, className }) => {
    return (
        <motion.a
            className={className}
            style={{
                background: 'linear-gradient(90deg, #B292FF, #007BFF, #40E0D0, #B292FF)', // Цвета градиента
                backgroundSize: '200% 200%', // Размер фона для анимации
                backgroundClip: 'text', // Применяем градиент к тексту
                color: 'transparent', // Делаем текст прозрачным, чтобы показать градиент
                display: 'inline-block', // Отображаем как блочный элемент
                textDecoration: 'none', // Убираем подчеркивание
            }}
            variants={gradientVariants} // Применяем варианты анимации
            animate="animate" // Запускаем анимацию
        >
            {text}
        </motion.a>
    );
};

export default GradientText;