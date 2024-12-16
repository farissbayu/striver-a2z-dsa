// GeekForGeeks: Second Largest

import { sort } from "./sort.js";
/**
 * Brute force solution
 * 1. Sort the array (merge sort or quick sort)
 * 2. Get the largest element, arr[n - 1]
 * 3. Set secondLargest as -1
 * 4. Loop from n - 2 until 0, find arr[i] that smaller than largest, and break
 *
 * Time complexity: O(N log N + N)
 */
function bruteForceSL(arr) {
  const sortedArray = sort(arr, 0, arr.length - 1); // O (N log N)
  const largest = sortedArray[arr.length - 1]; // O(1)

  let secondLargest = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    // O(N)
    if (arr[i] < largest) {
      secondLargest = arr[i];
      break;
    }
  }

  return secondLargest;
}

/**
 * Better solution
 * 1. Find largest by traverse the array
 * 2. Set secondLargest as min_value of integer
 * 3. Traverse through the array
 * 4. Set secondLargest = arr[i] if arr[i] larger than secondLargest and arr[i] is less than largest
 * 5. If secondLargest equal to min_value then return -1, it means there is no second largest
 *
 * Time complexity: O(2N)
 */
function betterSolutionSL(arr) {
  let largest = arr[0];

  // O(N)
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  let secondLargest = Number.MIN_VALUE;

  // O(N)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  if (secondLargest === Number.MIN_VALUE) return -1;

  return secondLargest;
}

/**
 * Optimal solution
 * 1. Set largest as arr[0] and secondLargest as min_value
 * 2. Loop from 1 to arr.length
 * 3. If current element is larger than largest, set the secondLargest to largest and set the largest to current element
 * 4. Else if current element is smaller than largest but larger than secondLargest, set the secondLargest to current element
 * 5. If secondLargest equal to min_value then return -1, it means there is no second largest
 *
 * Time complexity: O(N)
 */
function optimalSL(arr) {
  let largest = arr[0];
  let secondLargest = Number.MIN_VALUE;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }

  if (secondLargest === Number.MIN_VALUE) return -1;
  return secondLargest;
}

console.log("- Brute force solution-");
console.log(
  "Array: ",
  [1, 2, 3, 4, 5, 7, 7, 1],
  ", second largest: ",
  bruteForceSL([1, 2, 3, 4, 5, 7, 7, 1])
);
console.log("Array: ", [1, 1], ", second largest: ", bruteForceSL([1, 1]));
console.log();

console.log("- Better solution -");
console.log(
  "Array: ",
  [1, 2, 3, 4, 5, 7, 7, 1],
  ", second largest: ",
  betterSolutionSL([1, 2, 3, 4, 5, 7, 7, 1])
);
console.log("Array: ", [1, 1], ", second largest: ", betterSolutionSL([1, 1]));
console.log();

console.log("- Optimal solution -");
console.log(
  "Array: ",
  [1, 2, 3, 4, 5, 7, 7, 1],
  ", second largest: ",
  optimalSL([1, 2, 3, 4, 5, 7, 7, 1])
);
console.log("Array: ", [1, 1], ", second largest: ", optimalSL([1, 1]));
console.log(
  "Array: ",
  [12, 35, 1, 10, 34, 1],
  ", second largest: ",
  optimalSL([12, 35, 1, 10, 34, 1])
);
console.log();
