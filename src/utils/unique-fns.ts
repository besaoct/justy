// unique-fns.ts

import { randomString } from "./random-fns";

/**
 * Generates a UUID (Universally Unique Identifier).
 * @returns A UUID string.
 */
export function generateUUID(): string {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (char) => {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (char === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

/**
 * Generates a unique username based on a full name and email.
 * @param fullName - The user's full name.
 * @param email - The user's email.
 * @returns A unique username.
 */
export function generateUniqueUsername(fullName: string, email: string): string {
  const firstName = fullName.split(' ')[0].toLowerCase().replace(/\s+/g, '_');
  const emailLocalPart = email.split('@')[0].toLowerCase();
  const emailWithoutVowels = emailLocalPart.replace(/[aeiou]/gi, '');
  const shuffledEmailPart = emailWithoutVowels.split('').sort(() => 0.5 - Math.random()).join('').slice(0, 4);
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}${month}${day}`;
  const shuffledDate = formattedDate.split('').sort(() => 0.5 - Math.random()).join('').slice(0, 4);
  let combinedPart = `${shuffledEmailPart}${shuffledDate}`;

  if (Math.random() > 0.5) {
    const insertUnderscoreAt = Math.floor(Math.random() * (combinedPart.length + 1));
    combinedPart = combinedPart.slice(0, insertUnderscoreAt) + '_' + combinedPart.slice(insertUnderscoreAt);
  }

  let username = `${firstName}${combinedPart}`.toLowerCase();
  username = username.replace(/[^a-z0-9_]/g, '');

  if (username.length > 12) {
    username = username.slice(0, 12);
  }

  const underscoreCount = (username.match(/_/g) || []).length;
  if (underscoreCount > 1) {
    username = username.replace(/_/g, '');
  }

  if (underscoreCount > 0 && !username.includes('_')) {
    const insertUnderscoreAt = Math.floor(Math.random() * (username.length + 1));
    username = username.slice(0, insertUnderscoreAt) + '_' + username.slice(insertUnderscoreAt);
  }

  return username;
}

/**
 * Generates a slug from a title and an optional author.
 * @param title - The title to slugify.
 * @param author - The author of the title, defaults to 'guest'.
 * @returns A slug string.
 */
export function slugify(title: string, author: string = 'guest'): string {
  const truncatedTitle = title.length > 64 ? title.slice(0, 64) : title;
  const baseSlug = `${truncatedTitle}-${author}`
    .toLowerCase()
    .replace(/[^a-z0-9-_]/g, '-') 
    .replace(/-+/g, '-') 
    .replace(/^-+|-+$/g, '');

  const date = new Date();
  const dateStr = `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}-${String(date.getHours()).padStart(2, '0')}-${String(date.getMinutes()).padStart(2, '0')}-${String(date.getSeconds()).padStart(2, '0')}`;

  const characters = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789';
  const randomString = Array.from({ length: 16 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');

  return `${baseSlug}-${dateStr}-${randomString}`;
}


/**
 * Generates a unique filename by combining a base name with a unique identifier.
 * @param baseName - The base name of the file.
 * @returns A unique filename string.
 */
export function generateUniqueFilename(baseName: string): string {
  const timestamp = Date.now();
  const uniqueId = generateUUID();
  return `${baseName}-${timestamp}-${uniqueId}.txt`;
}


/**
 * Generates a unique token using a combination of random values and timestamp.
 * @returns A unique token string.
 */
export function generateToken(): string {
  return `${Date.now()}-${randomString(16)}`;
}


/**
 * Checks if all elements in an array are unique.
 * @param array - The array to check.
 * @returns True if all elements are unique, false otherwise.
 */
export function hasUniqueElements(array: any[]): boolean {
  return new Set(array).size === array.length;
}
