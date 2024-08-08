// convert-fns.ts

/**
 * Converts Celsius to Fahrenheit.
 * @param celsius - The temperature in Celsius.
 * @returns The temperature in Fahrenheit.
 */
export function celsiusToFahrenheit(celsius: number): number {
    return (celsius * 9/5) + 32;
  }
  
  /**
   * Converts Fahrenheit to Celsius.
   * @param fahrenheit - The temperature in Fahrenheit.
   * @returns The temperature in Celsius.
   */
  export function fahrenheitToCelsius(fahrenheit: number): number {
    return (fahrenheit - 32) * 5/9;
  }
  
  /**
   * Converts miles to kilometers.
   * @param miles - The distance in miles.
   * @returns The distance in kilometers.
   */
  export function milesToKilometers(miles: number): number {
    return miles * 1.60934;
  }
  
  /**
   * Converts kilometers to miles.
   * @param kilometers - The distance in kilometers.
   * @returns The distance in miles.
   */
  export function kilometersToMiles(kilometers: number): number {
    return kilometers / 1.60934;
  }
  
  /**
   * Converts pounds to kilograms.
   * @param pounds - The weight in pounds.
   * @returns The weight in kilograms.
   */
  export function poundsToKilograms(pounds: number): number {
    return pounds * 0.453592;
  }
  
  /**
   * Converts kilograms to pounds.
   * @param kilograms - The weight in kilograms.
   * @returns The weight in pounds.
   */
  export function kilogramsToPounds(kilograms: number): number {
    return kilograms / 0.453592;
  }
  
  /**
   * Converts seconds to minutes.
   * @param seconds - The time in seconds.
   * @returns The time in minutes.
   */
  export function secondsToMinutes(seconds: number): number {
    return seconds / 60;
  }
  
  /**
   * Converts minutes to seconds.
   * @param minutes - The time in minutes.
   * @returns The time in seconds.
   */
  export function minutesToSeconds(minutes: number): number {
    return minutes * 60;
  }
  
  /**
   * Converts currency from one to another based on an exchange rate.
   * @param amount - The amount of currency to convert.
   * @param exchangeRate - The exchange rate from the source to the target currency.
   * @returns The converted amount of currency.
   */
  export function convertCurrency(amount: number, exchangeRate: number): number {
    return amount * exchangeRate;
  }
  
  /**
   * Formats a currency value with a currency code and symbol.
   * @param amount - The amount of currency.
   * @param currencyCode - The currency code (e.g., 'USD', 'INR').
   * @param locale - The locale for formatting (e.g., 'en-US', 'en-IN').
   * @returns The formatted currency string.
   */
  export function formatCurrency(amount: number, currencyCode: string, locale: string = 'en-US'): string {
    const options: Intl.NumberFormatOptions = {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    };
  
    return new Intl.NumberFormat(locale, options).format(amount);
  }
  