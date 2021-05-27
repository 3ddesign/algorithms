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


// Permutations without Repetitions:
function getPermutations(options) {
    const permutations = [];
  
    if (options.length === 1) {
      return [options];
    }
  
    const partialPermutations = getPermutations(options.slice(1));
  
    console.log(partialPermutations);
  
    const firstOption = options[0];
  
    for (let i = 0; i < partialPermutations.length; i++) {
      const partialPermutation = partialPermutations[i];
  
      for (let j = 0; j <= partialPermutation.length; j++) {
        const permutationInFront = partialPermutation.slice(0, j);
        const permutationAfter = partialPermutation.slice(j);
        permutations.push(
          permutationInFront.concat([firstOption], permutationAfter)
        );
      }
    }
  
    return permutations;
  }
  
  const todoListItems = [
    'walk the dog',
    'clean the toilet',
    'buy groceries',
    'order food',
    'do homework'
  ];
  
  console.log(getPermutations(todoListItems));
  