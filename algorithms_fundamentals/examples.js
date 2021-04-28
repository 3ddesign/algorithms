/* Example 1 */

function getMin(numbers) {
    let currentMin = numbers[0];
    for (const num of numbers) {
        if (num < currentMin) {
            currentMin = num; // only 
        }
    }
    return currentMin;
}

console.log(getMin([1,2,2,3,43,21,2,0]))

// Best case: numbers = [1,2,3] => O(n)
// Worst case: numbers = [3,1,1] => O(n)
// Average case: numbers = [2,1,3] => O(n)


/* Example 2 */

function isEven(number) {
    return number % 2 === 0;
}

// One case: O(1)


console.log(isEven(2));

/* Example 3 */

function isPowerOfTwo(number) {
    if (number < 1) {
        return false;
    }
    let devidedNumber = number;
    while (devidedNumber !== 1) {
        if (devidedNumber % 2 !== 0) {
            return false;
        }
        devidedNumber = devidedNumber / 2;
    }
    return true;
} 

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
