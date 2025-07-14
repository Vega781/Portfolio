interface Technology {
    icon: string;
    name: string;
    bgColor: string;
    gradient: string;
}

export const techData: { [key: string]: Technology } = {
    javascript: {
        icon: "javascript",
        name: "JavaScript",
        bgColor: "#B4A33D",
        gradient: 'linear-gradient(135deg, #FFD700, #FF8C00, #FF4500)',
    },
    typescript: {
        icon: "typescript",
        name: "TypeScript",
        bgColor: "#005C99",
        gradient: 'linear-gradient(135deg, #1E90FF, #00BFFF, #87CEFA)',
    },
    react: {
        icon: "react",
        name: "React",
        bgColor: "#48A3BD",
        gradient: 'linear-gradient(135deg, #282c34, #61dafb, #282c34)',
    },
    nextjs: {
        icon: "nextdotjs",
        name: "Next.js",
        bgColor: "#ABABAB",
        gradient: 'linear-gradient(135deg, #696969, #808080, #A9A9A9)',
    },
    reduxToolkit: {
        icon: "redux",
        name: "Redux",
        bgColor: "#58378D",
        gradient: 'linear-gradient(135deg, #764ABC, #6A1B9A, #5E35B1)',
    },
    reactquery: {
        icon: "reactquery",
        name: "React Query",
        bgColor: "#FF4154",
        gradient: 'linear-gradient(135deg, #FF4154, #FF6B6B, #FF8585)',
    },
    astro: {
        icon: "astro",
        name: "Astro",
        bgColor: "#48A3BD",
        gradient: 'linear-gradient(135deg, #FF6347, #FF4500, #FF0000)',
    },
    vite: {
        icon: "vite",
        name: "Vite",
        bgColor: "#4B50BF",
        gradient: 'linear-gradient(135deg, #646CFF, #3B3B98, #2C2C54)',
    },
    webpack: {
        icon: "webpack",
        name: "Webpack",
        bgColor: "#6BA1BD",
        gradient: 'linear-gradient(135deg, #4682B4, #5F9EA0, #6495ED)',
    },
    axios: {
        icon: "axios",
        name: "Axios",
        bgColor: "#441FAB",
        gradient: 'linear-gradient(135deg, #32CD32, #3CB371, #2E8B57)',
    },
    sass: {
        icon: "sass",
        name: "Sass",
        bgColor: "#CD6799",
        gradient: 'linear-gradient(135deg, #FF69B4, #CD6799, #C71585)',
    },
    tailwind: {
        icon: "tailwindcss",
        name: "Tailwind CSS",
        bgColor: "#38B2AC",
        gradient: 'linear-gradient(135deg, #38B2AC, #319795, #2C7A7B)',
    },
    jest: {
        icon: "jest",
        name: "Jest",
        bgColor: "#C21325",
        gradient: 'linear-gradient(135deg, #C21325, #E91E63, #F44336)',
    },
    cypress: {
        icon: "cypress",
        name: "Cypress",
        bgColor: "#17202C",
        gradient: 'linear-gradient(135deg, #17202C, #34495E, #2C3E50)',
    },
    python: {
        icon: "python",
        name: "Python",
        bgColor: "#306998",
        gradient: 'linear-gradient(135deg, #306998, #4B8BBE, #FFE873)',
    },
    githubActions: {
        icon: "githubactions",
        name: "GitHub Actions",
        bgColor: "#2088FF",
        gradient: 'linear-gradient(135deg, #2088FF, #0052CC, #003366)',
    },
    docker: {
        icon: "docker",
        name: "Docker",
        bgColor: "#0DB7ED",
        gradient: 'linear-gradient(135deg, #0DB7ED, #007BFF, #0056B3)',
    },
    postgresql: {
        icon: "postgresql",
        name: "PostgreSQL",
        bgColor: "#336791",
        gradient: 'linear-gradient(135deg, #336791, #4A8DB7, #659EC7)',
    },
    mongodb: {
        icon: "mongodb",
        name: "MongoDB",
        bgColor: "#47A248",
        gradient: 'linear-gradient(135deg, #47A248, #4CAF50, #8BC34A)',
    },
    nodejs: {
        icon: "nodedotjs",
        name: "NodeJS",
        bgColor: "#68A063",
        gradient: 'linear-gradient(135deg, #68A063, #8CC84B, #A3D44F)',
    },
    express: {
        icon: "express",
        name: "Express",
        bgColor: "#303030",
        gradient: 'linear-gradient(135deg, #303030, #4A4A4A, #6A6A6A)',
    },
    tanstack: {
        icon: "redux",
        name: "TanStack Query",
        bgColor: "#FF5733",
        gradient: 'linear-gradient(135deg, #FF5733, #FF8D1A, #FFC300)',
    },
    reactRouter: {
        icon: "reactrouter",
        name: "React Router",
        bgColor: "#CA4245",
        gradient: 'linear-gradient(135deg, #CA4245, #E57373, #FF8A80)',
    },
    zod: {
        icon: "zod",
        name: "Zod",
        bgColor: "#007BFF",
        gradient: 'linear-gradient(135deg, #007BFF, #0056B3, #003366)',
    },
    greensock: {
        icon: "greensock",
        name: "GreenSock",
        bgColor: "#88CE02",
        gradient: 'linear-gradient(135deg, #88CE02, #A0D911, #B8E986)',
    },
    materialui: {
        icon: "mui",
        name: "MUI",
        bgColor: "#0081CB",
        gradient: 'linear-gradient(135deg, #0081CB, #00B0FF, #40C4FF)',
    },
    antdesign: {
        icon: "antdesign",
        name: "Ant Design",
        bgColor: "#0170FE",
        gradient: 'linear-gradient(135deg, #0170FE, #1890FF, #69C0FF)',
    },
    graphql: {
        icon: "graphql",
        name: "GraphQL",
        bgColor: "#E535AB",
        gradient: 'linear-gradient(135deg, #E535AB, #F20082, #C30052)',
    },
    storybook: {
        icon: "storybook",
        name: "Storybook",
        bgColor: "#FF4785",
        gradient: 'linear-gradient(135deg, #FF4785, #FF6B6B, #FF8585)',
    },
    vitest: {
        icon: "vitest",
        name: "Vitest",
        bgColor: "#729B1B",
        gradient: 'linear-gradient(135deg, #729B1B, #98C379, #B5E853)',
    },
    playwright: {
        icon: "playwright",
        name: "Playwright",
        bgColor: "#2EAD33",
        gradient: 'linear-gradient(135deg, #2EAD33, #45B649, #96E6A1)',
    },
    go: {
        icon: "go",
        name: "Golang",
        bgColor: "#00ADD8",
        gradient: 'linear-gradient(135deg, #00ADD8, #00CFFF, #A7F6FF)',
    },
};

export const languages = [
    // techData.javascript,
    techData.typescript,
    techData.python,
    // techData.go,
];

export const frameworks = [
    techData.react,
    techData.nextjs,
    techData.astro,
];

export const technologies = [
    techData.reduxToolkit,
    techData.tanstack,
    techData.reactRouter,
    techData.reactquery,
    techData.zod,
    techData.axios,
    // techData.graphql,
];

export const styling = [
    techData.sass,
    techData.tailwind,
    techData.greensock,
    techData.materialui,
    // techData.antdesign,
];

export const testing = [
    techData.jest,
    techData.cypress,
    // techData.vitest,
    // techData.playwright,
    // techData.storybook,
];

export const bundlers = [
    techData.vite,
    techData.webpack,
];

export const others = [
    techData.githubActions,
    techData.docker,
    techData.postgresql,
    techData.mongodb,
];

export const techslider = [
    techData.javascript,
    techData.typescript,
    techData.react,
    techData.nextjs,
    techData.astro,
    techData.reduxToolkit,
    techData.jest,
    techData.cypress,
    techData.vite,
    techData.webpack,
]