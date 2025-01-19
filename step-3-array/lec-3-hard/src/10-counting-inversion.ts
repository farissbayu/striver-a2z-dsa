// GeekForGeeks: Counting Inversions

/**
 * Brute force
 *
 * 1. Define counter
 * 2. For loop 0 to N
 *    - For loop i + 1 to N
 *      - If arr[i] > arr[j] => increment counter
 * 3. Return counter
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function countingInversionsBruteForce(arr: number[]): number {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        counter++;
      }
    }
  }

  return counter;
}

console.log("Brute Force");
let arr10 = [2, 4, 1, 3, 5];
console.log(
  "Array:",
  arr10,
  "| Inversions:",
  countingInversionsBruteForce(arr10)
);
arr10 = [2, 3, 4, 5, 6];
console.log(
  "Array:",
  arr10,
  "| Inversions:",
  countingInversionsBruteForce(arr10)
);
console.log();

/**
 * Optimal solution | Merge Sort + Count
 *
 * Intuition:
 * Using merge sort to count inversions
 * Count the number of inversions while doing merge
 *
 * 1. Define mergeSort function
 *    - If low >= high => return 0
 *    - Define mid
 *    - Recursively call mergeSort for left sub array
 *    - Recursively call mergeSort for right sub array
 *    - Recursively call merge for left and right sub array
 *    - Return count
 * 2. Define merge function
 *    - Define temp array
 *    - Define left and right pointer
 *    - Loop until one of sub array is done added to temporary array
 *      - If left element is smaller than right element => push left element to temp
 *      - If right element is smaller than left element => push right element to temp
 *    - Add the rest of sub array into temporary array
 *    - Copy temporary array to original array
 *    - Return count
 * 3. Return count
 *
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
function countingInversionsOptimal(arr: number[]): number {
  const n = arr.length;
  return mergeSort(arr, 0, n - 1);
}

function mergeSort(arr: number[], low: number, high: number): number {
  let cnt = 0;
  if (low >= high) {
    return cnt;
  }

  let mid = Math.floor((low + high) / 2);

  cnt += mergeSort(arr, low, mid); // left sub array
  cnt += mergeSort(arr, mid + 1, high); // right sub array
  cnt += merge(arr, low, mid, high); // do merge

  return cnt;
}

function merge(arr: number[], low: number, mid: number, high: number): number {
  let temp = [];

  let left = low; // pointer for left sub array
  let right = mid + 1; // pointer for right sub array

  /**
   * loop until one of sub array
   * is done added to temporary array
   */
  let cnt = 0;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++; // shift left pointer 1 step
    }
    // right is smaller (arr[left] > arr[right])
    else {
      temp.push(arr[right]);
      cnt += mid - left + 1; // count inversions
      right++; // shift right pointer 1 step
    }
  }

  // add the rest of sub array into temporary array
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }

  return cnt;
}

console.log("Optimal solution | Merge Sort + Count");
arr10 = [2, 4, 1, 3, 5];
console.log("Array:", arr10, "| Inversions:", countingInversionsOptimal(arr10));
arr10 = [2, 3, 4, 5, 6];
console.log("Array:", arr10, "| Inversions:", countingInversionsOptimal(arr10));
console.log();
