import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  testRegex: '__tests__/.*\\.test\\.ts$',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '.serverless',
    '.husky'
  ],
  testTimeout: 10000,
  modulePaths: [
    '<rootDir>'
  ],
  moduleDirectories: [
    'node_modules',
    'src'
  ],
  roots: [
    '<rootDir>'
  ],
  moduleNameMapper: {
    '^@functions/(.*)': '<rootDir>/src/functions/$1',
    '^@libs/(.*)': '<rootDir>/src/libs/$1',
    '^@config/(.*)': '<rootDir>/src/common/$1'
  }
};

export default config;