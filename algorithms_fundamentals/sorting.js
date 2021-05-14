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