// date-fns.ts

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const shortMonthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

const dayNames = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const shortDayNames = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
];

/**
 * Formats a date according to the provided format string.
 * 
 * @param {Date} date - The date to format.
 * @param {string} format - The format string.
 * @returns {string} - The formatted date string.
 */
export function formatDate(date: Date, format: string): string {
  const map: { [key: string]: string } = {
    'MM': ('0' + (date.getMonth() + 1)).slice(-2),
    'M': (date.getMonth() + 1).toString(),
    'MMM': shortMonthNames[date.getMonth()],
    'MMMM': monthNames[date.getMonth()],
    'DD': ('0' + date.getDate()).slice(-2),
    'D': date.getDate().toString(),
    'dddd': dayNames[date.getDay()],
    'ddd': shortDayNames[date.getDay()],
    'YYYY': date.getFullYear().toString(),
    'YY': date.getFullYear().toString().slice(-2),
    'HH': ('0' + date.getHours()).slice(-2),
    'H': date.getHours().toString(),
    'mm': ('0' + date.getMinutes()).slice(-2),
    'm': date.getMinutes().toString(),
    'ss': ('0' + date.getSeconds()).slice(-2),
    's': date.getSeconds().toString()
  };

  return format.replace(/MM|M|MMM|MMMM|DD|D|dddd|ddd|YYYY|YY|HH|H|mm|m|ss|s/g, (matched) => map[matched]);
}

/**
 * Adds a specified number of days to a date.
 * 
 * @param {Date} date - The original date.
 * @param {number} days - The number of days to add.
 * @returns {Date} - The new date.
 */
export function addDays(date: Date, days: number): Date {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

/**
 * Subtracts a specified number of days from a date.
 * 
 * @param {Date} date - The original date.
 * @param {number} days - The number of days to subtract.
 * @returns {Date} - The new date.
 */
export function subtractDays(date: Date, days: number): Date {
  return addDays(date, -days);
}

/**
 * Adds a specified number of months to a date.
 * 
 * @param {Date} date - The original date.
 * @param {number} months - The number of months to add.
 * @returns {Date} - The new date.
 */
export function addMonths(date: Date, months: number): Date {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate;
}

/**
 * Subtracts a specified number of months from a date.
 * 
 * @param {Date} date - The original date.
 * @param {number} months - The number of months to subtract.
 * @returns {Date} - The new date.
 */
export function subtractMonths(date: Date, months: number): Date {
  return addMonths(date, -months);
}

/**
 * Adds a specified number of years to a date.
 * 
 * @param {Date} date - The original date.
 * @param {number} years - The number of years to add.
 * @returns {Date} - The new date.
 */
export function addYears(date: Date, years: number): Date {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + years);
  return newDate;
}

/**
 * Subtracts a specified number of years from a date.
 * 
 * @param {Date} date - The original date.
 * @param {number} years - The number of years to subtract.
 * @returns {Date} - The new date.
 */
export function subtractYears(date: Date, years: number): Date {
  return addYears(date, -years);
}
/**
 * Adds a specified number of weeks to a date.
 * 
 * @param date - The original date.
 * @param weeks - The number of weeks to add.
 * @returns The new date.
 */
export function addWeeks(date: Date, weeks: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + weeks * 7);
  return result;
}

/**
 * Subtracts a specified number of weeks from a date.
 * 
 * @param date - The original date.
 * @param weeks - The number of weeks to subtract.
 * @returns The new date.
 */
export function subtractWeeks(date: Date, weeks: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() - weeks * 7);
  return result;
}

/**
 * Adds a specified number of quarters to a date.
 * 
 * @param date - The original date.
 * @param quarters - The number of quarters to add.
 * @returns The new date.
 */
export function addQuarters(date: Date, quarters: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() + quarters * 3);
  return result;
}

/**
 * Subtracts a specified number of quarters from a date.
 * 
 * @param date - The original date.
 * @param quarters - The number of quarters to subtract.
 * @returns The new date.
 */
export function subtractQuarters(date: Date, quarters: number): Date {
  const result = new Date(date);
  result.setMonth(result.getMonth() - quarters * 3);
  return result;
}

/**
 * Returns the start of the day for the given date.
 * 
 * @param {Date} date - The original date.
 * @returns {Date} - The start of the day.
 */
export function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/**
 * Returns the end of the day for the given date.
 * 
 * @param {Date} date - The original date.
 * @returns {Date} - The end of the day.
 */
export function endOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}

/**
 * Returns the start of the week for the given date.
 * 
 * @param {Date} date - The original date.
 * @param {number} startDayOfWeek - The day the week starts on (0 for Sunday, 1 for Monday, etc.).
 * @returns {Date} - The start of the week.
 */
export function startOfWeek(date: Date, startDayOfWeek: number = 0): Date {
  const day = date.getDay();
  const diff = (day < startDayOfWeek ? 7 : 0) + day - startDayOfWeek;
  return startOfDay(addDays(date, -diff));
}

/**
 * Returns the end of the week for the given date.
 * 
 * @param {Date} date - The original date.
 * @param {number} startDayOfWeek - The day the week starts on (0 for Sunday, 1 for Monday, etc.).
 * @returns {Date} - The end of the week.
 */
export function endOfWeek(date: Date, startDayOfWeek: number = 0): Date {
  return endOfDay(addDays(startOfWeek(date, startDayOfWeek), 6));
}

/**
 * Returns the start of the month for the given date.
 * 
 * @param {Date} date - The original date.
 * @returns {Date} - The start of the month.
 */
export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

/**
 * Returns the end of the month for the given date.
 * 
 * @param {Date} date - The original date.
 * @returns {Date} - The end of the month.
 */
export function endOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);
}

/**
 * Returns the start of the year for the given date.
 * 
 * @param {Date} date - The original date.
 * @returns {Date} - The start of the year.
 */
export function startOfYear(date: Date): Date {
  return new Date(date.getFullYear(), 0, 1);
}

/**
 * Returns the end of the year for the given date.
 * 
 * @param {Date} date - The original date.
 * @returns {Date} - The end of the year.
 */
export function endOfYear(date: Date): Date {
  return new Date(date.getFullYear(), 11, 31, 23, 59, 59, 999);
}

/**
 * Checks if the given date is today.
 * 
 * @param {Date} date - The date to check.
 * @returns {boolean} - True if the date is today, otherwise false.
 */
export function isToday(date: Date): boolean {
  const today = new Date();
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
}

/**
 * Checks if the given date is tomorrow.
 * 
 * @param {Date} date - The date to check.
 * @returns {boolean} - True if the date is tomorrow, otherwise false.
 */
export function isTomorrow(date: Date): boolean {
  return isToday(addDays(date, -1));
}

/**
 * Checks if the given date is yesterday.
 * 
 * @param {Date} date - The date to check.
 * @returns {boolean} - True if the date is yesterday, otherwise false.
 */
export function isYesterday(date: Date): boolean {
  return isToday(addDays(date, 1));
}

/**
 * Calculates the difference in days between two dates.
 * 
 * @param {Date} a - The first date.
 * @param {Date} b - The second date.
 * @returns {number} - The difference in days.
 */
export function dateDiffInDays(a: Date, b: Date): number {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

/**
 * Calculates the difference in months between two dates.
 * 
 * @param {Date} a - The first date.
 * @param {Date} b - The second date.
 * @returns {number} - The difference in months.
 */
export function dateDiffInMonths(a: Date, b: Date): number {
  return (b.getFullYear() - a.getFullYear()) * 12 + b.getMonth() - a.getMonth();
}

/**
 * Calculates the difference in years between two dates.
 * 
 * @param {Date} a - The first date.
 * @param {Date} b - The second date.
 * @returns {number} - The difference in years.
 */
export function dateDiffInYears(a: Date, b: Date): number {
  return b.getFullYear() - a.getFullYear();
}


/**
 * Gets the number of days in a month.
 * 
 * @param year - The year.
 * @param month - The month (0-based, e.g., January is 0, February is 1, etc.).
 * @returns The number of days in the month.
 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Checks if a year is a leap year.
 * 
 * @param year - The year to check.
 * @returns True if the year is a leap year, false otherwise.
 */
export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

