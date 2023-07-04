// module.exports = {
//   roots: ["<rootDir>/src"],
//   testRegex: "(/.*\\.test)\\.(ts|tsx)$",
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
//   testEnvironment: "jsdom",
// };

export default {
  roots: ["<rootDir>/src"],
  testRegex: "(/.*\\.test)\\.(ts|tsx)$",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jsdom",
};
