# Mike Target Clone

A modern Next.js project initialized with complete development environment setup.

## Project Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [MUI (Material-UI)](https://mui.com/) + [Emotion CSS-in-JS](https://emotion.sh/)
- **Testing**: [Vitest](https://vitest.dev/) + [Jest](https://jestjs.io/) + [Testing Library](https://testing-library.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Data Fetching**: [TanStack React Query](https://tanstack.com/query/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Mocking**: [MSW (Mock Service Worker)](https://mswjs.io/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Linting**: ESLint
- **Code Formatting**: Prettier

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

```bash
npm run build
npm run start
```

## Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run all tests (unit + integration)
- `npm run test:unit` - Run Vitest unit tests
- `npm run test:watch` - Run Vitest in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run test:integration` - Run Jest integration tests

## Project Structure

```
src/
├── app/           # Next.js App Router pages and layouts
├── components/    # Reusable React components
├── hooks/         # Custom React hooks
├── types/         # TypeScript type definitions
├── utils/         # Utility functions and constants
└── test/          # Test setup and utilities
public/            # Static assets
.github/workflows/ # CI/CD pipelines
```

## Configuration Files

- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `.eslintrc.json` - ESLint rules
- `.prettierrc.json` - Code formatting rules
- `vitest.config.ts` - Vitest configuration
- `jest.config.js` - Jest configuration
- `jest.setup.js` - Jest test setup

## CI/CD

GitHub Actions workflows are configured in `.github/workflows/ci.yml` to:
- Run linting on every push and pull request
- Run unit and integration tests
- Build the application
- Upload test coverage reports

## Development Guidelines

1. Use TypeScript for all code
2. Follow the folder structure conventions
3. Write tests for new features
4. Run `npm run lint` before committing
5. Ensure all tests pass with `npm run test`

## License

Proprietary
