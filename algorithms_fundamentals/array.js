/* Example 1: The Cartesian Product Algorithm */

function cartProduct(setA, setB) {
    const product = [];
    
    for (const setAElemet of setA) {
        for (const setBElemet of setB) {
            product.push([setAElemet, setBElemet]);
        }
    }

    return product;
}

const colors = ['blue', 'red'];
const sizes = ['m', 'l'];
console.log(cartProduct(colors, sizes));