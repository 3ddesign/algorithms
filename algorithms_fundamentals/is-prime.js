function fib(n) {
    const number = [1, 1];
    for (let i = 2; i < n + 1;i ++) {
        number.push(number[i - 2] + number[i - 1]); 
    }

    return number[n];
}

console.log(fib(5));


// Example fib() with recursion (+ dynamic programming):

function fibRec(n, memo) {
    let result;
    if (memo[n]) {
        return memo[n];
    }

    if (n === 0 || n === 1) {
        return 1;
    } else {
        result = fibRec(n - 1, memo) + fibRec(n - 2, memo);
    }
    memo[n] = result;
    return result;
}

// TC: O(1)


console.log(fibRec(5, {}));




function isPrime(number) {
    for (let i = 2; i < Math.sqrt(number) ; i++ ) {
        console.log('iteration')
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Best case: number = 1 OR number = 2; it will be 0(1)
// Average case: 0(n) (Improved: 0(sqrt(n)))
// Worst case: number = 1,000,0..; it will be 0(n) (Improved with Math.sqrt, it will be 0(sqrt(n)))

console.log(isPrime(5));
console.log(isPrime(9));