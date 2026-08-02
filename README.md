# HomeGrab Landing Page

A landing page for HomeGrab, a Chrome extension for Georgian real estate agents that syncs listings between SS.ge and MyHome.ge.

## Tech Stack

- **Framework**: Next.js 14.2
- **Language**: TypeScript
- **Styling**: CSS Modules and global CSS
- **Testing**: Vitest (unit tests) and Jest (integration tests)
- **Linting**: ESLint with Next.js config
- **UI Components**: Material-UI (MUI)
- **Form Handling**: React Hook Form with Zod validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

Create an optimized production build:

```bash
npm run build
npm start
```

### Testing

Run all tests:

```bash
npm test
```

Run unit tests only:

```bash
npm run test:unit
```

Run integration tests only:

```bash
npm run test:integration
```

Watch mode for tests:

```bash
npm run test:watch
```

Generate coverage report:

```bash
npm run test:coverage
```

### Linting

Check and fix linting issues:

```bash
npm run lint
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
└── ...
```

## References

- [HomeGrab](https://homegrab.usectl.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
