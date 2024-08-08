// json-fns.ts

/**
 * Deep clones a JSON object.
 * @param obj - The JSON object to clone.
 * @returns A deep clone of the JSON object.
 */
export function deepClone<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }
  
  /**
   * Converts a JSON object to a query string.
   * @param obj - The JSON object to convert.
   * @returns A query string representation of the JSON object.
   */
  export function jsonToQueryString(obj: Record<string, any>): string {
    return Object.keys(obj)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
      .join('&');
  }
  
  /**
   * Converts a query string to a JSON object.
   * @param queryString - The query string to convert.
   * @returns A JSON object representation of the query string.
   */
  export function queryStringToJson(queryString: string): Record<string, any> {
    return queryString
      .slice(1)
      .split('&')
      .reduce((acc: Record<string, any>, pair: string) => {
        const [key, value] = pair.split('=').map(decodeURIComponent);
        acc[key] = value;
        return acc;
      }, {});
  }
  
  /**
   * Checks if a JSON object is empty (has no keys).
   * @param obj - The JSON object to check.
   * @returns True if the JSON object is empty, false otherwise.
   */
  export function isEmpty(obj: Record<string, any>): boolean {
    return Object.keys(obj).length === 0;
  }
  
  /**
   * Flattens a nested JSON object.
   * @param obj - The JSON object to flatten.
   * @param prefix - The prefix for nested keys.
   * @returns A flattened JSON object.
   */
  export function flattenJson<T>(obj: T, prefix: string = ''): Record<string, any> {
    let items: Record<string, any> = {};
    for (const [key, value] of Object.entries(obj as Record<string, any>)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      if (value && typeof value === 'object' && !Array.isArray(value)) {
        Object.assign(items, flattenJson(value, newKey));
      } else {
        items[newKey] = value;
      }
    }
    return items;
  }
  
  /**
   * Un-flattens a JSON object.
   * @param obj - The flattened JSON object to un-flatten.
   * @returns A nested JSON object.
   */
  export function unFlattenJson<T>(obj: Record<string, any>): T {
    const result: any = {};
    for (const [key, value] of Object.entries(obj)) {
      const keys = key.split('.');
      keys.reduce((acc: any, part: string, index: number) => {
        if (index === keys.length - 1) {
          acc[part] = value;
        } else {
          if (!acc[part]) acc[part] = {};
          return acc[part];
        }
      }, result);
    }
    return result;
  }
  
 /**
 * Merges two JSON objects deeply.
 * @param obj1 - The first JSON object.
 * @param obj2 - The second JSON object.
 * @returns A new JSON object with merged properties.
 */
export function deepMergeJson<T>(obj1: T, obj2: T): T {
    // Use a type assertion to specify that result is of type T
    const result = { ...obj1 } as Record<string, any>;
  
    for (const key in obj2) {
      if (Object.prototype.hasOwnProperty.call(obj2, key)) {
        // Type assertion to avoid TypeScript errors with object properties
        const value = obj2[key as keyof typeof obj2];
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          // Recursively merge nested objects
          result[key as keyof typeof result] = deepMergeJson(result[key as keyof typeof result] || ({} as Record<string, any>), value);
        } else {
          // Directly assign non-object values
          result[key as keyof typeof result] = value;
        }
      }
    }
  
    return result as T;
  }
  
  
  /**
   * Converts a JSON object to a formatted string.
   * @param obj - The JSON object to format.
   * @param indent - The number of spaces to use for indentation (default is 2).
   * @returns A formatted JSON string.
   */
  export function prettyPrintJson(obj: Record<string, any>, indent: number = 2): string {
    return JSON.stringify(obj, null, indent);
  }
  
  /**
   * Parses a JSON string safely, with error handling.
   * @param jsonString - The JSON string to parse.
   * @returns The parsed JSON object or null if parsing fails.
   */
  export function safeParseJson<T>(jsonString: string): T | null {
    try {
      return JSON.parse(jsonString) as T;
    } catch {
      return null;
    }
  }
  
  /**
   * Gets the difference between two JSON objects.
   * @param obj1 - The first JSON object.
   * @param obj2 - The second JSON object.
   * @returns An object representing the difference between the two objects.
   */
  export function getJsonDifference(obj1: Record<string, any>, obj2: Record<string, any>): Record<string, any> {
    const diff: Record<string, any> = {};
  
    function compareObjects(o1: Record<string, any>, o2: Record<string, any>, basePath: string = '') {
      for (const key in o1) {
        if (o1.hasOwnProperty(key)) {
          const path = basePath ? `${basePath}.${key}` : key;
          if (!o2.hasOwnProperty(key)) {
            diff[path] = o1[key];
          } else if (typeof o1[key] === 'object' && o1[key] !== null && !Array.isArray(o1[key])) {
            compareObjects(o1[key], o2[key], path);
          } else if (o1[key] !== o2[key]) {
            diff[path] = o1[key];
          }
        }
      }
    }
  
    compareObjects(obj1, obj2);
    return diff;
  }
  
  /**
   * Gets the common keys between two JSON objects.
   * @param obj1 - The first JSON object.
   * @param obj2 - The second JSON object.
   * @returns An array of keys that are present in both objects.
   */
  export function getCommonKeys(obj1: Record<string, any>, obj2: Record<string, any>): string[] {
    return Object.keys(obj1).filter(key => obj2.hasOwnProperty(key));
  }
  
  /**
   * Converts a JSON array to a CSV string.
   * @param obj - The JSON array to convert.
   * @returns A CSV string representation of the JSON array.
   */
  export function jsonToCsv(obj: Record<string, any>[]): string {
    if (obj.length === 0) return '';
  
    const headers = Object.keys(obj[0]);
    const csvRows = [
      headers.join(','), // header row
      ...obj.map(row => headers.map(fieldName => JSON.stringify(row[fieldName], (key, value) => value === null ? '' : value)).join(','))
    ];
  
    return csvRows.join('\n');
  }
  