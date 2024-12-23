// Leetcode: 1. Two Sum

/**
 * Brute force solution
 *
 * 1. Loop through the array (i | outer loop)
 * 2. Loop through the array (j | inner loop)
 * 3. If arr[i] + arr[j] === k, return [i, j]
 * 4. If no match, return [-1]
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function twoSumBruteForce(arr, k) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === k) {
        return [i, j];
      }
    }
  }

  return [-1];
}

console.log("Brute force solution");

let array = [2, 7, 11, 15];
let k = 9;
console.log(
  "Array:",
  array,
  "| Target sum:",
  k,
  "| Indices:",
  twoSumBruteForce(array, k)
);

array = [3, 2, 4];
k = 6;
console.log(
  "Array:",
  array,
  "| Target sum:",
  k,
  "| Indices:",
  twoSumBruteForce(array, k)
);

array = [3, 3];
k = 6;
console.log(
  "Array:",
  array,
  "| Target sum:",
  k,
  "| Indices:",
  twoSumBruteForce(array, k)
);

console.log();

/**
 *
 * Better solution | Hashmap
 *
 * 1. Create a hashmap to store the value and index | same to array
 * 2. Loop through the array
 * 3. Check if the hashmap has the remaining value of the target by subtract k with the current value
 * 4. If it has, return the indices of the current value and the remaining value
 * 5. If it doesn't have, add the current value and index to the hashmap
 * 6. If no match, return [-1]
 *
 * Time complexity: O(n) | Linear time
 * Space complexity: O(n) | Linear space
 */

function twoSumHashmap(arr, k) {
  const hashmap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (hashmap.has(k - arr[i])) {
      return [hashmap.get(k - arr[i]), i];
    }

    hashmap.set(arr[i], i);
  }

  return [-1];
}

console.log("Hashmap solution");

array = [2, 7, 11, 15];
k = 9;
console.log(
  "Array:",
  array,
  "| Target sum:",
  k,
  "| Indices:",
  twoSumHashmap(array, k)
);

array = [3, 2, 4];
k = 6;
console.log(
  "Array:",
  array,
  "| Target sum:",
  k,
  "| Indices:",
  twoSumHashmap(array, k)
);

array = [3, 3];
k = 6;
console.log(
  "Array:",
  array,
  "| Target sum:",
  k,
  "| Indices:",
  twoSumHashmap(array, k)
);

console.log();

/**
 * Optimal solution | Two pointers
 */

/**
 * Two pointer solution
 * Note: This approach is not optimal for this problem because:
 * 1. Sorting changes the original indices
 * 2. indexOf() might return wrong index for duplicate values
 * 3. The hashmap solution is actually better for this specific problem
 *
 * Time complexity: O(nlogn) due to sorting
 * Space complexity: O(n) due to creating sorted array
 */
function twoSumOptimal(arr, k) {
  let left = 0;
  let right = arr.length - 1;
  let sortedArr = arr.slice().sort((a, b) => a - b);

  while (left < right) {
    let sum = sortedArr[left] + sortedArr[right];
    if (sum === k) {
      // Handle duplicate values by finding last occurrence when needed
      let leftIndex = arr.indexOf(sortedArr[left]);
      let rightIndex = arr.lastIndexOf(sortedArr[right]);
      return leftIndex === rightIndex ? [-1] : [leftIndex, rightIndex];
    }
    if (sum < k) {
      left++;
    } else {
      right--;
    }
  }
  return [-1];
}

console.log("Optimal solution");

array = [2, 7, 11, 15];
k = 9;
console.log(
  "Array:",
  array,
  "| Target sum:",
  k,
  "| Indices:",
  twoSumOptimal(array, k)
);

array = [3, 2, 4];
k = 6;
console.log(
  "Array:",
  array,
  "| Target sum:",
  k,
  "| Indices:",
  twoSumOptimal(array, k)
);

array = [3, 3];
k = 6;
console.log(
  "Array:",
  array,
  "| Target sum:",
  k,
  "| Indices:",
  twoSumOptimal(array, k)
);
