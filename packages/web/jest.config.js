const pack = require("./package");

console.log(123);

module.exports = {
  displayName: pack.name,
  setupFilesAfterEnv: ["<rootDir>/tests/jest.setup.js"],
  snapshotSerializers: ["jest-emotion"]
};
