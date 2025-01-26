// Leetcode: 493. Reverse Pairs

/**
 * Brute force
 *
 * 1. Loop through the array
 * 2. For each element, loop through the rest of the array
 * 3. If the current element is greater than 2 times the next element, increment the counter
 * 4. Return the counter
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function reversePairsBruteForce(nums: number[]): number {
  let counter: number = 0;
  const n: number = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] > 2 * nums[j]) {
        counter++;
      }
    }
  }

  return counter;
}

console.log("Brute Force");
let arr11 = [1, 3, 2, 3, 1];
console.log("Array:", arr11, "| Reverse pairs:", reversePairsBruteForce(arr11));
arr11 = [2, 4, 3, 5, 1];
console.log("Array:", arr11, "| Reverse pairs:", reversePairsBruteForce(arr11));
console.log();

/**
 * Optimal solution | Merge Sort + Count
 *
 * A. Merge sort
 *    1. Define count
 *    2. If low >= high => return count
 *    3. Define mid
 *    4. Recursively call mergeSort for left sub array
 *    5. Recursively call mergeSort for right sub array
 *    6. Execute counting pairs before merge
 *    7. Merge left and right sub array
 *    8. Return count
 *
 * B. Count pairs
 *    1. Define count
 *    2. Define j = mid + 1
 *    3. Loop through left sub array
 *       - Loop through right sub array
 *         - If left > 2 * right => increment j
 *         - Increment count by j - (mid + 1)
 *    4. Return count
 *
 * C. Merge
 *    1. Define temp array
 *    2. Define left and right pointers
 *    3. Loop through left and right sub array
 *       - If left > right => push right to temp and increment right
 *       - Else push left to temp and increment left
 *    4. Add the rest of left sub array to temp
 *    5. Add the rest of right sub array to temp
 *    6. Copy temp to original array
 *
 * Time complexity: O(n log n)
 * Space complexity: O(n)
 */

function mergeSortB(nums: number[], low: number, high: number): number {
  let cnt = 0;

  if (low >= high) {
    return cnt;
  }

  const mid = Math.floor((low + high) / 2);

  /* Divide into left and right -> execute */
  cnt += mergeSortB(nums, low, mid);
  cnt += mergeSortB(nums, mid + 1, high);

  /* Execute counting pairs before merge */
  cnt += countPairs(nums, low, mid, high);

  mergeB(nums, low, mid, high);

  return cnt;
}

function countPairs(
  nums: number[],
  low: number,
  mid: number,
  high: number
): number {
  let cnt = 0;
  let j = mid + 1;

  for (let i = low; i <= mid; i++) {
    while (j <= high && nums[i] > 2 * nums[j]) {
      j++;
    }
    cnt += j - (mid + 1);
  }

  return cnt;
}

function mergeB(nums: number[], low: number, mid: number, high: number) {
  let temp: number[] = [];

  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (nums[left] > nums[right]) {
      temp.push(nums[right]);
      right++;
    } else {
      temp.push(nums[left]);
      left++;
    }
  }

  while (left <= mid) {
    temp.push(nums[left]);
    left++;
  }

  while (right <= high) {
    temp.push(nums[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    nums[i] = temp[i - low];
  }
}

function reversePairsOptimal(nums: number[]): number {
  return mergeSortB(nums, 0, nums.length - 1);
}

console.log("Optimal Solution | Merge Sort + Count");
arr11 = [1, 3, 2, 3, 1];
console.log("Array:", arr11, "| Reverse pairs:", reversePairsOptimal(arr11));
arr11 = [2, 4, 3, 5, 1];
console.log("Array:", arr11, "| Reverse pairs:", reversePairsOptimal(arr11));
console.log();
