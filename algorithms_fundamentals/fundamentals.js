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
