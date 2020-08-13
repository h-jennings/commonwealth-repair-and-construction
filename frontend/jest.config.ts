module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  // transform: {
  //   '^.+\\.tsx?$': 'ts-jest',
  // },
  preset: 'ts-jest',
  testEnvironment: 'none',
};
