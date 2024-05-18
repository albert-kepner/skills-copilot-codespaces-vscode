const calculateNumbers = require('./skills'); // adjust the path to your skills.js file

describe('calculateNumbers', () => {
    test('should return true for relatively prime numbers', () => {
        expect(calculateNumbers(13, 27)).toBe(true);
    });

    test('should return false for numbers that are not relatively prime', () => {
        expect(calculateNumbers(12, 18)).toBe(false);
    });

    test('should return true for 1 and any number', () => {
        expect(calculateNumbers(1, 100)).toBe(true);
    });

    test('should return false for 0 and any number', () => {
        expect(calculateNumbers(0, 100)).toBe(false);
    });
});