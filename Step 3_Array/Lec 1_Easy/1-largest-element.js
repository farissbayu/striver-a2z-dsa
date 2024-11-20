import { sort } from "./sort.js";
// GeekForGeeks: Largest element in array
/**
 * Brute force solution
 * 1. Sort the array (merge sort or quick sort)
 * 2. Get the last element
 *
 * Time complexity: O(N log N)
 */
function bruteForceLEA(arr) {
  let sortedArray = sort(arr, 0, arr.length - 1);
  return sortedArray[sortedArray.length - 1];
}

/**
 * Optimal solution
 * 1. Set arr[0] as max
 * 2. Compare max with every element in the array
 *
 * Time complexity: O(N)
 */
function optimalLEA(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(bruteForceLEA([1, 2, 3, 4, 1231, 4, 3, 12]));
console.log(optimalLEA([1, 2, 3, 4, 1231, 4, 3, 12]));
