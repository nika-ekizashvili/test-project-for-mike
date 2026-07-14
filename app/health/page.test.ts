/**
 * Health Page Tests
 */

const fs = require('fs');
const path = require('path');

describe('Health Page', () => {
  it('should read version from package.json', () => {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    expect(packageJson.version).toBeDefined();
    expect(typeof packageJson.version).toBe('string');
  });

  it('should have a valid version format', () => {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    // Version should match semantic versioning pattern
    expect(packageJson.version).toMatch(/^\d+\.\d+\.\d+/);
  });
});
