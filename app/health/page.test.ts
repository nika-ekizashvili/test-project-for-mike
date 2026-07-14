/**
 * Health Page Tests
 */

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('Health Page', () => {
  it('should read version from package.json', () => {
    const packageJsonPath = join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    expect(packageJson.version).toBeDefined();
    expect(typeof packageJson.version).toBe('string');
  });

  it('should have a valid version format', () => {
    const packageJsonPath = join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    // Version should match semantic versioning pattern
    expect(packageJson.version).toMatch(/^\d+\.\d+\.\d+/);
  });
});
