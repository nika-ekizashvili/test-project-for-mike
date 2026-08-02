/**
 * Jest owns integration tests only — unit tests are vitest's (see vitest.config.ts).
 *
 * The scoping matters: with no config, jest's default testMatch also picks up the
 * `src/**\/*.test.tsx` files vitest owns and fails on them, so `npm test` could never pass
 * no matter what the unit suite did.
 */
export default {
  testEnvironment: "node",
  testMatch: ["<rootDir>/tests/integration/**/*.test.[jt]s"],
};
