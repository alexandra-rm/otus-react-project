module.exports = {
    clearMocks: true,
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/internals/jestSettings.js"],
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    },
    moduleNameMapper: {
        "^smart/(.*)$": "<rootDir>/src/smart/$1",
        "^store/(.*)$": "<rootDir>/src/store/$1",
        "^utils/(.*)$": "<rootDir>/src/utils/$1",
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
