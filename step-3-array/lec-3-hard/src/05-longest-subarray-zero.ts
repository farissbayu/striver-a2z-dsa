// GeekForGeeks: Largest subarray with 0 sum

/**
 * Brute force
 *
 * 1. Initialize max = 0 | to store maximum length of subarray with zero sum
 * 2. Iterate the array from 0 to n - 1
 *    - Initialize sum = 0
 *    - Iterate the array from i to n - 1
 *      - Add the element to sum
 *      - If sum === 0
 *        - Update max = Math.max(max, j - i + 1)
 * 3. Return max
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function longestSubarrayZeroSumBruteForce(arr: number[]): number {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === 0) {
        max = Math.max(max, j - i + 1);
      }
    }
  }

  return max;
}

console.log("Brute force");
let arr4 = [15, -2, 2, -8, 1, 7, 10, 23];
console.log("Array:", arr4);
console.log(
  "Longest subarray with zero sum:",
  longestSubarrayZeroSumBruteForce(arr4)
);
arr4 = [1, 2, 3];
console.log("Array:", arr4);
console.log(
  "Longest subarray with zero sum:",
  longestSubarrayZeroSumBruteForce(arr4)
);
arr4 = [1, 0, 3];
console.log("Array:", arr4);
console.log(
  "Longest subarray with zero sum:",
  longestSubarrayZeroSumBruteForce(arr4)
);
console.log();

/**
 * Optimal solution | Hash map
 *
 * 1. Initialize map = new Map<number, number>() | to store sum and index
 * 2. Initialize max = 0 | to store maximum length of subarray with zero sum
 * 3. Initialize sum = 0
 * 4. Iterate the array from 0 to n - 1
 *    - Add the element to sum
 *    - If sum === 0
 *      - Update max = i + 1
 *    - Else
 *      - If map has sum
 *        - Update max = Math.max(max, i - map.get(sum))
 *      - Else
 *        - Set sum and index to map
 * 5. Return max
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function longestSubarrayZeroSumOptimal(arr: number[]): number {
  const map = new Map<number, number>();
  let max = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum === 0) {
      max = i + 1;
    } else {
      if (map.has(sum)) {
        max = Math.max(max, i - map.get(sum)!);
      } else {
        map.set(sum, i);
      }
    }
  }

  return max;
}

console.log("Optimal solution | Hash map");
arr4 = [15, -2, 2, -8, 1, 7, 10, 23];
console.log("Array:", arr4);
console.log(
  "Longest subarray with zero sum:",
  longestSubarrayZeroSumOptimal(arr4)
);
arr4 = [1, 2, 3];
console.log("Array:", arr4);
console.log(
  "Longest subarray with zero sum:",
  longestSubarrayZeroSumOptimal(arr4)
);
arr4 = [1, 0, 3];
console.log("Array:", arr4);
console.log(
  "Longest subarray with zero sum:",
  longestSubarrayZeroSumOptimal(arr4)
);
console.log();
