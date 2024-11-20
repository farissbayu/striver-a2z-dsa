// Optimal solution
function largestElement(arr) {
  if (arr.length === 0) return "empty array";
  if (arr.length === 1) return arr[0];

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

function secondSmallestLargest(arr) {
  let smallest = arr[0];
  let largest = arr[0];

  let secondSmallest = Number.MAX_VALUE;
  let secondLargest = Number.MIN_VALUE;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }

    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] > smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondLargest === Number.MIN_VALUE && secondSmallest === Number.MAX_VALUE)
    return [-1, -1];
  return [secondSmallest, secondLargest];
}

function main() {
  console.log("- Array Problem Easy -\n");

  console.log("Largest element in array");
  console.log("Array: ", [2, 5, 1, 3, 0]);
  console.log("Max: ", largestElement([2, 5, 1, 3, 0]));
  console.log("Array: ", [8, 10, 5, 7, 9]);
  console.log("Max: ", largestElement([8, 10, 5, 7, 9]));

  console.log("Second smallest and second largest element in array");
  console.log("Array: ", [1, 2, 4, 7, 7, 5]);
  console.log(
    "Second smallest: ",
    secondSmallestLargest([1, 2, 4, 7, 7, 5])[0]
  );
  console.log("Second largest: ", secondSmallestLargest([1, 2, 4, 7, 7, 5])[1]);
  console.log("Array: ", [1, 1]);
  console.log("Second smallest: ", secondSmallestLargest([1, 1])[0]);
  console.log("Second largest: ", secondSmallestLargest([1, 1])[1]);
}

main();
