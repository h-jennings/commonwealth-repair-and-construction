module.exports = {
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  preset: 'babel-jest',
  testEnvironment: 'node',
};
