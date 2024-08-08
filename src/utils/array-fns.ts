// array-fns.ts

/**
 * Groups elements of an array by a key or function.
 * @param arr - The array to group.
 * @param keyFn - A function that returns the key to group by.
 * @returns An object where keys are the result of the key function and values are arrays of grouped items.
 */
export function groupBy<T, K extends string | number>(arr: T[], keyFn: (item: T) => K): { [key: string]: T[] } {
    return arr.reduce((acc, item) => {
      const key = keyFn(item);
      const keyStr = String(key); // Convert the key to string
      if (!acc[keyStr]) {
        acc[keyStr] = [];
      }
      acc[keyStr].push(item);
      return acc;
    }, {} as { [key: string]: T[] });
  }
  
  /**
   * Flattens a nested array into a single-level array.
   * @param arr - The array to flatten.
   * @returns A new array with all nested arrays flattened.
   */
  export function flatten<T>(arr: T[][]): T[] {
    return arr.reduce((acc, val) => acc.concat(val), []);
  }
  
  /**
   * Removes duplicate values from an array.
   * @param arr - The array to deduplicate.
   * @returns A new array with unique values.
   */
  export function unique<T>(arr: T[]): T[] {
    return Array.from(new Set(arr));
  }
  
  /**
   * Finds common elements between two arrays.
   * @param arr1 - The first array.
   * @param arr2 - The second array.
   * @returns An array of elements present in both arrays.
   */
  export function intersection<T>(arr1: T[], arr2: T[]): T[] {
    const set2 = new Set(arr2);
    return arr1.filter(item => set2.has(item));
  }
  
  /**
   * Finds elements that are in one array but not in another.
   * @param arr1 - The first array.
   * @param arr2 - The second array.
   * @returns An array of elements present in the first array but not in the second.
   */
  export function difference<T>(arr1: T[], arr2: T[]): T[] {
    const set2 = new Set(arr2);
    return arr1.filter(item => !set2.has(item));
  }
  
  /**
   * Randomly shuffles the elements of an array.
   * @param arr - The array to shuffle.
   * @returns A new array with the elements shuffled.
   */
  export function shuffle<T>(arr: T[]): T[] {
    let shuffled = arr.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  
  /**
   * Partitions an array into groups based on a predicate function.
   * @param arr - The array to partition.
   * @param predicate - A function that determines the group for each element.
   * @returns An array containing two arrays: the first with elements that satisfy the predicate, the second with elements that do not.
   */
  export function partition<T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]] {
    return arr.reduce(([pass, fail], item) => {
      predicate(item) ? pass.push(item) : fail.push(item);
      return [pass, fail];
    }, [[], []] as [T[], T[]]);
  }
  
  /**
   * Sorts an array of objects based on a key or function.
   * @param arr - The array to sort.
   * @param keyOrFn - The key or function to sort by.
   * @param ascending - Whether to sort in ascending order (default is true).
   * @returns A new array sorted based on the key or function.
   */
  export function sortBy<T>(arr: T[], keyOrFn: keyof T | ((item: T) => any), ascending: boolean = true): T[] {
    const keyFn = typeof keyOrFn === 'function' ? keyOrFn : (item: T) => item[keyOrFn];
    return arr.slice().sort((a, b) => {
      const valueA = keyFn(a);
      const valueB = keyFn(b);
      return (ascending ? 1 : -1) * (valueA < valueB ? -1 : valueA > valueB ? 1 : 0);
    });
  }
  
  /**
   * Combines two arrays into a single array of pairs.
   * @param arr1 - The first array.
   * @param arr2 - The second array.
   * @returns An array of pairs, where each pair is from the corresponding positions in the input arrays.
   */
  export function zip<T, U>(arr1: T[], arr2: U[]): [T, U][] {
    const length = Math.min(arr1.length, arr2.length);
    return Array.from({ length }, (_, i) => [arr1[i], arr2[i]]);
  }
  
  /**
 * Reduces an array into a single value based on a key or function.
 * @param arr - The array to reduce.
 * @param keyOrFn - The key or function to group by.
 * @param reducer - A function that reduces the values in each group.
 * @param initialValue - The initial value for the reduction.
 * @returns An object where keys are the result of the key or function and values are the reduced values.
 */
export function reduceBy<T, K extends string | number, V>(
    arr: T[],
    keyOrFn: keyof T | ((item: T) => K),
    reducer: (acc: V, item: T) => V,
    initialValue: V
  ): { [key in K]: V } {
    const keyFn = typeof keyOrFn === 'function' ? keyOrFn : (item: T) => item[keyOrFn] as K;
    return arr.reduce((acc, item) => {
      const key = keyFn(item);
      if (!acc[key as K]) {
        acc[key as K] = initialValue;
      }
      acc[key as K] = reducer(acc[key as K], item);
      return acc;
    }, {} as { [key in K]: V });
  }
  

  /**
 * Groups elements of an array into chunks of a specified size.
 * @param arr - The array to chunk.
 * @param size - The size of each chunk.
 * @returns An array of arrays, where each sub-array is a chunk of the original array.
 */
export function chunk<T>(arr: T[], size: number): T[][] {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  }
  
  /**
   * Finds the first element that matches the predicate function.
   * @param arr - The array to search.
   * @param predicate - A function that tests each element.
   * @returns The first element that matches the predicate, or undefined if no match is found.
   */
  export function findFirst<T>(arr: T[], predicate: (item: T) => boolean): T | undefined {
    return arr.find(predicate);
  }
  
  /**
   * Finds the last element that matches the predicate function.
   * @param arr - The array to search.
   * @param predicate - A function that tests each element.
   * @returns The last element that matches the predicate, or undefined if no match is found.
   */
  export function findLast<T>(arr: T[], predicate: (item: T) => boolean): T | undefined {
    return [...arr].reverse().find(predicate);
  }
  
  /**
   * Computes the difference between two arrays based on a key function.
   * @param arr1 - The first array.
   * @param arr2 - The second array.
   * @param keyFn - A function that returns the key to compare.
   * @returns An array of elements present in the first array but not in the second.
   */
  export function differenceBy<T, K>(arr1: T[], arr2: T[], keyFn: (item: T) => K): T[] {
    const set2 = new Set(arr2.map(keyFn));
    return arr1.filter(item => !set2.has(keyFn(item)));
  }
  
  /**
   * Finds the union of two arrays based on a key function.
   * @param arr1 - The first array.
   * @param arr2 - The second array.
   * @param keyFn - A function that returns the key to compare.
   * @returns An array of unique elements from both arrays.
   */
  export function unionBy<T, K>(arr1: T[], arr2: T[], keyFn: (item: T) => K): T[] {
    const set = new Set(arr1.map(keyFn));
    return [...arr1, ...arr2.filter(item => !set.has(keyFn(item)))];
  }
  
  /**
   * Computes the symmetric difference between two arrays based on a key function.
   * @param arr1 - The first array.
   * @param arr2 - The second array.
   * @param keyFn - A function that returns the key to compare.
   * @returns An array of elements that are in either array but not in both.
   */
  export function symmetricDifferenceBy<T, K>(arr1: T[], arr2: T[], keyFn: (item: T) => K): T[] {
    const diff1 = differenceBy(arr1, arr2, keyFn);
    const diff2 = differenceBy(arr2, arr1, keyFn);
    return [...diff1, ...diff2];
  }
  
  /**
   * Computes the Cartesian product of multiple arrays.
   * @param arrays - The arrays to compute the Cartesian product of.
   * @returns An array of all possible combinations of elements from the input arrays.
   */
  export function cartesianProduct<T>(...arrays: T[][]): T[][] {
    return arrays.reduce((acc, arr) =>
      acc.flatMap(a => arr.map(b => [...a, b])),
      [[]] as T[][]
    );
  }
  
  /**
   * Computes the median value of a numeric array.
   * @param arr - The array of numbers.
   * @returns The median value.
   */
  export function median(arr: number[]): number {
    if (arr.length === 0) return NaN;
    const sorted = arr.slice().sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
  }
  

    /**
 * Removes falsy values from an array.
 * @param arr - The array to compact.
 * @returns A new array without falsy values.
 */
export function compact<T>(arr: T[]): T[] {
    return arr.filter(Boolean);
  }
  

  /**
 * Creates an array of numbers within a specified range.
 * @param start - The start of the range.
 * @param end - The end of the range.
 * @param step - The step between each number (default is 1).
 * @returns An array of numbers within the specified range.
 */
export function range(start: number, end: number, step: number = 1): number[] {
    const result: number[] = [];
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
    return result;
  }
  


  