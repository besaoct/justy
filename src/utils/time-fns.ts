// time-fns.ts

/**
 * Converts milliseconds to a formatted time string (HH:mm:ss).
 * 
 * @param milliseconds - The time in milliseconds.
 * @returns The formatted time string.
 */
export function millisecondsToTimeString(milliseconds: number): string {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  const formattedSeconds = String(seconds % 60).padStart(2, '0');
  const formattedMinutes = String(minutes % 60).padStart(2, '0');
  const formattedHours = String(hours).padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

/**
 * Converts a time string (HH:mm:ss) to milliseconds.
 * 
 * @param timeString - The time string.
 * @returns The time in milliseconds.
 */
export function timeStringToMilliseconds(timeString: string): number {
  const [hours, minutes, seconds] = timeString.split(':').map(Number);
  return (hours * 3600000) + (minutes * 60000) + (seconds * 1000);
}

/**
 * Adds a specified number of hours to a date.
 * 
 * @param date - The original date.
 * @param hours - The number of hours to add.
 * @returns The new date.
 */
export function addHours(date: Date, hours: number): Date {
  const result = new Date(date);
  result.setHours(result.getHours() + hours);
  return result;
}

/**
 * Adds a specified number of minutes to a date.
 * 
 * @param date - The original date.
 * @param minutes - The number of minutes to add.
 * @returns The new date.
 */
export function addMinutes(date: Date, minutes: number): Date {
  const result = new Date(date);
  result.setMinutes(result.getMinutes() + minutes);
  return result;
}

/**
 * Adds a specified number of seconds to a date.
 * 
 * @param date - The original date.
 * @param seconds - The number of seconds to add.
 * @returns The new date.
 */
export function addSeconds(date: Date, seconds: number): Date {
  const result = new Date(date);
  result.setSeconds(result.getSeconds() + seconds);
  return result;
}

/**
 * Formats the difference between two dates as a human-readable string with customizable granularity.
 * 
 * @param startDate - The start date.
 * @param endDate - The end date.
 * @param options - Optional settings to specify the level of detail (e.g., ['days', 'hours', 'minutes', 'seconds']).
 * @returns The formatted difference string.
 */
export function formatTimeDifference(
  startDate: Date, 
  endDate: Date, 
  options: Array<'days' | 'hours' | 'minutes' | 'seconds'> = ['days', 'hours', 'minutes', 'seconds']
): string {
  const diff = endDate.getTime() - startDate.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  let formattedString = '';

  if (options.includes('days') && days > 0) {
    formattedString += `${days} day${days > 1 ? 's' : ''} `;
  }
  if (options.includes('hours') && hours % 24 > 0) {
    formattedString += `${hours % 24} hour${hours % 24 > 1 ? 's' : ''} `;
  }
  if (options.includes('minutes') && minutes % 60 > 0) {
    formattedString += `${minutes % 60} minute${minutes % 60 > 1 ? 's' : ''} `;
  }
  if (options.includes('seconds') && seconds % 60 > 0) {
    formattedString += `${seconds % 60} second${seconds % 60 > 1 ? 's' : ''}`;
  }

  return formattedString.trim();
}

/**
 * Formats a duration given in milliseconds as a human-readable string.
 * 
 * @param duration - The duration in milliseconds.
 * @returns The formatted duration string.
 */
export function formatDuration(duration: number): string {
  const milliseconds = duration % 1000;
  const seconds = Math.floor((duration / 1000) % 60);
  const minutes = Math.floor((duration / (1000 * 60)) % 60);
  const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  const days = Math.floor(duration / (1000 * 60 * 60 * 24));

  const formattedDays = days > 0 ? `${days} day${days > 1 ? 's' : ''} ` : '';
  const formattedHours = hours > 0 ? `${hours} hour${hours > 1 ? 's' : ''} ` : '';
  const formattedMinutes = minutes > 0 ? `${minutes} minute${minutes > 1 ? 's' : ''} ` : '';
  const formattedSeconds = seconds > 0 ? `${seconds} second${seconds > 1 ? 's' : ''} ` : '';
  const formattedMilliseconds = milliseconds > 0 ? `${milliseconds} millisecond${milliseconds > 1 ? 's' : ''}` : '';

  return `${formattedDays}${formattedHours}${formattedMinutes}${formattedSeconds}${formattedMilliseconds}`.trim();
}

/**
 * Formats the given date as a human-readable "time ago" string.
 * 
 * @param date - The date to format.
 * @returns The formatted "time ago" string.
 */
export function timeAgo(date: Date): string {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) return `${interval} year${interval > 1 ? 's' : ''} ago`;

  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) return `${interval} month${interval > 1 ? 's' : ''} ago`;

  interval = Math.floor(seconds / 604800);
  if (interval >= 1) return `${interval} week${interval > 1 ? 's' : ''} ago`;

  interval = Math.floor(seconds / 86400);
  if (interval >= 1) return `${interval} day${interval > 1 ? 's' : ''} ago`;

  interval = Math.floor(seconds / 3600);
  if (interval >= 1) return `${interval} hour${interval > 1 ? 's' : ''} ago`;

  interval = Math.floor(seconds / 60);
  if (interval >= 1) return `${interval} minute${interval > 1 ? 's' : ''} ago`;

  return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
}
