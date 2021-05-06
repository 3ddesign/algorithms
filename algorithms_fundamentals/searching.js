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
  
// Best case: O(1)
// Average case: O(n)
// Worst case: O(n)


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