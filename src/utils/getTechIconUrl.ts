export const getTechIconUrl = (tech: string) => {
    const baseUrl = 'https://simpleicons.org/icons/'; // Базовый URL для иконок
    return `${baseUrl}${tech.toLowerCase().replace(/\s+/g, '')}.svg`; // Формируем URL для иконки
};