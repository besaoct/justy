// random-fns.ts

/**
 * Generates a random integer between min and max, inclusive.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns A random integer between min and max.
 */
export function randomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random string of a specified length.
 * @param length - The length of the string.
 * @returns A random string of the given length.
 */
export function randomString(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length }, () => characters.charAt(Math.floor(Math.random() * characters.length))).join('');
}

/**
 * Generates a random integer between min and max, inclusive.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns A random integer between min and max.
 */
export function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random float between min and max.
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns A random float between min and max.
 */
export function getRandomFloat(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Chooses a random element from an array.
 * @param arr - The array to choose from.
 * @returns A random element from the array.
 */
export function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Generates a random boolean value.
 * @returns A random boolean.
 */
export function randomBoolean(): boolean {
  return Math.random() < 0.5;
}

/**
 * Generates a random date between two given dates.
 * @param startDate - The start date.
 * @param endDate - The end date.
 * @returns A random date within the range.
 */
export function randomDate(startDate: Date, endDate: Date): Date {
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();
  const randomTimestamp = Math.floor(Math.random() * (endTimestamp - startTimestamp + 1)) + startTimestamp;
  return new Date(randomTimestamp);
}

/**
 * Generates a random hex color code.
 * @returns A random hex color code.
 */
export function randomColor(): string {
  const randomValue = Math.floor(Math.random() * 0xffffff);
  return `#${randomValue.toString(16).padStart(6, '0')}`;
}

/**
 * Generates a random password with a specified length and optional complexity.
 * @param length - The length of the password.
 * @param includeSpecialChars - Whether to include special characters.
 * @returns A random password.
 */
export function randomPassword(length: number, includeSpecialChars: boolean = true): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
  const chars = includeSpecialChars ? characters + specialChars : characters;
  return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}

/**
 * Chooses a random item from an array with weighted probabilities.
 * @param items - Array of items with their weights.
 * @returns A randomly chosen item based on weights.
 */
export function randomWeightedItem<T>(items: { item: T; weight: number }[]): T {
  const totalWeight = items.reduce((sum, { weight }) => sum + weight, 0);
  let random = Math.random() * totalWeight;
  for (const { item, weight } of items) {
    if (random < weight) {
      return item;
    }
    random -= weight;
  }
  throw new Error('Random weighted item selection failed.');
}

/**
 * Selects a random winner from an array of participants.
 * @param participants - An array of participant names or objects.
 * @returns A randomly chosen participant.
 */
export function selectRandomWinner<T>(participants: T[]): T {
  if (participants.length === 0) {
    throw new Error('No participants available for selection.');
  }
  const randomIndex = Math.floor(Math.random() * participants.length);
  return participants[randomIndex];
}

/**
 * Selects a specified number of random winners from an array of participants.
 * @param participants - An array of participant names or objects.
 * @param numberOfWinners - The number of winners to select.
 * @returns An array of randomly chosen winners.
 */
export function selectMultipleWinners<T>(participants: T[], numberOfWinners: number): T[] {
  if (numberOfWinners > participants.length) {
    throw new Error('Number of winners cannot be greater than the number of participants.');
  }
  const shuffled = [...participants].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfWinners);
}

/**
 * Selects a random winner from an array of participants with weights.
 * @param participants - An array of participants with weights.
 * @returns A randomly chosen participant based on weights.
 */
export function selectWeightedWinner<T>(participants: { item: T; weight: number }[]): T {
  const totalWeight = participants.reduce((sum, { weight }) => sum + weight, 0);
  let random = Math.random() * totalWeight;
  for (const { item, weight } of participants) {
    if (random < weight) {
      return item;
    }
    random -= weight;
  }
  throw new Error('Weighted random selection failed.');
}

/**
 * Generates a random date between two dates.
 * @param startDate - The start date of the range.
 * @param endDate - The end date of the range.
 * @returns A random date within the specified range.
 */
export function getRandomDate(startDate: Date, endDate: Date): Date {
  const start = startDate.getTime();
  const end = endDate.getTime();
  const randomTime = Math.random() * (end - start) + start;
  return new Date(randomTime);
}

/**
 * Generates a random hex color code.
 * @returns A random hex color code.
 */
export function getRandomHexColor(): string {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Generates a random password with custom rules.
 * @param length - The length of the password.
 * @param options - Custom options for the password.
 * @returns A random password meeting the specified rules.
 */
export function generateCustomPassword(length: number, options: { includeUppercase?: boolean; includeNumbers?: boolean; includeSymbols?: boolean } = {}): string {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  let characters = lowercase;
  if (options.includeUppercase) characters += uppercase;
  if (options.includeNumbers) characters += numbers;
  if (options.includeSymbols) characters += symbols;

  if (characters.length === 0) {
    throw new Error('At least one character type must be included.');
  }

  let password = '';
  while (password.length < length) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}

/**
 * Generates a random number based on a Gaussian distribution.
 * @param mean - The mean of the distribution.
 * @param stddev - The standard deviation of the distribution.
 * @returns A random number following a Gaussian distribution.
 */
export function getRandomGaussian(mean: number, stddev: number): number {
  let u1 = 1 - Math.random(); // Uniform(0,1) random doubles
  let u2 = 1 - Math.random();
  let z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  return mean + stddev * z;
}
