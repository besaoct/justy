// object-fns.ts

/**
 * Merges multiple objects into one, with later objects overwriting earlier ones.
 * @param objects - The objects to merge.
 * @returns A new object with combined properties.
 */
export function merge<T extends object>(...objects: T[]): T {
    return Object.assign({}, ...objects);
  }
  
  /**
   * Flattens a nested object into a single level object with dot notation for nested keys.
   * @param obj - The nested object to flatten.
   * @param prefix - The prefix for the current level (used internally for recursion).
   * @returns A flattened object with dot notation keys.
   */
  export function flattenObject<T extends object>(obj: T, prefix: string = ''): Record<string, any> {
    const result: Record<string, any> = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        const newKey = prefix ? `${prefix}.${key}` : key;
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
          Object.assign(result, flattenObject(value, newKey));
        } else {
          result[newKey] = value;
        }
      }
    }
    return result;
  }
  
  /**
   * UnFlattens a dot notation object into a nested object.
   * @param obj - The flattened object with dot notation keys.
   * @returns The nested object.
   */
  export function unFlattenObject(obj: Record<string, any>): Record<string, any> {
    const result: Record<string, any> = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        const keys = key.split('.');
        keys.reduce((acc: any, part: string, index: number) => {
          if (index === keys.length - 1) {
            acc[part] = value;
          } else {
            if (!acc[part]) acc[part] = {};
          }
          return acc[part];
        }, result);
      }
    }
    return result;
  }
  
  /**
   * Deeply merges multiple objects into one, with later objects overwriting earlier ones.
   * @param objects - The objects to merge.
   * @returns A new object with combined properties.
   */
  export function deepMerge<T extends object>(...objects: T[]): T {
    const mergeDeep = (target: any, source: any) => {
      for (const key in source) {
        if (source.hasOwnProperty(key)) {
          if (typeof source[key] === 'object' && !Array.isArray(source[key]) && source[key] !== null) {
            if (!target[key]) target[key] = {};
            mergeDeep(target[key], source[key]);
          } else {
            target[key] = source[key];
          }
        }
      }
    };
    return objects.reduce((acc, obj) => {
      mergeDeep(acc, obj);
      return acc;
    }, {} as T);
  }
  
  /**
   * Gets the value of a deeply nested property in an object.
   * @param obj - The object to search.
   * @param path - An array of strings representing the path to the property.
   * @returns The value of the nested property or undefined if not found.
   */
  export function getNestedValue<T>(obj: any, path: string[]): T | undefined {
    return path.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, obj);
  }
  
  /**
   * Sets a deeply nested property in an object.
   * @param obj - The object to modify.
   * @param path - An array of strings representing the path to the property.
   * @param value - The value to set.
   * @returns The modified object.
   */
  export function setNestedValue(obj: any, path: string[], value: any): any {
    path.reduce((acc, key, index) => {
      if (index === path.length - 1) {
        acc[key] = value;
      } else {
        if (!acc[key]) acc[key] = {};
      }
      return acc[key];
    }, obj);
    return obj;
  }
  
  /**
   * Removes a property from an object based on a key or path.
   * @param obj - The object to modify.
   * @param path - An array of strings representing the path to the property or a single key.
   * @returns The modified object.
   */
  export function removeProperty(obj: any, path: string[]): any {
    if (path.length === 0) return obj;
    const lastKey = path.pop();
    const target = path.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, obj);
    if (target && lastKey) {
      delete target[lastKey];
    }
    return obj;
  }
  

  /**
 * Creates an object that behaves like an array and also has object properties.
 * @param entries - An array of entries where each entry is a tuple [key, value].
 * @param properties - An object containing additional properties to add to the resulting object.
 * @returns An object that behaves like an array with the given entries and properties.
 */
export function objectArray<T>(
    entries: [number, T][],
    properties: Record<string, any> = {}
  ): Record<number, T> & Record<string, any> {
    const result: Record<number, T> & Record<string, any> = {} as any;
  
    // Set the array-like properties
    entries.forEach(([key, value]) => {
      result[key] = value;
    });
  
    // Add additional properties
    Object.assign(result, properties);
  
    // Set the length property
    result['length'] = entries.length;
  
    // Define an array-like length property
    Object.defineProperty(result, 'length', {
      value: entries.length,
      enumerable: false,
      configurable: false,
      writable: false,
    });
  
    return result;
  }
  

/**
 * Creates a new object by omitting specific properties from the original object.
 * @param obj - The original object.
 * @param keys - The keys to omit.
 * @returns A new object without the specified properties.
 */
export function omit<T extends Record<string, any>, K extends keyof T>(
    obj: T,
    keys: K[]
  ): Omit<T, K> {
    const result = { ...obj };
    keys.forEach((key) => {
      delete result[key];
    });
    return result;
  }
  

  /**
 * Creates a new object by picking specific properties from the original object.
 * @param obj - The original object.
 * @param keys - The keys to pick.
 * @returns A new object with only the specified properties.
 */
export function pick<T extends Record<string, any>, K extends keyof T>(
    obj: T,
    keys: K[]
  ): Pick<T, K> {
    const result: Partial<T> = {};
    keys.forEach((key) => {
      if (key in obj) {
        result[key] = obj[key];
      }
    });
    return result as Pick<T, K>;
  }
  

