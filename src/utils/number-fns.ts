// number-fns.ts

/**
 * Formats a large number into a more readable string with suffixes.
 * @param num - The number to format.
 * @param digits - The number of decimal places to include (optional).
 * @returns A formatted number string.
 */
export function formatNumberWithSuffix(num: number, digits: number = 0): string {
  if (num < 1000) {
    return num.toString();
  }

  const suffixes = ['k', 'M', 'B', 'T'];
  const tier = Math.log10(num) / 3 | 0; // Determine the tier (thousands, millions, etc.)
  const suffix = suffixes[tier - 1] || '';
  const scale = Math.pow(10, tier * 3);
  const scaled = num / scale;
  
  // Round to the specified number of decimal places
  const rounded = scaled.toFixed(digits);
  
  return `${rounded}${suffix}`;
}

/**
 * Clamps a number between a minimum and maximum value.
 * @param num - The number to clamp.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns The clamped number.
 */
export function clamp(num: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, num));
}

/**
 * Calculates the percentage difference between two numbers.
 * @param oldValue - The initial value.
 * @param newValue - The new value.
 * @returns The percentage difference.
 */
export function percentageDifference(oldValue: number, newValue: number): number {
  if (oldValue === 0) return 0;
  return ((newValue - oldValue) / Math.abs(oldValue)) * 100;
}

/**
 * Converts a percentage value to a decimal.
 * @param percentage - The percentage value.
 * @returns The decimal value.
 */
export function percentageToDecimal(percentage: number): number {
  return percentage / 100;
}

/**
 * Converts a decimal value to a percentage.
 * @param decimal - The decimal value.
 * @returns The percentage value.
 */
export function decimalToPercentage(decimal: number): number {
  return decimal * 100;
}

/**
 * Finds the median of an array of numbers.
 * @param numbers - The array of numbers.
 * @returns The median value.
 */
export function findMedian(numbers: number[]): number {
  const sorted = numbers.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];
}

/**
 * Finds the mode of an array of numbers.
 * @param numbers - The array of numbers.
 * @returns The mode value(s).
 */
export function findMode(numbers: number[]): number[] {
  const frequency: { [key: number]: number } = {};
  let maxFreq = 0;
  const modes: number[] = [];

  for (const num of numbers) {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxFreq) {
      maxFreq = frequency[num];
    }
  }

  for (const num in frequency) {
    if (frequency[num] === maxFreq) {
      modes.push(Number(num));
    }
  }

  return modes;
}

/**
 * Calculates the factorial of a number.
 * @param n - The number.
 * @returns The factorial of the number.
 */
export function factorial(n: number): number {
  if (n < 0) return NaN;
  return n === 0 ? 1 : n * factorial(n - 1);
}

/**
 * Rounds a number to the nearest multiple of a given value.
 * @param num - The number to round.
 * @param multiple - The multiple to round to.
 * @returns The rounded number.
 */
export function roundToNearestMultiple(num: number, multiple: number): number {
  return Math.round(num / multiple) * multiple;
}

/**
 * Calculates the sum of an array of numbers.
 * @param numbers - The array of numbers.
 * @returns The sum of the numbers.
 */
export function sum(numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}


/**
 * Calculates the average of an array of numbers.
 * @param numbers - The array of numbers.
 * @returns The average value.
 */
export function average(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return sum(numbers) / numbers.length;
}


/**
 * Rounds a number to a specified number of decimal places.
 * @param num - The number to round.
 * @param decimalPlaces - The number of decimal places.
 * @returns The rounded number.
 */
export function roundToDecimalPlaces(num: number, decimalPlaces: number): number {
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(num * factor) / factor;
}


/**
 * Checks if a number is a prime number.
 * @param num - The number to check.
 * @returns True if the number is prime, false otherwise.
 */
export function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}


/**
 * Generates an array of numbers within a specified range.
 * @param start - The starting value.
 * @param end - The ending value.
 * @param step - The step size between values.
 * @returns An array of numbers.
 */
export function generateRange(start: number, end: number, step: number = 1): number[] {
  const range = [];
  for (let i = start; i <= end; i += step) {
    range.push(i);
  }
  return range;
}

/**
 * Linearly interpolates between two values.
 * @param start - The start value.
 * @param end - The end value.
 * @param t - The interpolation factor (0.0 to 1.0).
 * @returns The interpolated value.
 */
export function lerp(start: number, end: number, t: number): number {
  return start + t * (end - start);
}





