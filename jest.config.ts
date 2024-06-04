import type { Config } from 'jest';

const jestConfig: Config = {
  // Display
  displayName: {
    name: 'UNIT TESTS',
    color: 'red',
  },

  // Root
  rootDir: '.',
  roots: ['<rootDir>/src', '<rootDir>/tests'],

  // Coverage
  coverageProvider: 'babel',
  coverageDirectory: 'coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/main.ts',
    '!<rootDir>/src/**/app.module.ts',
    '!<rootDir>/src/**/*.dto.ts',
    '!<rootDir>/src/shared/**/*.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },

  // Regex
  testRegex: '.*\\.spec\\.ts$',

  // Transform and mappers
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '@tests/(.+)': '<rootDir>/tests/$1',
    '@/(.+)': '<rootDir>/src/$1',
  },

  // Others
  clearMocks: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'json', 'ts'],
  setupFiles: ['dotenv/config'],
  forceExit: true,
  detectOpenHandles: true,
};

export default jestConfig;
