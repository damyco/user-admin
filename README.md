# User Admin

A Next.js-based user administration application.

## Tech Stack

- [Next.js](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [React Hook Form](https://react-hook-form.com) - Form validation and management
- [Jest](https://jestjs.io) & [React Testing Library](https://testing-library.com/react) - Testing frameworks

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Create and set up `.env` file in project root directory with the following envs:

```
NEXT_PUBLIC_BASE_URL=
```

The default value should be `http://localhost:3000`, adjust accordingly if you are running a dev server on a different one.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Tests

Run the test suite:

```bash
npm test
# or
yarn test
```

Run tests in watch mode:

```bash
npm run test:watch
# or
yarn test:watch
```

## Project Structure

```
user-admin/
├── __tests__/        # Jest tests
├── app/              # Next.js app directory
│   └── api/          # API routes (GET/POST endpoints)
├── components/       # React components
├── data/             # Data files (JSON storage)
├── types/            # TS type definitions
└── utility/          # Shared utilities
```

## Features

- Adding new users through form
- Listing all users
- Profile page for each user

## Technical Decisions

### Next.js Route Handlers

Used Next.js built-in Route Handlers to handle GET and POST requests. This approach provides:

- Server-side data handling without building a separate backend
- Built-in API routing with file-based structure
- Type-safe endpoints with TypeScript

### JSON File Storage

User data is persisted to JSON file via POST requests. This simplifies the setup by:

- Eliminating the need for a database in this demo app
- Making data easy to inspect
- Providing a straightforward read/write pattern

### Tailwind CSS

Chosen for rapid UI development:

- Utility-first approach speeds up styling
- Consistent design system out of the box
- Minimal custom CSS required
- Excellent developer experience with IntelliSense

### React Hook Form

Simplifies form state management:

- Reduces boilerplate code for form handling
- Built-in validation support
- Optimized re-renders for better performance
- TypeScript support for type-safe forms

## Limitations & Future Improvements

- **Data Persistence**: Currently uses JSON file storage. For production, it should use a database
- **Authentication**: No authentication layer implemented
- **Validation**: Basic client-side form validation only

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Hook Form Documentation](https://react-hook-form.com/get-started)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro)
