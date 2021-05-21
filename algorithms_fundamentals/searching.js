/* Example 1: Linear search */

function findElement(array, element, comparatorFunction) {
    let index = 0;

    for (const item of array) {
      if (
        typeof element === 'object' &&
        element !== null &&
        comparatorFunction(element, item)
      ) {
        return index;
      }
      if (item === element) {
        return index;
      }
      index++;
    }
  }
  
  const arr = [4, -5, 5, 9];
  
  console.log(findElement(arr, 2));
  console.log(findElement(arr, 33));
  
  const objects = [
    { name: 'Max', age: 31 },
    { name: 'Dmitry', age: 32 },
  ];
  
  console.log(
    findElement(objects, { name: 'Dmitry', age: 32 }, function (element, item) {
      return element.name === item.name;
    })
  );
  
// Best case TC: O(1)
// Average case TC: O(n)
// Worst case TC: O(n)
// Space complexity: 0(1)


/* Example 1: Binary search */

function findElementBinary(sortedArray, element) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

    if (element === sortedArray[middleIndex]) {
      return middleIndex;
    }

    if (sortedArray[middleIndex] < element) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }
}

const arr = [1, 5, 9, 13, 99, 100];

console.log(findElement(arr, 9));

// Best case: O(1)
// Worst case: O(log n)
// Average case: O(log n)
// Space complexity: 0(1)

/* Example 1: Binary search with recusion */

function findElementBinaryWithRecustion(sortedArray, element, offset) {
  // O(1):
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

    const middleIndex = Math.floor((endIndex - startIndex) / 2);

    if (element === sortedArray[middleIndex]) {
      return middleIndex + offset;
    }

    if (sortedArray[middleIndex] < element) {
      startIndex = middleIndex + 1;
      offset = offset + middleIndex + 1;
    } else {
      endIndex = middleIndex;
    }
    // O(1):
    return findElementBinaryWithRecustion(sortedArray.slice(startIndex, endIndex + 1), element, offset);
}

// a = 1
// b = 2
// O(n^logb a) =>  O(n^log2 1) => O(1)
// Overall TC:  O(n^logb a * log n) => O(1 * log n) => O(log n)

const arr2 = [1, 5, 9, 13, 99, 100];

console.log(findElementBinaryWithRecustion(arr2, 99, 0));
