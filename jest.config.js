module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/internals/jestSettings.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    moduleNameMapper: {
        "^components/(.*)$": "<rootDir>/src/components/$1",
    },
    /*coverageThreshold: {
        global: {
            branches: 75,
            functions: 75,
            lines: 75,
            statements: -85,
        },
    },*/
};
