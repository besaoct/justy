// truncate-fns.ts

/**
 * Truncates a string to a specified length and optionally appends an ellipsis.
 * @param str - The string to truncate.
 * @param length - The length to truncate to.
 * @param addEllipsis - Whether to append an ellipsis. Defaults to true.
 * @returns The truncated string.
 */
export function truncateString(str: string, length: number, addEllipsis: boolean = true): string {
  if (length < 0) throw new Error('Length must be a non-negative number');
  if (str.length <= length) return str;
  return str.slice(0, length) + (addEllipsis ? '...' : '');
}

/**
 * Truncates a number to a specified number of decimal places.
 * @param num - The number to truncate.
 * @param decimals - The number of decimal places to keep.
 * @returns The truncated number.
 */
export function truncateNumber(num: number, decimals: number): number {
  if (decimals < 0) throw new Error('Decimal places must be a non-negative number');
  const factor = Math.pow(10, decimals);
  return Math.floor(num * factor) / factor;
}

/**
 * Truncates a string or number based on the type and provided length/decimal places.
 * @param input - The input to truncate (string or number).
 * @param lengthOrDecimals - The length for strings or number of decimal places for numbers.
 * @param addEllipsis - Whether to append an ellipsis for strings (optional).
 * @returns The truncated string or number.
 */
export function truncate(input: string, length: number, addEllipsis?: boolean): string;
export function truncate(input: number, decimals: number): number;
export function truncate(input: string | number, lengthOrDecimals: number, addEllipsis?: boolean): string | number {
  if (typeof input === 'string') {
    return truncateString(input, lengthOrDecimals, addEllipsis);
  } else if (typeof input === 'number') {
    return truncateNumber(input, lengthOrDecimals);
  } else {
    throw new Error('Unsupported type for truncation');
  }
}
