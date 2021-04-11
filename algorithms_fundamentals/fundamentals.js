// Measuring performance example: 

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