/* Example 1: Buble sorting */

function bubleSort(array) {
    const result = [...array];

    for (let outer = 0; outer < result.length; outer++) {
        let outerElement = result[outer];

        for (let inner = outer + 1; inner < result.length; inner++) {
         let innerElement = result[inner];

         if (outerElement > innerElement) {
                result[outer] = innerElement;
                result[inner] = outerElement;

                outerElement = result[outer];
                innerElement = result[inner];
            }
        }
    }

    return result;
}

console.log(bubleSort([3, 9, -3, 20, 1, 33]));

// Best case: O(n)
// Average case: O(n^2)
// Worst case: O(n^2)

/* Example 1: Quicksort */

function quicksort(array) {
    const copiedArray = [...array];

    if (copiedArray.length <= 1) {
        return copiedArray;
    }

    const smallerElemetsArray = [];
    const biggerElemetsArray = [];
    const pivotElement = copiedArray.shift();
    const centerElemetsArray = [pivotElement];

    while (copiedArray.length) {
        const currentElement = copiedArray.shift();
        if (currentElement === pivotElement) {
            centerElemetsArray.push(currentElement);
        } else if (currentElement < pivotElement) {
            smallerElemetsArray.push(currentElement);
        } else {
            biggerElemetsArray.push(currentElement);
        }
    }

    const smallerElementsSortedArray = quicksort(smallerElemetsArray);
    const biggerElementsSortedArray = quicksort(biggerElemetsArray);

    return smallerElementsSortedArray.concat(centerElemetsArray, biggerElementsSortedArray);
}



console.log(quicksort([3, 9, -3, 20, 1, 33]));
