/* Example 1: Knapsack Problem solution */

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
    { name: 'a', value: 3, weight: 3},
    { name: 'b', value: 6, weight: 8},
    { name: 'c', value: 9, weight: 3},
  ];
  
  console.log(getPermutations(todoListItems));