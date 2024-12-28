// Leetcode: 53. Maximum Subarray

/**
 * Brute force solution
 *
 * 1. Loop through the array (i)
 * 2. Loop through the array (j)
 * 3. Loop through the array (k)
 * 4. Calculate the sum of the subarray from i to j | inner loop k
 * 5. Update the maximum sum
 * 6. Return the maximum sum
 *
 * Time complexity: O(n^3)
 * Space complexity: O(1)
 */
function maxSubarraySumBruteForce(arr) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

console.log("Brute force solution");

let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(
  "Array:",
  array,
  "| Maximum subarray sum:",
  maxSubarraySumBruteForce(array)
);
array = [1];
console.log(
  "Array:",
  array,
  "| Maximum subarray sum:",
  maxSubarraySumBruteForce(array)
);
console.log();

/**
 * Better solution | Prefix sum
 *
 * 1. Loop through the array (i)
 * 2. Loop through the array (j)
 * 3. Calculate the sum of the subarray from i to j
 * 4. Update the maximum sum
 * 5. Return the maximum sum
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function maxSubarraySumBetter(arr) {
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
}

console.log("Better solution | Prefix sum");
array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(
  "Array:",
  array,
  "| Maximum subarray sum:",
  maxSubarraySumBetter(array)
);
array = [1];
console.log(
  "Array:",
  array,
  "| Maximum subarray sum:",
  maxSubarraySumBetter(array)
);
console.log();

/**
 * Optimal solution | Kadane's algorithm
 *
 * 1. Initialize maxSum to the smallest possible number and sum to 0
 * 2. Loop through the array
 * 3. Add the current element to sum
 * 4. If sum is greater than maxSum, update maxSum
 * 5. If sum is less than 0, reset sum to 0
 * 6. Return maxSum
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function maxSubarraySumKadane(arr) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let sum = 0;
  let start = -1,
    startIndex = -1,
    endIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (sum === 0) {
      start = i;
    }

    sum += arr[i];

    if (sum > maxSum) {
      maxSum = sum;
      startIndex = start;
      endIndex = i;
    }

    if (sum < 0) {
      sum = 0;
    }
  }

  console.log("Subarray: ", arr.slice(startIndex, endIndex + 1));
  return maxSum;
}

console.log("Optimal solution | Kadane's algorithm");
array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(
  "Array:",
  array,
  "| Maximum subarray sum:",
  maxSubarraySumKadane(array)
);
array = [1];
console.log(
  "Array:",
  array,
  "| Maximum subarray sum:",
  maxSubarraySumKadane(array)
);
console.log();
