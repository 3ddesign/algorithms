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
  