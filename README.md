# promise-like-go

[![npm version](https://badge.fury.io/js/promise-like-go.svg)](https://badge.fury.io/js/promise-like-go)
[![License: MIT](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/MIT)

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

// ✅ e.g. usage 1: array format
// get supabase post row
const [post, error] = await executeAsync(async () =>
  supabase.from('posts').select('*').eq('id', 1)
);
// 🔥 Do something with post or error


// ✅ e.g. usage 2: object format
// get supabase post row
const {data: post, error} = await executeAsyncObj(async () =>
  supabase.from('posts').select('*').eq('id', 1)
);
// 🔥 Do something with post or error
```

### Another example

```typescript
// type: module
import { executeAsync, executeAsyncObj } from "promise-like-go";
// type: commonjs
// const { executeAsync, executeAsyncObj } = require("promise-like-go");

const fn = async () => {
  // array format
  const [data, error] = await executeAsync(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Array Format is Great 🔥");
      }, 1000);
    });
  });
  console.log("✅ array format response ➡️ ", data, error);

  // object format
  const { data: res2, error: err2 } = await executeAsyncObj(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Object Format is Awesome 🔥");
      }, 1000);
    });
  });
  console.log("✅ object format response ➡️ ", res2, err2);
};

fn().catch((err) => {
  console.log("❌ error", err);
});
```

## API Reference

### `executeAsync`

```typescript
executeAsync<T>(fn: () => Promise<T>): Promise<[T | null, any]>
executeAsyncObj<T>(fn: () => Promise<T>): Promise<{ data: T | null; error: any; }>
```

Executes an async function and returns a tuple where:
- First element is the result (or null if error occurred)
- Second element is the error (or null if successful)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
