// executeAsync is golang like function that returns [result,err] pair.
export async function executeAsync<T>(
  fn: () => Promise<T>
): Promise<[T | null, any]> {
  try {
    const result = await fn();
    return [result, null];
  } catch (error) {
    return [null, error];
  }
}

// below is a object destructuring function of above function
export async function executeAsyncObj<T>(fn: () => Promise<T>): Promise<{
  data: T | null;
  error: any;
}> {
  try {
    const data = await fn();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
}
