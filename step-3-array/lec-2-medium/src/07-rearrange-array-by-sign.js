// Leetcode: 2149. Rearrange Array Elements by Sign

/**
 * Brute force solution
 *
 * 1. Define two arrays: positive and negative
 * 2. Loop through the array
 * 3. Add positive and negative elements to their respective arrays
 * 4. Loop through the array
 * 5. Rearrange the array by sign
 * 6. Return the rearranged array
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function rearrangeArrayBySignBruteForce(arr) {
  let positive = [];
  let negative = [];
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      negative.push(arr[i]);
    } else {
      positive.push(arr[i]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      arr[i] = positive[i / 2];
    } else {
      arr[i] = negative[(i - 1) / 2];
    }
  }

  return arr;
}

console.log("Brute force solution");
let array = [3, 1, -2, -5, 2, -4];
console.log(
  "Array:",
  array,
  "| Rearranged array by sign:",
  rearrangeArrayBySignBruteForce(array)
);
array = [-1, 1];
console.log(
  "Array:",
  array,
  "| Rearranged array by sign:",
  rearrangeArrayBySignBruteForce(array)
);
console.log();

/**
 * Optimal solution
 *
 * 1. Initialize the posIndex = 0 and negIndex = 1
 * 2. Init result array
 * 3. Loop through the array
 * 4. Add positive elements to the result array if current element is positive -> increment posIndex by 2
 * 5. Add negative elements to the result array if current element is negative -> increment negIndex by 2
 * 6. Return the result array
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function rearrangeArrayBySignOptimal(arr) {
  let n = arr.length;

  let posIndex = 0;
  let negIndex = 1;
  let result = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      result[posIndex] = arr[i];
      posIndex += 2;
    } else {
      result[negIndex] = arr[i];
      negIndex += 2;
    }
  }

  return result;
}

console.log("Optimal solution");
array = [3, 1, -2, -5, 2, -4];
console.log(
  "Array:",
  array,
  "| Rearranged array by sign:",
  rearrangeArrayBySignOptimal(array)
);
array = [-1, 1];
console.log(
  "Array:",
  array,
  "| Rearranged array by sign:",
  rearrangeArrayBySignOptimal(array)
);
console.log();
