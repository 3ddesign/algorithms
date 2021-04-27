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

function isEven(number) {
    return number % 2 === 0;
}

// One case: O(1)

console.log(isEven(2));