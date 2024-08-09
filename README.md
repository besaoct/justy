
# Justy

`justy` is a versatile utility library for simplifying array and object operations, conversions, date and time manipulations, string and number manipulations, and general-purpose tasks in JavaScript and TypeScript applications. Whether you need to generate unique usernames, truncate strings and numbers, create URL-friendly unique slugs, or perform various other operations, `justy` offers a comprehensive set of functions to streamline your development process.

## Table of Contents

- [Unique utility Functions](#unique-utility-functions)
- [Truncate utility functions](#truncate-utility-functions)
- [Time utility Functions](#time-utility-functions)
- [String utility functions](#string-utility-functions)
- [Random utility Functions](#random-utility-functions)
- [Object utility functions](#object-utility-functions)
- [Number utility Functions](#number-utility-functions)
- [JSON utility Functions](#json-utility-functions)
- [Function utility functions](#function-utility-functions)
- [Date utility Functions](#date-utility-functions)
- [Convert utility functions](#convert-utility-functions)
- [Array utility functions](#array-utility-functions)

## Unique utility Functions

### `generateUUID`

Generates a UUID (Universally Unique Identifier).

```typescript
function generateUUID(): string;
```

**Returns:** A UUID string.

### `generateUniqueUsername`

Generates a unique username based on a full name and email.

```typescript
function generateUniqueUsername(fullName: string, email: string): string;
```

**Parameters:**

- `fullName`: The user's full name.
- `email`: The user's email.

**Returns:** A unique username.

### `slugify`

Generates a slug(unique) from a title and an optional author.

```typescript
function slugify(title: string, author: string = 'guest'): string;
```

**Parameters:**

- `title`: The title to slugify.
- `author`: The author of the title, defaults to 'guest'.

**Returns:** Unique slug string.

### `generateUniqueFilename`

Generates a unique filename by combining a base name with a unique identifier.

```typescript
function generateUniqueFilename(baseName: string): string;
```

**Parameters:**

- `baseName`: The base name of the file.

**Returns:** A unique filename string.

### `generateToken`

Generates a unique token using a combination of random values and timestamp.

```typescript
function generateToken(): string;
```

**Returns:** A unique token string.

### `hasUniqueElements`

Checks if all elements in an array are unique.

```typescript
function hasUniqueElements(array: any[]): boolean;
```

**Parameters:**

- `array`: The array to check.

**Returns:** True if all elements are unique, false otherwise.

### Usage of Unique utility functions

Import the functions into your project as needed:

```typescript
import {
  hasUniqueElements,
  generateToken,
  slugify,
  generateUniqueUsername,
  generateUUID
} from 'justy';
```

## Truncate utility Functions

### `truncateString`

Truncates a string to a specified length and optionally appends an ellipsis.

```typescript
function truncateString(str: string, length: number, addEllipsis: boolean = true): string;
```

**Parameters:**

- `str`: The string to truncate.
- `length`: The length to truncate to.
- `addEllipsis`: Whether to append an ellipsis. Defaults to true.

**Returns:** The truncated string.

### `truncateNumber`

Truncates a number to a specified number of decimal places.

```typescript
function truncateNumber(num: number, decimals: number): number;
```

**Parameters:**

- `num`: The number to truncate.
- `decimals`: The number of decimal places to keep.

**Returns:** The truncated number.

### `truncate`

Truncates a string or number based on the type and provided length/decimal places.

```typescript
function truncate(input: string, length: number, addEllipsis?: boolean): string;
function truncate(input: number, decimals: number): number;
function truncate(input: string | number, lengthOrDecimals: number, addEllipsis?: boolean): string | number;
```

**Parameters:**

- `input`: The input to truncate (string or number).
- `lengthOrDecimals`: The length for strings or number of decimal places for numbers.
- `addEllipsis`: Whether to append an ellipsis for strings (optional).

**Returns:** The truncated string or number.

### Usage of Truncate utility functions

Import the functions into your project as needed:

```typescript
import {
  truncate,
  truncateString,
  truncateNumber,
} from 'justy';
```

## Time utility Functions

A collection of utility functions for handling time and date manipulations in TypeScript/JavaScript.

### `millisecondsToTimeString(milliseconds: number): string`

Converts milliseconds to a formatted time string (`HH:mm:ss`).

**Parameters:**

- `milliseconds`: The time in milliseconds.

**Returns:**

- The formatted time string.

**Example:**

```typescript
millisecondsToTimeString(3661000); // "01:01:01"
```

### `timeStringToMilliseconds(timeString: string): number`

Converts a time string (`HH:mm:ss`) to milliseconds.

**Parameters:**

- `timeString`: The time string.

**Returns:**

- The time in milliseconds.

**Example:**

```typescript
timeStringToMilliseconds("01:01:01"); // 3661000
```

### `addHours(date: Date, hours: number): Date`

Adds a specified number of hours to a date.

**Parameters:**

- `date`: The original date.
- `hours`: The number of hours to add.

**Returns:**

- The new date.

**Example:**

```typescript
addHours(new Date(), 2); // Adds 2 hours to the current date
```

### `addMinutes(date: Date, minutes: number): Date`

Adds a specified number of minutes to a date.

**Parameters:**

- `date`: The original date.
- `minutes`: The number of minutes to add.

**Returns:**

- The new date.

**Example:**

```typescript
addMinutes(new Date(), 30); // Adds 30 minutes to the current date
```

### `addSeconds(date: Date, seconds: number): Date`

Adds a specified number of seconds to a date.

**Parameters:**

- `date`: The original date.
- `seconds`: The number of seconds to add.

**Returns:**

- The new date.

**Example:**

```typescript
addSeconds(new Date(), 45); // Adds 45 seconds to the current date
```

### `formatTimeDifference(startDate: Date, endDate: Date, options: Array<'days' | 'hours' | 'minutes' | 'seconds'> = ['days', 'hours', 'minutes', 'seconds']): string`

Formats the difference between two dates as a human-readable string with customizable granularity.

**Parameters:**

- `startDate`: The start date.
- `endDate`: The end date.
- `options`: Optional settings to specify the level of detail (e.g., `['days', 'hours']`).

**Returns:**

- The formatted difference string.

**Example:**

```typescript
formatTimeDifference(new Date('2024-01-01'), new Date('2024-01-03')); // "2 days"
```

### `formatDuration(duration: number): string`

Formats a duration given in milliseconds as a human-readable string.

**Parameters:**

- `duration`: The duration in milliseconds.

**Returns:**

- The formatted duration string.

**Example:**

```typescript
formatDuration(90061000); // "1 day 1 hour 1 minute 1 second"
```

### `timeAgo(date: Date): string`

Formats the given date as a human-readable "time ago" string.

**Parameters:**

- `date`: The date to format.

**Returns:**

- The formatted "time ago" string.

**Example:**

```typescript
timeAgo(new Date(new Date().getTime() - 3600000)); // "1 hour ago"
```

### Usage of Time utility functions

Import the functions you need:

```typescript
import { millisecondsToTimeString, addHours, formatTimeDifference } from 'justy';
```

## String utility functions

A collection of utility functions for string manipulation in TypeScript/javascript.

### `toTitleCase(str: string): string`

Converts a string to title case.

**Parameters:**

- `str`: The string to convert.

**Returns:**

- The string in title case.

**Example:**

```typescript
toTitleCase("hello world"); // "Hello World"
```

### `capitalizeWords(str: string): string`

Capitalizes the first letter of each word in a string.

**Parameters:**

- `str`: The string to capitalize.

**Returns:**

- The string with each word capitalized.

**Example:**

```typescript
capitalizeWords("hello world"); // "Hello World"
```

### `trimText(str: string): string`

Trims excessive whitespace and leading/trailing spaces from a string.

**Parameters:**

- `str`: The string to trim.

**Returns:**

- The trimmed string.

**Example:**

```typescript
trimText("   Hello   world!   "); // "Hello world!"
```

### `capitalizeFirstLetter(str: string): string`

Capitalizes the first letter of a string.

**Parameters:**

- `str`: The string to capitalize.

**Returns:**

- The string with the first letter capitalized.

**Example:**

```typescript
capitalizeFirstLetter("hello world"); // "Hello world"
```

### `countWords(str: string): number`

Counts the number of words in a string.

**Parameters:**

- `str`: The string to count words in.

**Returns:**

- The number of words.

**Example:**

```typescript
countWords("Hello world!"); // 2
```

### `removeSpecialChars(str: string): string`

Removes special characters from a string.

**Parameters:**

- `str`: The string to clean.

**Returns:**

- The cleaned string.

**Example:**

```typescript
removeSpecialChars("Hello @world!"); // "Hello world"
```

### `toSnakeCase(str: string): string`

Converts a string to snake_case.

**Parameters:**

- `str`: The string to convert.

**Returns:**

- The string in snake_case.

**Example:**

```typescript
toSnakeCase("Hello World"); // "hello_world"
```

### `toKebabCase(str: string): string`

Converts a string to kebab-case.

**Parameters:**

- `str`: The string to convert.

**Returns:**

- The string in kebab-case.

**Example:**

```typescript
toKebabCase("Hello World"); // "hello-world"
```

### `repeatString(str: string, times: number): string`

Repeats a string a specified number of times.

**Parameters:**

- `str`: The string to repeat.
- `times`: The number of times to repeat.

**Returns:**

- The repeated string.

**Example:**

```typescript
repeatString("abc", 3); // "abcabcabc"
```

### `isPalindrome(str: string): boolean`

Checks if a string is a palindrome.

**Parameters:**

- `str`: The string to check.

**Returns:**

- `true` if the string is a palindrome, `false` otherwise.

**Example:**

```typescript
isPalindrome("A man a plan a canal Panama"); // true
```

### Usage of String utility functions

Import the functions you need:

```typescript
import { toTitleCase, capitalizeWords, repeatString, trimText, toKebabCase, toSnakeCase, removeSpecialChars, countWords, capitalizeFirstLetter, isPalindrome } from 'justy';
```

## Random utility Functions

### `randomNumber`

Generates a random integer between `min` and `max`, inclusive.

**Parameters:**

- `min`: The minimum value.
- `max`: The maximum value.

**Returns:** A random integer between `min` and `max`.

**Example:**

```typescript
const randomInt = randomNumber(1, 10); // e.g., 7
```

### `randomString`

Generates a random string of a specified length.

**Parameters:**

- `length`: The length of the string.

**Returns:** A random string of the given length.

**Example:**

```typescript
const randomStr = randomString(8); // e.g., "aB3dEfGh"
```

### `getRandomInt`

Generates a random integer between `min` and `max`, inclusive.

**Parameters:**

- `min`: The minimum value.
- `max`: The maximum value.

**Returns:** A random integer between `min` and `max`.

**Example:**

```typescript
const randomInt = getRandomInt(5, 15); // e.g., 11
```

### `getRandomFloat`

Generates a random float between `min` and `max`.

**Parameters:**

- `min`: The minimum value.
- `max`: The maximum value.

**Returns:** A random float between `min` and `max`.

**Example:**

```typescript
const randomFloat = getRandomFloat(1.5, 3.5); // e.g., 2.67
```

### `getRandomElement`

Chooses a random element from an array.

**Parameters:**

- `arr`: The array to choose from.

**Returns:** A random element from the array.

**Example:**

```typescript
const randomElement = getRandomElement([1, 2, 3, 4, 5]); // e.g., 3
```

### `randomBoolean`

Generates a random boolean value.

**Returns:** A random boolean.

**Example:**

```typescript
const randomBool = randomBoolean(); // e.g., true
```

### `randomDate`

Generates a random date between two given dates.

**Parameters:**

- `startDate`: The start date.
- `endDate`: The end date.

**Returns:** A random date within the range.

**Example:**

```typescript
const randomDate = randomDate(new Date(2024, 0, 1), new Date(2024, 11, 31)); // e.g., "2024-06-15T12:00:00.000Z"
```

### `randomColor`

Generates a random hex color code.

**Returns:** A random hex color code.

**Example:**

```typescript
const color = randomColor(); // e.g., "#a3c2f0"
```

### `randomPassword`

Generates a random password with a specified length and optional complexity.

**Parameters:**

- `length`: The length of the password.
- `includeSpecialChars`: Whether to include special characters.

**Returns:** A random password.

**Example:**

```typescript
const password = randomPassword(12); // e.g., "A1b2C3d4@5e6F"
```

### `randomWeightedItem`

Chooses a random item from an array with weighted probabilities.

**Parameters:**

- `items`: Array of items with their weights.

**Returns:** A randomly chosen item based on weights.

**Example:**

```typescript
const weightedItem = randomWeightedItem([
  { item: 'A', weight: 1 },
  { item: 'B', weight: 2 },
  { item: 'C', weight: 3 }
]); // e.g., 'B'
```

### `selectRandomWinner`

Selects a random winner from an array of participants.

**Parameters:**

- `participants`: An array of participant names or objects.

**Returns:** A randomly chosen participant.

**Example:**

```typescript
const winner = selectRandomWinner(['Alice', 'Bob', 'Charlie']); // e.g., 'Bob'
```

### `selectMultipleWinners`

Selects a specified number of random winners from an array of participants.

**Parameters:**

- `participants`: An array of participant names or objects.
- `numberOfWinners`: The number of winners to select.

**Returns:** An array of randomly chosen winners.

**Example:**

```typescript
const winners = selectMultipleWinners(['Alice', 'Bob', 'Charlie', 'David'], 2); // e.g., ['Charlie', 'David']
```

### `selectWeightedWinner`

Selects a random winner from an array of participants with weights.

**Parameters:**

- `participants`: An array of participants with weights.

**Returns:** A randomly chosen participant based on weights.

**Example:**

```typescript
const weightedWinner = selectWeightedWinner([
  { item: 'Alice', weight: 1 },
  { item: 'Bob', weight: 2 },
  { item: 'Charlie', weight: 3 }
]); // e.g., 'Charlie'
```

### `getRandomDate`

Generates a random date between two dates.

**Parameters:**

- `startDate`: The start date of the range.
- `endDate`: The end date of the range.

**Returns:** A random date within the specified range.

**Example:**

```typescript
const date = getRandomDate(new Date(2024, 0, 1), new Date(2024, 11, 31)); // e.g., "2024-07-20T00:00:00.000Z"
```

### `getRandomHexColor`

Generates a random hex color code.

**Returns:** A random hex color code.

**Example:**

```typescript
const hexColor = getRandomHexColor(); // e.g., "#f2a3b7"
```

### `generateCustomPassword`

Generates a random password with custom rules.

**Parameters:**

- `length`: The length of the password.
- `options`: Custom options for the password.

**Returns:** A random password meeting the specified rules.

**Example:**

```typescript
const customPassword = generateCustomPassword(10, { includeUppercase: true, includeNumbers: true }); // e.g., "A1b2C3d4E5"
```

### `getRandomGaussian`

Generates a random number based on a Gaussian distribution.

**Parameters:**

- `mean`: The mean of the distribution.
- `stddev`: The standard deviation of the distribution.

**Returns:** A random number following a Gaussian distribution.

**Example:**

```typescript
const gaussianRandom = getRandomGaussian(50, 10); // e.g., 53.4
```

### Usage of Random utility functions

Import the functions you need from the package:

```typescript
import { randomNumber, randomString, getRandomInt, getRandomFloat, getRandomElement, randomBoolean, randomDate, randomColor, randomPassword, randomWeightedItem, selectRandomWinner, selectMultipleWinners, selectWeightedWinner, getRandomDate, getRandomHexColor, generateCustomPassword, getRandomGaussian } from 'justy';
```

## Object utility Functions

### `merge`

Merges multiple objects into one, with later objects overwriting earlier ones.

```typescript
merge<T extends object>(...objects: T[]): T
```

**Parameters:**

- `objects`: The objects to merge.

**Returns:**

- A new object with combined properties.

### `flattenObject`

Flattens a nested object into a single level object with dot notation for nested keys.

```typescript
flattenObject<T extends object>(obj: T, prefix?: string): Record<string, any>
```

**Parameters:**

- `obj`: The nested object to flatten.
- `prefix`: The prefix for the current level (used internally for recursion).

**Returns:**

- A flattened object with dot notation keys.

### `unFlattenObject`

Unflattens a dot notation object into a nested object.

```typescript
unFlattenObject(obj: Record<string, any>): Record<string, any>
```

**Parameters:**

- `obj`: The flattened object with dot notation keys.

**Returns:**

- The nested object.

### `deepMerge`

Deeply merges multiple objects into one, with later objects overwriting earlier ones.

```typescript
deepMerge<T extends object>(...objects: T[]): T
```

**Parameters:**

- `objects`: The objects to merge.

**Returns:**

- A new object with combined properties.

### `getNestedValue`

Gets the value of a deeply nested property in an object.

```typescript
getNestedValue<T>(obj: any, path: string[]): T | undefined
```

**Parameters:**

- `obj`: The object to search.
- `path`: An array of strings representing the path to the property.

**Returns:**

- The value of the nested property or undefined if not found.

### `setNestedValue`

Sets a deeply nested property in an object.

```typescript
setNestedValue(obj: any, path: string[], value: any): any
```

**Parameters:**

- `obj`: The object to modify.
- `path`: An array of strings representing the path to the property.
- `value`: The value to set.

**Returns:**

- The modified object.

### `removeProperty`

Removes a property from an object based on a key or path.

```typescript
removeProperty(obj: any, path: string[]): any
```

**Parameters:**

- `obj`: The object to modify.
- `path`: An array of strings representing the path to the property or a single key.

**Returns:**

- The modified object.

### `objectArray`

Creates an object that behaves like an array and also has object properties.

```typescript
objectArray<T>(entries: [number, T][], properties?: Record<string, any>): Record<number, T> & Record<string, any>
```

**Parameters:**

- `entries`: An array of entries where each entry is a tuple [key, value].
- `properties`: An object containing additional properties to add to the resulting object.

**Returns:**

- An object that behaves like an array with the given entries and properties.

### `omit`

Creates a new object by omitting specific properties from the original object.

```typescript
omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>
```

**Parameters:**

- `obj`: The original object.
- `keys`: The keys to omit.

**Returns:**

- A new object without the specified properties.

### `pick`

Creates a new object by picking specific properties from the original object.

```typescript
pick<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>
```

**Parameters:**

- `obj`: The original object.
- `keys`: The keys to pick.

**Returns:**

- A new object with only the specified properties.
  
### Usage of Object utility functions

Import the functions you need from the package:

```typescript
import { merge, flattenObject, unFlattenObject, deepMerge, getNestedValue, setNestedValue, removeProperty, objectArray, omit, pick } from 'justy';
```

## Number utility Functions

This module provides various utility functions for handling and manipulating numbers.

### `formatNumberWithSuffix(num: number, digits: number = 0): string`

Formats a large number into a more readable string with suffixes.

- **Parameters:**
  - `num` - The number to format.
  - `digits` - The number of decimal places to include (optional).

- **Returns:** A formatted number string.

### `clamp(num: number, min: number, max: number): number`

Clamps a number between a minimum and maximum value.

- **Parameters:**
  - `num` - The number to clamp.
  - `min` - The minimum value.
  - `max` - The maximum value.

- **Returns:** The clamped number.

### `percentageDifference(oldValue: number, newValue: number): number`

Calculates the percentage difference between two numbers.

- **Parameters:**
  - `oldValue` - The initial value.
  - `newValue` - The new value.

- **Returns:** The percentage difference.

### `percentageToDecimal(percentage: number): number`

Converts a percentage value to a decimal.

- **Parameters:**
  - `percentage` - The percentage value.

- **Returns:** The decimal value.

### `decimalToPercentage(decimal: number): number`

Converts a decimal value to a percentage.

- **Parameters:**
  - `decimal` - The decimal value.

- **Returns:** The percentage value.

### `findMedian(numbers: number[]): number`

Finds the median of an array of numbers.

- **Parameters:**
  - `numbers` - The array of numbers.

- **Returns:** The median value.

### `findMode(numbers: number[]): number[]`

Finds the mode of an array of numbers.

- **Parameters:**
  - `numbers` - The array of numbers.

- **Returns:** The mode value(s).

### `factorial(n: number): number`

Calculates the factorial of a number.

- **Parameters:**
  - `n` - The number.

- **Returns:** The factorial of the number.

### `roundToNearestMultiple(num: number, multiple: number): number`

Rounds a number to the nearest multiple of a given value.

- **Parameters:**
  - `num` - The number to round.
  - `multiple` - The multiple to round to.

- **Returns:** The rounded number.

### `sum(numbers: number[]): number`

Calculates the sum of an array of numbers.

- **Parameters:**
  - `numbers` - The array of numbers.

- **Returns:** The sum of the numbers.

### `average(numbers: number[]): number`

Calculates the average of an array of numbers.

- **Parameters:**
  - `numbers` - The array of numbers.

- **Returns:** The average value.

### `roundToDecimalPlaces(num: number, decimalPlaces: number): number`

Rounds a number to a specified number of decimal places.

- **Parameters:**
  - `num` - The number to round.
  - `decimalPlaces` - The number of decimal places.

- **Returns:** The rounded number.

### `isPrime(num: number): boolean`

Checks if a number is a prime number.

- **Parameters:**
  - `num` - The number to check.

- **Returns:** True if the number is prime, false otherwise.

### `generateRange(start: number, end: number, step: number = 1): number[]`

Generates an array of numbers within a specified range.

- **Parameters:**
  - `start` - The starting value.
  - `end` - The ending value.
  - `step` - The step size between values.

- **Returns:** An array of numbers.

### `lerp(start: number, end: number, t: number): number`

Linearly interpolates between two values.

- **Parameters:**
  - `start` - The start value.
  - `end` - The end value.
  - `t` - The interpolation factor (0.0 to 1.0).

- **Returns:** The interpolated value.

### Usage of Number utility functions

```typescript
import { formatNumberWithSuffix, clamp, percentageDifference, percentageToDecimal, decimalToPercentage, findMedian, findMode, factorial, roundToNearestMultiple, sum, average, roundToDecimalPlaces, isPrime, generateRange, lerp } from 'justy';

// Example usage
console.log(formatNumberWithSuffix(1234567)); // "1.23M"
console.log(clamp(10, 0, 5)); // 5
console.log(percentageDifference(100, 150)); // 50
console.log(percentageToDecimal(25)); // 0.25
console.log(decimalToPercentage(0.25)); // 25
console.log(findMedian([1, 2, 3, 4, 5])); // 3
console.log(findMode([1, 2, 2, 3, 3, 3])); // [3]
console.log(factorial(5)); // 120
console.log(roundToNearestMultiple(23, 5)); // 25
console.log(sum([1, 2, 3, 4, 5])); // 15
console.log(average([1, 2, 3, 4, 5])); // 3
console.log(roundToDecimalPlaces(3.14159, 2)); // 3.14
console.log(isPrime(7)); // true
console.log(generateRange(1, 5)); // [1, 2, 3, 4, 5]
console.log(lerp(0, 100, 0.5)); // 50
```

## JSON utility Functions

This module provides various utility functions for handling and manipulating JSON objects.

### `deepClone<T>(obj: T): T`

Deep clones a JSON object.

- **Parameters:**
  - `obj` - The JSON object to clone.

- **Returns:** A deep clone of the JSON object.

### `jsonToQueryString(obj: Record<string, any>): string`

Converts a JSON object to a query string.

- **Parameters:**
  - `obj` - The JSON object to convert.

- **Returns:** A query string representation of the JSON object.

### `queryStringToJson(queryString: string): Record<string, any>`

Converts a query string to a JSON object.

- **Parameters:**
  - `queryString` - The query string to convert.

- **Returns:** A JSON object representation of the query string.

### `isEmpty(obj: Record<string, any>): boolean`

Checks if a JSON object is empty (has no keys).

- **Parameters:**
  - `obj` - The JSON object to check.

- **Returns:** True if the JSON object is empty, false otherwise.

### `flattenJson<T>(obj: T, prefix: string = ''): Record<string, any>`

Flattens a nested JSON object.

- **Parameters:**
  - `obj` - The JSON object to flatten.
  - `prefix` - The prefix for nested keys.

- **Returns:** A flattened JSON object.

### `unFlattenJson<T>(obj: Record<string, any>): T`

Un-flattens a JSON object.

- **Parameters:**
  - `obj` - The flattened JSON object to un-flatten.

- **Returns:** A nested JSON object.

### `deepMergeJson<T>(obj1: T, obj2: T): T`

Merges two JSON objects deeply.

- **Parameters:**
  - `obj1` - The first JSON object.
  - `obj2` - The second JSON object.

- **Returns:** A new JSON object with merged properties.

### `prettyPrintJson(obj: Record<string, any>, indent: number = 2): string`

Converts a JSON object to a formatted string.

- **Parameters:**
  - `obj` - The JSON object to format.
  - `indent` - The number of spaces to use for indentation (default is 2).

- **Returns:** A formatted JSON string.

### `safeParseJson<T>(jsonString: string): T | null`

Parses a JSON string safely, with error handling.

- **Parameters:**
  - `jsonString` - The JSON string to parse.

- **Returns:** The parsed JSON object or null if parsing fails.

### `getJsonDifference(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any>`

Gets the difference between two JSON objects.

- **Parameters:**
  - `obj1` - The first JSON object.
  - `obj2` - The second JSON object.

- **Returns:** An object representing the difference between the two objects.

### `getCommonKeys(obj1: Record<string, any>, obj2: Record<string, any>): string[]`

Gets the common keys between two JSON objects.

- **Parameters:**
  - `obj1` - The first JSON object.
  - `obj2` - The second JSON object.

- **Returns:** An array of keys that are present in both objects.

### `jsonToCsv(obj: Record<string, any>[]): string`

Converts a JSON array to a CSV string.

- **Parameters:**
  - `obj` - The JSON array to convert.

- **Returns:** A CSV string representation of the JSON array.

### Usage of Json utility functions

```typescript
import { deepClone, jsonToQueryString, queryStringToJson, isEmpty, flattenJson, unFlattenJson, deepMergeJson, prettyPrintJson, safeParseJson, getJsonDifference, getCommonKeys, jsonToCsv } from 'justy';

// Example usage
const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);
console.log(clone);

const queryString = jsonToQueryString({ a: 1, b: 2 });
console.log(queryString);

const jsonObject = queryStringToJson('a=1&b=2');
console.log(jsonObject);

console.log(isEmpty({}));

const flattened = flattenJson({ a: 1, b: { c: 2 } });
console.log(flattened);

const unFlattened = unFlattenJson(flattened);
console.log(unFlattened);

const merged = deepMergeJson({ a: 1 }, { b: 2 });
console.log(merged);

console.log(prettyPrintJson({ a: 1, b: { c: 2 } }));

const safeParsed = safeParseJson('{ "a": 1 }');
console.log(safeParsed);

const diff = getJsonDifference({ a: 1 }, { a: 2 });
console.log(diff);

const commonKeys = getCommonKeys({ a: 1 }, { a: 1, b: 2 });
console.log(commonKeys);

const csv = jsonToCsv([{ a: 1, b: 2 }, { a: 3, b: 4 }]);
console.log(csv);
```

## Function utility Functions

This module provides utility functions for managing and manipulating other functions.

### `debounce<T extends (...args: any[]) => void>(func: T, delay: number): T`

Creates a debounced function that delays invoking the provided function until after the specified delay.

- **Parameters:**
  - `func` - The function to debounce.
  - `delay` - The delay in milliseconds.

- **Returns:** A new debounced function.

### `throttle<T extends (...args: any[]) => void>(func: T, interval: number): T`

Creates a throttled function that only invokes the provided function at most once per specified interval.

- **Parameters:**
  - `func` - The function to throttle.
  - `interval` - The interval in milliseconds.

- **Returns:** A new throttled function.

### `once<T extends (...args: any[]) => void>(func: T): T`

Creates a function that is called only once.

- **Parameters:**
  - `func` - The function to call only once.

- **Returns:** A new function that can be called only once.

### `memoize<T extends (...args: any[]) => any>(func: T): T`

Creates a memoized function that caches the result based on its arguments.

- **Parameters:**
  - `func` - The function to memoize.

- **Returns:** A new memoized function.

### `compose<T>(...funcs: ((arg: T) => T)[]): (arg: T) => T`

Composes multiple functions into a single function.

- **Parameters:**
  - `funcs` - The functions to compose.

- **Returns:** A new function that is the composition of the input functions.

### `pipe<T>(...funcs: ((arg: T) => T)[]): (arg: T) => T`

Pipes a value through multiple functions.

- **Parameters:**
  - `funcs` - The functions to pipe through.

- **Returns:** A new function that pipes a value through the input functions.

### `delay<T extends (...args: any[]) => void>(func: T, wait: number): T`

Delays the execution of a function by a specified amount of time.

- **Parameters:**
  - `func` - The function to delay.
  - `wait` - The delay time in milliseconds.

- **Returns:** A new function that delays the execution of the input function.

### `retry<T extends (...args: any[]) => Promise<any>>(func: T, attempts: number): T`

Retries a function a specified number of times if it fails.

- **Parameters:**
  - `func` - The function to retry.
  - `attempts` - The number of attempts.

- **Returns:** A new function that retries the input function.

### `debounceAsync<T extends (...args: any[]) => Promise<any>>(func: T, delay: number): T`

Creates a debounced function for asynchronous functions.

- **Parameters:**
  - `func` - The asynchronous function to debounce.
  - `delay` - The delay in milliseconds.

- **Returns:** A new debounced function.

### Usage of Function utility functions

```typescript
import { debounce, throttle, once, memoize, compose, pipe, delay, retry, debounceAsync } from 'justy';

// Example usage
const log = (message: string) => console.log(message);

const debouncedLog = debounce(log, 300);
debouncedLog('This will be logged after 300ms');

const throttledLog = throttle(log, 1000);
throttledLog('This will be logged at most once per second');

const logOnce = once(log);
logOnce('This will be logged only once');

const memoizedAdd = memoize((a: number, b: number) => a + b);
console.log(memoizedAdd(1, 2)); // 3
console.log(memoizedAdd(1, 2)); // 3 (cached result)

const addOne = (x: number) => x + 1;
const multiplyByTwo = (x: number) => x * 2;
const composed = compose(multiplyByTwo, addOne);
console.log(composed(3)); // 8

const piped = pipe(addOne, multiplyByTwo);
console.log(piped(3)); // 8

const delayedLog = delay(log, 500);
delayedLog('This will be logged after 500ms');

const retryingFetch = retry(async () => fetch('https://api.example.com'), 3);
retryingFetch().then(response => console.log(response));

const debouncedFetch = debounceAsync(async () => fetch('https://api.example.com'), 300);
debouncedFetch().then(response => console.log(response));
```

## Date utility Functions

This module provides a set of utility functions for working with dates in TypeScript/javascript. It includes functions for formatting dates, adding and subtracting time units, checking date properties, and more.

### `formatDate(date: Date, format: string): string`

Formats a date according to the provided format string.

**Parameters:**

- `date`: The date to format.
- `format`: The format string. Supported tokens include:
  - `MM`, `M`: Month
  - `MMM`, `MMMM`: Short and full month names
  - `DD`, `D`: Day of the month
  - `dddd`, `ddd`: Full and short day names
  - `YYYY`, `YY`: Full and short year
  - `HH`, `H`: Hours (24-hour format)
  - `mm`, `m`: Minutes
  - `ss`, `s`: Seconds

**Returns:** A formatted date string.

### `addDays(date: Date, days: number): Date`

Adds a specified number of days to a date.

**Parameters:**

- `date`: The original date.
- `days`: The number of days to add.

**Returns:** The new date.

### `subtractDays(date: Date, days: number): Date`

Subtracts a specified number of days from a date.

**Parameters:**

- `date`: The original date.
- `days`: The number of days to subtract.

**Returns:** The new date.

### `addMonths(date: Date, months: number): Date`

Adds a specified number of months to a date.

**Parameters:**

- `date`: The original date.
- `months`: The number of months to add.

**Returns:** The new date.

### `subtractMonths(date: Date, months: number): Date`

Subtracts a specified number of months from a date.

**Parameters:**

- `date`: The original date.
- `months`: The number of months to subtract.

**Returns:** The new date.

### `addYears(date: Date, years: number): Date`

Adds a specified number of years to a date.

**Parameters:**

- `date`: The original date.
- `years`: The number of years to add.

**Returns:** The new date.

### `subtractYears(date: Date, years: number): Date`

Subtracts a specified number of years from a date.

**Parameters:**

- `date`: The original date.
- `years`: The number of years to subtract.

**Returns:** The new date.

### `addWeeks(date: Date, weeks: number): Date`

Adds a specified number of weeks to a date.

**Parameters:**

- `date`: The original date.
- `weeks`: The number of weeks to add.

**Returns:** The new date.

### `subtractWeeks(date: Date, weeks: number): Date`

Subtracts a specified number of weeks from a date.

**Parameters:**

- `date`: The original date.
- `weeks`: The number of weeks to subtract.

**Returns:** The new date.

### `addQuarters(date: Date, quarters: number): Date`

Adds a specified number of quarters to a date.

**Parameters:**

- `date`: The original date.
- `quarters`: The number of quarters to add.

**Returns:** The new date.

### `subtractQuarters(date: Date, quarters: number): Date`

Subtracts a specified number of quarters from a date.

**Parameters:**

- `date`: The original date.
- `quarters`: The number of quarters to subtract.

**Returns:** The new date.

### `startOfDay(date: Date): Date`

Returns the start of the day for the given date.

**Parameters:**

- `date`: The original date.

**Returns:** The start of the day.

### `endOfDay(date: Date): Date`

Returns the end of the day for the given date.

**Parameters:**

- `date`: The original date.

**Returns:** The end of the day.

### `startOfWeek(date: Date, startDayOfWeek: number = 0): Date`

Returns the start of the week for the given date.

**Parameters:**

- `date`: The original date.
- `startDayOfWeek`: The day the week starts on (0 for Sunday, 1 for Monday, etc.).

**Returns:** The start of the week.

### `endOfWeek(date: Date, startDayOfWeek: number = 0): Date`

Returns the end of the week for the given date.

**Parameters:**

- `date`: The original date.
- `startDayOfWeek`: The day the week starts on (0 for Sunday, 1 for Monday, etc.).

**Returns:** The end of the week.

### `startOfMonth(date: Date): Date`

Returns the start of the month for the given date.

**Parameters:**

- `date`: The original date.

**Returns:** The start of the month.

### `endOfMonth(date: Date): Date`

Returns the end of the month for the given date.

**Parameters:**

- `date`: The original date.

**Returns:** The end of the month.

### `startOfYear(date: Date): Date`

Returns the start of the year for the given date.

**Parameters:**

- `date`: The original date.

**Returns:** The start of the year.

### `endOfYear(date: Date): Date`

Returns the end of the year for the given date.

**Parameters:**

- `date`: The original date.

**Returns:** The end of the year.

### `isToday(date: Date): boolean`

Checks if the given date is today.

**Parameters:**

- `date`: The date to check.

**Returns:** True if the date is today, otherwise false.

### `isTomorrow(date: Date): boolean`

Checks if the given date is tomorrow.

**Parameters:**

- `date`: The date to check.

**Returns:** True if the date is tomorrow, otherwise false.

### `isYesterday(date: Date): boolean`

Checks if the given date is yesterday.

**Parameters:**

- `date`: The date to check.

**Returns:** True if the date is yesterday, otherwise false.

### `dateDiffInDays(a: Date, b: Date): number`

Calculates the difference in days between two dates.

**Parameters:**

- `a`: The first date.
- `b`: The second date.

**Returns:** The difference in days.

### `dateDiffInMonths(a: Date, b: Date): number`

Calculates the difference in months between two dates.

**Parameters:**

- `a`: The first date.
- `b`: The second date.

**Returns:** The difference in months.

### `dateDiffInYears(a: Date, b: Date): number`

Calculates the difference in years between two dates.

**Parameters:**

- `a`: The first date.
- `b`: The second date.

**Returns:** The difference in years.

### `getDaysInMonth(year: number, month: number): number`

Gets the number of days in a month.

**Parameters:**

- `year`: The year.
- `month`: The month (0-based, e.g., January is 0).

**Returns:** The number of days in the month.

### `isLeapYear(year: number): boolean`

Checks if a year is a leap year.

**Parameters:**

- `year`: The year to check.

**Returns:** True if the year is a leap year, false otherwise.

### Usage of Date utility functions

Import the functions you need from the module:

```typescript
import { formatDate, addDays, subtractDays, addWeeks, subtractWeeks, addQuarters, subtractQuarters, addMonths, subtractMonths, addYears, subtractYears, startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear, isYesterday, isTomorrow, isToday, isLeapYear, getDaysInMonth, dateDiffInYears, dateDiffInMonths, dateDiffInDays } from 'justy';
```

## Convert utility Functions

This module provides utility functions for common conversions. The functions cover temperature, distance, weight, time, and currency conversions.

### `celsiusToFahrenheit(celsius: number): number`

Converts Celsius to Fahrenheit.

**Parameters:**

- `celsius` - The temperature in Celsius.

**Returns:**

- The temperature in Fahrenheit.

### `fahrenheitToCelsius(fahrenheit: number): number`

Converts Fahrenheit to Celsius.

**Parameters:**

- `fahrenheit` - The temperature in Fahrenheit.

**Returns:**

- The temperature in Celsius.

### `milesToKilometers(miles: number): number`

Converts miles to kilometers.

**Parameters:**

- `miles` - The distance in miles.

**Returns:**

- The distance in kilometers.

### `kilometersToMiles(kilometers: number): number`

Converts kilometers to miles.

**Parameters:**

- `kilometers` - The distance in kilometers.

**Returns:**

- The distance in miles.

### `poundsToKilograms(pounds: number): number`

Converts pounds to kilograms.

**Parameters:**

- `pounds` - The weight in pounds.

**Returns:**

- The weight in kilograms.

### `kilogramsToPounds(kilograms: number): number`

Converts kilograms to pounds.

**Parameters:**

- `kilograms` - The weight in kilograms.

**Returns:**

- The weight in pounds.

### `secondsToMinutes(seconds: number): number`

Converts seconds to minutes.

**Parameters:**

- `seconds` - The time in seconds.

**Returns:**

- The time in minutes.

### `minutesToSeconds(minutes: number): number`

Converts minutes to seconds.

**Parameters:**

- `minutes` - The time in minutes.

**Returns:**

- The time in seconds.

### `convertCurrency(amount: number, exchangeRate: number): number`

Converts currency from one to another based on an exchange rate.

**Parameters:**

- `amount` - The amount of currency to convert.
- `exchangeRate` - The exchange rate from the source to the target currency.

**Returns:**

- The converted amount of currency.

### `formatCurrency(amount: number, currencyCode: string, locale: string = 'en-US'): string`

Formats a currency value with a currency code and symbol.

**Parameters:**

- `amount` - The amount of currency.
- `currencyCode` - The currency code (e.g., 'USD', 'INR').
- `locale` - The locale for formatting (e.g., 'en-US', 'en-IN').

**Returns:**

- The formatted currency string.

### Usage of Convert utility functions

Import the functions into your project as needed:

```typescript
import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  milesToKilometers,
  kilometersToMiles,
  poundsToKilograms,
  kilogramsToPounds,
  secondsToMinutes,
  minutesToSeconds,
  convertCurrency,
  formatCurrency
} from 'justy';
```

## Array utility Functions

This module provides a variety of utility functions for common array operations. These functions include grouping, flattening, deduplication, and more.

### `groupBy<T, K extends string | number>(arr: T[], keyFn: (item: T) => K): { [key: string]: T[] }`

Groups elements of an array by a key or function.

**Parameters:**

- `arr` - The array to group.
- `keyFn` - A function that returns the key to group by.

**Returns:**

- An object where keys are the result of the key function and values are arrays of grouped items.

### `flatten<T>(arr: T[][]): T[]`

Flattens a nested array into a single-level array.

**Parameters:**

- `arr` - The array to flatten.

**Returns:**

- A new array with all nested arrays flattened.

### `unique<T>(arr: T[]): T[]`

Removes duplicate values from an array.

**Parameters:**

- `arr` - The array to deduplicate.

**Returns:**

- A new array with unique values.

### `intersection<T>(arr1: T[], arr2: T[]): T[]`

Finds common elements between two arrays.

**Parameters:**

- `arr1` - The first array.
- `arr2` - The second array.

**Returns:**

- An array of elements present in both arrays.

### `difference<T>(arr1: T[], arr2: T[]): T[]`

Finds elements that are in one array but not in another.

**Parameters:**

- `arr1` - The first array.
- `arr2` - The second array.

**Returns:**

- An array of elements present in the first array but not in the second.

### `shuffle<T>(arr: T[]): T[]`

Randomly shuffles the elements of an array.

**Parameters:**

- `arr` - The array to shuffle.

**Returns:**

- A new array with the elements shuffled.

### `partition<T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]]`

Partitions an array into groups based on a predicate function.

**Parameters:**

- `arr` - The array to partition.
- `predicate` - A function that determines the group for each element.

**Returns:**

- An array containing two arrays: the first with elements that satisfy the predicate, the second with elements that do not.

### `sortBy<T>(arr: T[], keyOrFn: keyof T | ((item: T) => any), ascending: boolean = true): T[]`

Sorts an array of objects based on a key or function.

**Parameters:**

- `arr` - The array to sort.
- `keyOrFn` - The key or function to sort by.
- `ascending` - Whether to sort in ascending order (default is true).

**Returns:**

- A new array sorted based on the key or function.

### `zip<T, U>(arr1: T[], arr2: U[]): [T, U][]`

Combines two arrays into a single array of pairs.

**Parameters:**

- `arr1` - The first array.
- `arr2` - The second array.

**Returns:**

- An array of pairs, where each pair is from the corresponding positions in the input arrays.

### `reduceBy<T, K extends string | number, V>(arr: T[], keyOrFn: keyof T | ((item: T) => K), reducer: (acc: V, item: T) => V, initialValue: V): { [key in K]: V }`

Reduces an array into a single value based on a key or function.

**Parameters:**

- `arr` - The array to reduce.
- `keyOrFn` - The key or function to group by.
- `reducer` - A function that reduces the values in each group.
- `initialValue` - The initial value for the reduction.

**Returns:**

- An object where keys are the result of the key or function and values are the reduced values.

### `chunk<T>(arr: T[], size: number): T[][]`

Groups elements of an array into chunks of a specified size.

**Parameters:**

- `arr` - The array to chunk.
- `size` - The size of each chunk.

**Returns:**

- An array of arrays, where each sub-array is a chunk of the original array.

### `findFirst<T>(arr: T[], predicate: (item: T) => boolean): T | undefined`

Finds the first element that matches the predicate function.

**Parameters:**

- `arr` - The array to search.
- `predicate` - A function that tests each element.

**Returns:**

- The first element that matches the predicate, or undefined if no match is found.

### `findLast<T>(arr: T[], predicate: (item: T) => boolean): T | undefined`

Finds the last element that matches the predicate function.

**Parameters:**

- `arr` - The array to search.
- `predicate` - A function that tests each element.

**Returns:**

- The last element that matches the predicate, or undefined if no match is found.

### `differenceBy<T, K>(arr1: T[], arr2: T[], keyFn: (item: T) => K): T[]`

Computes the difference between two arrays based on a key function.

**Parameters:**

- `arr1` - The first array.
- `arr2` - The second array.
- `keyFn` - A function that returns the key to compare.

**Returns:**

- An array of elements present in the first array but not in the second.

### `unionBy<T, K>(arr1: T[], arr2: T[], keyFn: (item: T) => K): T[]`

Finds the union of two arrays based on a key function.

**Parameters:**

- `arr1` - The first array.
- `arr2` - The second array.
- `keyFn` - A function that returns the key to compare.

**Returns:**

- An array of unique elements from both arrays.

### `symmetricDifferenceBy<T, K>(arr1: T[], arr2: T[], keyFn: (item: T) => K): T[]`

Computes the symmetric difference between two arrays based on a key function.

**Parameters:**

- `arr1` - The first array.
- `arr2` - The second array.
- `keyFn` - A function that returns the key to compare.

**Returns:**

- An array of elements that are in either array but not in both.

### `cartesianProduct<T>(...arrays: T[][]): T[][]`

Computes the Cartesian product of multiple arrays.

**Parameters:**

- `arrays` - The arrays to compute the Cartesian product of.

**Returns:**

- An array of all possible combinations of elements from the input arrays.

### `median(arr: number[]): number`

Computes the median value of a numeric array.

**Parameters:**

- `arr` - The array of numbers.

**Returns:**

- The median value.

### `compact<T>(arr: T[]): T[]`

Removes falsy values from an array.

**Parameters:**

- `arr` - The array to compact.

**Returns:**

- A new array without falsy values.

### `range(start: number, end: number, step: number = 1): number[]`

Creates an array of numbers within a specified range.

**Parameters:**

- `start` - The start of the range.
- `end` - The end of the range.
- `step` - The step between each number (default is 1).

**Returns:**

- An array of numbers within the specified range.

### Usage of Array utility functions

Import the functions into your project as needed:

```typescript
import {
  groupBy,
  flatten,
  unique,
  intersection,
  difference,
  shuffle,
  partition,
  sortBy,
  zip,
  reduceBy,
  chunk,
  findFirst,
  findLast,
  differenceBy,
  unionBy,
  symmetricDifferenceBy,
  cartesianProduct,
  median,
  compact,
  range
} from 'justy';
```

## Contributing

Feel free to fork this repository, create a new branch, and submit a pull request with your changes. We welcome contributions that improve the library and add new features.
