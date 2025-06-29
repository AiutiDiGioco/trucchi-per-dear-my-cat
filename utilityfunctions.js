/**
 * utilityFunctions - Common Utility Functions Collection
 * Author: AiutiDiGioco
 * License: Custom
 */

const utilityFunctions = {
    /**
     * Generates a random integer between min and max (inclusive).
     * @param {number} min - Minimum value.
     * @param {number} max - Maximum value.
     * @returns {number}
     */
    randomInt(min, max) {
        if (typeof min !== 'number' || typeof max !== 'number' || min > max) {
            console.error('[utilityFunctions] Invalid parameters for randomInt.');
            return NaN;
        }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    /**
     * Capitalizes the first letter of a string.
     * @param {string} str - The string to capitalize.
     * @returns {string}
     */
    capitalize(str) {
        if (typeof str !== 'string' || str.length === 0) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    /**
     * Checks if a given value is a valid number.
     * @param {any} value - The value to check.
     * @returns {boolean}
     */
    isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }
};

// Example usage:
// console.log(utilityFunctions.randomInt(1, 10)); // Random integer between 1 and 10
// console.log(utilityFunctions.capitalize('hello')); // 'Hello'
// console.log(utilityFunctions.isNumber(42)); // true

module.exports = utilityFunctions;
