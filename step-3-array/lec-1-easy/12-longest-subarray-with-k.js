// GeekForGeeks: Longest Sub-Array with Sum K

/**
 * Brute force solution
 *
 * 1. Generate all of subarrays
 * 2. Calculate the sum of each subarray
 * 3. If the sum is equal to k, compare it with the current result then break
 * 4. if the sum is more than k, break
 * 5. Return the result
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function longestSubarrayWithKBruteForce(arr, k) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === k) {
        result = Math.max(result, j - i + 1);
      }
    }
  }

  return result;
}

console.log("Brute force solution");

let array = [2, 3, 5];
let k = 5;
console.log(
  "Array:",
  array,
  "| Longest subarray with k:",
  longestSubarrayWithKBruteForce(array, k)
);

array = [2, 3, 5, 1, 9];
k = 10;
console.log(
  "Array:",
  array,
  "| Longest subarray with k:",
  longestSubarrayWithKBruteForce(array, k)
);

array = [10, 5, 2, 7, 1, 9];
k = 15;
console.log(
  "Array:",
  array,
  "| Longest subarray with k:",
  longestSubarrayWithKBruteForce(array, k)
);

array = [2, 0, 0, 3];
k = 3;
console.log(
  "Array:",
  array,
  "| Longest subarray with k:",
  longestSubarrayWithKBruteForce(array, k)
);

console.log();

console.log("Better solution | Hashmap");

/**
 * Better solution | Hashmap
 *
 * 1. Initialize variables: sum = 0, maxLen = 0, and a Map to store prefix sums
 * 2. Iterate through the array and add each element to sum
 * 3. If sum equals k, update maxLen to current index + 1
 * 4. Calculate remaining = sum - k
 * 5. If remaining exists in map, find length between current index and stored index
 * 6. Update maxLen if new length is greater
 * 7. Store current sum in map if not already present
 * 8. Return maxLen
 *
 * Time complexity: O(n) - single pass through array
 * Space complexity: O(n) - for storing prefix sums in map
 */
function longestSubarrayWithKHashMap(arr, k) {
  let sum = 0;
  let maxLen = 0;
  let prefixSumMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) {
      maxLen = i + 1;
    }

    const remaining = sum - k;
    if (prefixSumMap.has(remaining)) {
      const len = i - prefixSumMap.get(remaining);
      maxLen = Math.max(maxLen, len);
    }

    if (!prefixSumMap.has(sum)) {
      prefixSumMap.set(sum, i);
    }
  }

  return maxLen;
}

let array2 = [2, 3, 5];
let k2 = 5;
console.log(
  "Array:",
  array2,
  "| Longest subarray with k :",
  longestSubarrayWithKHashMap(array2, k2)
);

array2 = [2, 3, 5, 1, 9];
k2 = 10;
console.log(
  "Array:",
  array2,
  "| Longest subarray with k :",
  longestSubarrayWithKHashMap(array2, k2)
);

array2 = [10, 5, 2, 7, 1, 9];
k2 = 15;
console.log(
  "Array:",
  array2,
  "| Longest subarray with k :",
  longestSubarrayWithKHashMap(array2, k2)
);

array2 = [2, 0, 0, 3];
k2 = 3;
console.log(
  "Array:",
  array2,
  "| Longest subarray with k :",
  longestSubarrayWithKHashMap(array2, k2)
);

console.log();

console.log("Optimal solution | Two pointers greedy approach");

/**
 * Optimal solution | Two pointers greedy approach (Positive only)
 *
 * 1. Initialize two pointers i and j at the start, sum as first element, maxLen as 0
 * 2. While j pointer hasn't reached end of array:
 *    - If sum > k, subtract arr[i] from sum and increment i
 *    - If sum equals k, update maxLen if current window is larger
 *    - Increment j and add next element to sum
 * 3. Return maxLen
 *
 * Time complexity: O(n) - each element is processed at most twice
 * Space complexity: O(1) - only uses constant extra space
 */
function longestSubarrayWithKOptimal(arr, k) {
  let i = 0;
  let j = 0;
  let sum = arr[0];
  let n = arr.length;
  let maxLen = 0;

  while (j < n) {
    // Move i forward if sum is greater than k and i is less than j (subarray)
    while (i <= j && sum > k) {
      sum -= arr[i]; // Subtract sum with element at i
      i++; // Move i forward
    }

    // Find the max length subarray
    if (sum === k) {
      maxLen = Math.max(maxLen, j - i + 1);
    }

    // Move j forward
    j++;
    if (j < n) {
      sum += arr[j];
    }
  }

  return maxLen;
}

let array3 = [2, 3, 5];
let k3 = 5;
console.log(
  "Array:",
  array3,
  "| Longest subarray with k :",
  longestSubarrayWithKOptimal(array3, k3)
);

array3 = [2, 3, 5, 1, 9];
k3 = 10;
console.log(
  "Array:",
  array3,
  "| Longest subarray with k :",
  longestSubarrayWithKOptimal(array3, k3)
);

array3 = [10, 5, 2, 7, 1, 9];
k3 = 15;
console.log(
  "Array:",
  array3,
  "| Longest subarray with k :",
  longestSubarrayWithKOptimal(array3, k3)
);

array3 = [2, 0, 0, 3];
k3 = 3;
console.log(
  "Array:",
  array3,
  "| Longest subarray with k :",
  longestSubarrayWithKOptimal(array3, k3)
);

console.log();
