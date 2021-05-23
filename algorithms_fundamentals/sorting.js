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
// Space complexity: 0(1)

/* Example 2: Quicksort */

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

// Recursive step runtime: O(n^logb(a)) => O(n^log(2)) => O(n^1) => O(n)
// Runtime outside: O(n)
// Algorithm runtime: O(n^logb(a) * log n) => O(n * log n)
// Space complexity: 0(n)

console.log(quicksort([3, 9, -3, 20, 1, 33]));


/* Example 3: Megre Sort */

function mergeSort(array) {

    if (array.length < 2) {
        return array;
    } 

    if (array.length === 2) {
        return array[0] > array[1] ? [array[1], array[0]] : array;
    }

    const middle = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middle);
    const rightArray = array.slice(middle);

    const leftSortedArray = mergeSort(leftArray);
    const rightSortedArray = mergeSort(rightArray);

    const mergedArray = [];
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    while (leftArrayIndex < rightArrayIndex.length ||
           rightArrayIndex < rightSortedArray.length) { 

            if (leftArrayIndex >= leftSortedArray.length ||
                leftSortedArray[leftArrayIndex] > rightSortedArray[rightArrayIndex]) {
                mergedArray.push(rightSortedArray[rightArrayIndex]);
                rightArrayIndex++;
            } else {
                mergedArray.push(leftSortedArray[leftArrayIndex]);
                leftArrayIndex++;
            }
    }    

    return mergedArray;
}

// Recursive step TC: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
// TC outside of the recursion: O(n)
// Algorithm runtime: O(n^logb(2) * log n) => O(n * log n)
// Space complexity: 0(n)

console.log(mergeSort([3, 9, -3, 20, 1, 33]));