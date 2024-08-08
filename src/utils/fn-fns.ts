// fn-fns.ts

/**
 * Creates a debounced function that delays invoking the provided function until after the specified delay.
 * @param func - The function to debounce.
 * @param delay - The delay in milliseconds.
 * @returns A new debounced function.
 */
export function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (...args: Parameters<T>) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    } as T;
}

/**
 * Creates a throttled function that only invokes the provided function at most once per specified interval.
 * @param func - The function to throttle.
 * @param interval - The interval in milliseconds.
 * @returns A new throttled function.
 */
export function throttle<T extends (...args: any[]) => void>(func: T, interval: number): T {
    let lastCall = 0;
    return function (...args: Parameters<T>) {
        const now = Date.now();
        if (now - lastCall >= interval) {
            lastCall = now;
            func(...args);
        }
    } as T;
}

/**
 * Creates a function that is called only once.
 * @param func - The function to call only once.
 * @returns A new function that can be called only once.
 */
export function once<T extends (...args: any[]) => void>(func: T): T {
    let called = false;
    return function (...args: Parameters<T>) {
        if (!called) {
            called = true;
            func(...args);
        }
    } as T;
}

/**
 * Creates a memoized function that caches the result based on its arguments.
 * @param func - The function to memoize.
 * @returns A new memoized function.
 */
export function memoize<T extends (...args: any[]) => any>(func: T): T {
    const cache = new Map<string, ReturnType<T>>();
    return function (...args: Parameters<T>): ReturnType<T> {
        const key = JSON.stringify(args);
        if (!cache.has(key)) {
            cache.set(key, func(...args));
        }
        return cache.get(key) as ReturnType<T>;
    } as T;
}

/**
 * Composes multiple functions into a single function.
 * @param funcs - The functions to compose.
 * @returns A new function that is the composition of the input functions.
 */
export function compose<T>(...funcs: ((arg: T) => T)[]): (arg: T) => T {
    return (arg: T) => funcs.reduceRight((acc, fn) => fn(acc), arg);
}

/**
 * Pipes a value through multiple functions.
 * @param funcs - The functions to pipe through.
 * @returns A new function that pipes a value through the input functions.
 */
export function pipe<T>(...funcs: ((arg: T) => T)[]): (arg: T) => T {
    return (arg: T) => funcs.reduce((acc, fn) => fn(acc), arg);
}

/**
 * Delays the execution of a function by a specified amount of time.
 * @param func - The function to delay.
 * @param wait - The delay time in milliseconds.
 * @returns A new function that delays the execution of the input function.
 */
export function delay<T extends (...args: any[]) => void>(func: T, wait: number): T {
    return function (...args: Parameters<T>) {
        setTimeout(() => func(...args), wait);
    } as T;
}

/**
 * Retries a function a specified number of times if it fails.
 * @param func - The function to retry.
 * @param attempts - The number of attempts.
 * @returns A new function that retries the input function.
 */
export function retry<T extends (...args: any[]) => Promise<any>>(func: T, attempts: number): T {
    return (async function (...args: Parameters<T>): Promise<ReturnType<T>> {
        for (let i = 0; i < attempts; i++) {
            try {
                return await func(...args);
            } catch (error) {
                if (i === attempts - 1) throw error;
            }
        }
        // This will never be reached because of the throw in the catch block
        throw new Error('Unexpected error');
    } as unknown) as T;
}

/**
 * Creates a debounced function for asynchronous functions.
 * @param func - The asynchronous function to debounce.
 * @param delay - The delay in milliseconds.
 * @returns A new debounced function.
 */
export function debounceAsync<T extends (...args: any[]) => Promise<any>>(func: T, delay: number): T {
    let timeoutId: ReturnType<typeof setTimeout>;
    return (function (...args: Parameters<T>): Promise<ReturnType<T>> {
        clearTimeout(timeoutId);
        return new Promise<ReturnType<T>>((resolve, reject) => {
            timeoutId = setTimeout(() => {
                func(...args).then(resolve).catch(reject);
            }, delay);
        });
    } as unknown) as T;
}
