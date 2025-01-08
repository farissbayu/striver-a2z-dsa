// Leetcode: 560. Subarray Sum Equals K

/**
 * Brute force
 *
 * 1. Define a counter
 * 2. Loop through the array | outer loop
 * 3. Loop through the array | inner loop
 * 4. Loop through the array | inner loop l
 *    - Calculate the sum of the subarray from i to j
 * 5. If the sum equals k, increment the counter
 * 6. Return the counter
 *
 * Time complexity: O(n^3)
 * Space complexity: O(1)
 */
function subarraySumEqualsKBruteForce(nums: number[], k: number): number {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let sum = 0;
      for (let l = i; l <= j; l++) {
        sum += nums[l];
      }
      if (sum === k) {
        counter++;
      }
    }
  }

  return counter;
}

console.log("Brute force");
let array11 = [1, 1, 1];
let k2 = 2;
console.log(
  "Array:",
  array11,
  "| k:",
  k2,
  "| Subarray sum equals k:",
  subarraySumEqualsKBruteForce(array11, k2)
);
array11 = [1, 2, 3];
k2 = 3;
console.log(
  "Array:",
  array11,
  "| k:",
  k2,
  "| Subarray sum equals k:",
  subarraySumEqualsKBruteForce(array11, k2)
);
console.log();

/**
 * Better solution
 *
 * 1. Define a counter
 * 2. Loop through the array | outer loop
 * 3. Loop through the array | inner loop
 *    - Calculate the sum of the subarray from i to j
 *    - If the sum equals k, increment the counter
 * 4. Return the counter
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function subarraySumEqualsKBetter(nums: number[], k: number): number {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        counter++;
      }
    }
  }

  return counter;
}

console.log("Better solution");
array11 = [1, 1, 1];
k2 = 2;
console.log(
  "Array:",
  array11,
  "| k:",
  k2,
  "| Subarray sum equals k:",
  subarraySumEqualsKBetter(array11, k2)
);
array11 = [1, 2, 3];
k2 = 3;
console.log(
  "Array:",
  array11,
  "| k:",
  k2,
  "| Subarray sum equals k:",
  subarraySumEqualsKBetter(array11, k2)
);
console.log();

/**
 * Optimal solution | Prefix sum
 *
 * 1. Initialize a counter, sum, and a map
 * 2. Initialize the map with 0: 1
 * 3. Loop through the array
 * 4. Calculate the sum
 * 5. If the map has the sum - k
 *    - Increase the counter by the value of the map[sum - k]
 * 6. Update the map with the sum
 * 7. Return the counter
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function subarraySumEqualsKOptimal(nums: number[], k: number): number {
  let counter = 0;
  let sum = 0;
  let map = new Map<number, number>();

  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (map.has(sum - k)) {
      counter += map.get(sum - k)!;
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return counter;
}

console.log("Optimal solution | Prefix sum");
array11 = [1, 1, 1];
k2 = 2;
console.log(
  "Array:",
  array11,
  "| k:",
  k2,
  "| Subarray sum equals k:",
  subarraySumEqualsKOptimal(array11, k2)
);
array11 = [1, 2, 3];
k2 = 3;
console.log(
  "Array:",
  array11,
  "| k:",
  k2,
  "| Subarray sum equals k:",
  subarraySumEqualsKOptimal(array11, k2)
);
array11 = [1, 2, 1, 2, -1, -1, 3];
k2 = 3;
console.log(
  "Array:",
  array11,
  "| k:",
  k2,
  "| Subarray sum equals k:",
  subarraySumEqualsKOptimal(array11, k2)
);
console.log();
