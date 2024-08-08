// string.ts

/**
 * Converts a string to title case.
 * @param str - The string to convert.
 * @returns The string in title case.
 */
export function toTitleCase(str: string): string {
  return str.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

/**
 * Capitalizes the first letter of each word in a string.
 * @param str - The string to capitalize.
 * @returns The string with each word capitalized.
 */
export function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

/**
 * Trims excessive whitespace and leading/trailing spaces from a string.
 * @param str - The string to trim.
 * @returns The trimmed string.
 */
export function trimText(str: string): string {
  return str.replace(/\s+/g, ' ').trim();
}

/**
 * Capitalizes the first letter of a string.
 * @param str - The string to capitalize.
 * @returns The string with the first letter capitalized.
 */
export function capitalizeFirstLetter(str: string): string {
  if (str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Counts the number of words in a string.
 * @param str - The string to count words in.
 * @returns The number of words.
 */
export function countWords(str: string): number {
  return str.trim().split(/\s+/).length;
}

/**
 * Removes special characters from a string.
 * @param str - The string to clean.
 * @returns The cleaned string.
 */
export function removeSpecialChars(str: string): string {
  return str.replace(/[^a-zA-Z0-9 ]/g, '');
}



/**
 * Converts a string to snake_case.
 * @param str - The string to convert.
 * @returns The string in snake_case.
 */
export function toSnakeCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Converts a string to kebab-case.
 * @param str - The string to convert.
 * @returns The string in kebab-case.
 */
export function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Repeats a string a specified number of times.
 * @param str - The string to repeat.
 * @param times - The number of times to repeat.
 * @returns The repeated string.
 */
export function repeatString(str: string, times: number): string {
  return str.repeat(times);
}

/**
 * Checks if a string is a palindrome.
 * @param str - The string to check.
 * @returns True if the string is a palindrome, false otherwise.
 */
export function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleaned === cleaned.split('').reverse().join('');
}
