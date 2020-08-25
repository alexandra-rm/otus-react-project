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
        "^smart/(.*)$": "<rootDir>/src/smart/$1",
        "^store/(.*)$": "<rootDir>/src/store/$1",
        "^utils/(.*)$": "<rootDir>/src/utils/$1",
    },
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 65,
            lines: 80,
            statements: -85,
        },
    },
};
