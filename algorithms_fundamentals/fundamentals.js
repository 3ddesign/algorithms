// Measuring performance example (linear time complexity) 0(n): 

let start = 0;
let end = 0;

function sum(number) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        result = result + i;
    }

    return result;
}
  
start = performance.now();
sum(1);
end = performance.now();
console.log(end - start);

// The same solution but with math formula (constant time complexity) 0(1): 

let start = 0;
let end = 0;

function sum(number) {
    return (number / 2) * (1 + number);
}
  
start = performance.now();
sum(1);
end = performance.now();
console.log(end - start);


//Example of counting Time Complexity  

// function sumNumbers(numbers) {
//   return numbers[0] + numbers[1] + numbers[2]; // O(1)
// }

// // numbers = [1, 3, 10, 50]
// function sumNumbers(numbers) {
//     let result = 0; // 1
//     for (const number of numbers) { // 1
//       console.log('...'); // 4x
//       result += number; // 4 => n
//     }
//     return result; // 1
//     // return numbers.reduce((sum, curNum) => sum + curNum, 0);
//   }
  
//   // T = 1 + 1 + 1 + n + n = 3 + 2n = 3 + 2*n
//   // T = 2*n
//   // T = n => O(n) => Linear Time Complexity
  
//   console.log(sumNumbers([1, 3, 10, 50]));