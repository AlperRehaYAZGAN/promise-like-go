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
