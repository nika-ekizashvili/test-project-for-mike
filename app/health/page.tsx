import { readFileSync } from 'fs';
import { join } from 'path';

export default function HealthPage() {
  // Read version from package.json
  const packageJsonPath = join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
  const version = packageJson.version;

  return (
    <div>
      <pre>
        OK
        {'\n'}
        Version: {version}
      </pre>
    </div>
  );
}
