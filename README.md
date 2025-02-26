# promise-like-go

[![npm version](https://badge.fury.io/js/promise-like-go.svg)](https://badge.fury.io/js/promise-like-go)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A lightweight TypeScript utility that brings Go-style error handling to JavaScript/TypeScript Promises. Handle async errors elegantly with tuple returns similar to Go's pattern.

## Features

- Convert Promise-based functions to Go-like `[result, error]` tuples
- Type-safe error handling
- Zero dependencies
- TypeScript support out of the box

## Installation

```bash
npm install promise-like-go
```

## Usage

```typescript
import { executeAsync } from 'promise-like-go';

// Example async function
async function fetchUserData(id: string) {
  // Your async logic here
  return { id, name: 'John Doe' };
}

// Using executeAsync
async function main() {
  const [user, error] = await executeAsync(() => fetchUserData('123'));

  if (error) {
    console.error('Error fetching user:', error);
    return;
  }

  console.log('User found:', user);
}
```

## API Reference

### `executeAsync`

```typescript
executeAsync<T>(fn: () => Promise<T>): Promise<[T | null, any]>
```

Executes an async function and returns a tuple where:
- First element is the result (or null if error occurred)
- Second element is the error (or null if successful)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
