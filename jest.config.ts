import { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      tsconfig: 'tsconfig.jest.json'
    }]
  },
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/*.test.ts']
};

export default config;
