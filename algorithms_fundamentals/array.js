/* Example 1: The Cartesian Product Algorithm */

function cartProduct(setA, setB) {
    const product = [];
    
    for (let setAElemet of setA) {
        if (!Array.isArray(setAElemet)) {
            setAElemet = [setAElemet];
        }

        for (const setBElemet of setB) {
            product.push([...setAElemet, setBElemet]);
        }
    }

    return product;
}

function cartesian(...sets) {
    let tempProduct = sets[0];

    for (let i = 1; i < sets.length; i++) {
        tempProduct = cartProduct(tempProduct, sets[i])
    }
}

const colors = ['blue', 'red'];
const sizes = ['m', 'l'];
const styles = ['round neck', 'v neck'];
console.log(cartProduct(colors, sizes));
console.log(cartesian(colors, sizes, styles));

// Time Complexity: O(n^x)
// Space Complexity: O(n^x)