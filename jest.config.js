/** @type {import('jest').Config} */

const Config = {
  clearMocks: true,

  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  testEnvironment: "node",

  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],

  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest", // Alternativa ultra rápida, ou use 'ts-jest'
  },
};

export default Config;
