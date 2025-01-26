// Leetcode: 152. Maximum Product Subarray

/**
 * Brute force
 *
 * Three loop, then calculate product of subarray from k to j
 *
 * 1. Define result = Number.MIN_SAFE_INTEGER
 * 2. Loop through the array
 *    - Loop through the array from i + 1 to n
 *      - Define product = 1
 *      - Loop through the array from i to j
 *        - Multiply product with nums[k]
 *      - Update result = Math.max(result, product)
 * 3. Return result
 *
 * Time complexity: O(n^3)
 * Space complexity: O(1)
 *
 */
function maxProductBruteForce(nums: number[]): number {
  let result = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let product = 1;
      for (let k = i; k <= j; k++) {
        product *= nums[k];
      }
      result = Math.max(result, product);
    }
  }

  return result;
}

console.log("Brute force");
let arr12 = [2, 3, -2, 4];
console.log(
  "Array:",
  arr12,
  "| Maximum product subarray:",
  maxProductBruteForce(arr12)
);
arr12 = [-2, 0, -1];
console.log(
  "Array:",
  arr12,
  "| Maximum product subarray:",
  maxProductBruteForce(arr12)
);
console.log();

/**
 * Better solution
 *
 * 1. Define result = Number.MIN_SAFE_INTEGER
 * 2. Loop through the array
 *    - Define product = 1
 *    - Loop through the array from i to n
 *      - Multiply product with nums[j]
 *      - Update result = Math.max(result, product)
 * 3. Return result
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function maxProductBetter(nums: number[]): number {
  let result = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = i; j < nums.length; j++) {
      product *= nums[j];
      result = Math.max(result, product);
    }
  }

  return result;
}

console.log("Better solution");
arr12 = [2, 3, -2, 4];
console.log(
  "Array:",
  arr12,
  "| Maximum product subarray:",
  maxProductBetter(arr12)
);
arr12 = [-2, 0, -1];
console.log(
  "Array:",
  arr12,
  "| Maximum product subarray:",
  maxProductBetter(arr12)
);
console.log();

/**
 * Optimal solution
 *
 * Intuition:
 * 1. If array only contains positive numbers -> result = product of all numbers
 * 2. If array contains even negative numbers -> result = product of all numbers
 * 3. If array contains odd negative numbers -> result = product of all numbers except one
 * 4. If array contains zero -> result will be 0, so reset the product and try to find new subarray
 *
 * 1. Define result = Number.MIN_SAFE_INTEGER
 * 2. Define pre = 1
 * 3. Define suf = 1
 * 4. Loop through the array
 *    - If pre === 0 => pre = 1
 *    - If suf === 0 => suf = 1
 *    - Multiply pre with nums[i]
 *    - Multiply suf with nums[n - 1 - i]
 *    - Update result = Math.max(result, pre, suf)
 * 5. Return result
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 *
 */
function maxProductOptimal(nums: number[]): number {
  let result = Number.MIN_SAFE_INTEGER;
  let pre = 1;
  let suf = 1;

  for (let i = 0; i < nums.length; i++) {
    if (pre === 0) {
      pre = 1;
    }
    if (suf === 0) {
      suf = 1;
    }

    pre *= nums[i];
    suf *= nums[nums.length - 1 - i];

    result = Math.max(result, pre, suf);
  }

  return result;
}

console.log("Optimal solution");
arr12 = [2, 3, -2, 4];
console.log(
  "Array:",
  arr12,
  "| Maximum product subarray:",
  maxProductOptimal(arr12)
);
arr12 = [-2, 0, -1];
console.log(
  "Array:",
  arr12,
  "| Maximum product subarray:",
  maxProductOptimal(arr12)
);
console.log();
