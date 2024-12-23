// Leetcode: 75. Sort Colors
/*
    Given an array nums with n objects colored red, white, or blue, 
    sort them in-place so that objects of the same color are adjacent,
    with the colors in the order red, white, and blue.
    We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
    You must solve this problem without using the library's sort function.
*/

/**
 *
 * Brute force solution | Bubble sort
 *
 * 1. Loop through the array (i | outer loop)
 * 2. Loop through the array (j | inner loop) | for each i iteration, j will be smaller subarray
 * 3. If arr[j] > arr[j + 1], swap the elements
 * 4. Return the sorted array
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function sortColorsBruteForce(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log("Brute force solution | Bubble sort");

let array = [2, 0, 2, 1, 1, 0];
console.log("Array:", array, "| Sorted array:", sortColorsBruteForce(array));

array = [2, 0, 1];
console.log("Array:", array, "| Sorted array:", sortColorsBruteForce(array));

console.log();

/**
 * Better solution | Counting sort
 *
 * 1. Make three variable to store the count of 0, 1, and 2
 * 2. Loop through the array to count the number of 0, 1, and 2
 * 3. Loop through the array to replace the elements with 0, 1, and 2 based on the counter
 * 4. Return the sorted array
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function sortColorsCountingSort(arr) {
  let countZero = 0;
  let countOne = 0;
  let countTwo = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      countZero++;
    } else if (arr[i] === 1) {
      countOne++;
    } else {
      countTwo++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (i < countZero) {
      arr[i] = 0;
    } else if (i < countZero + countOne) {
      arr[i] = 1;
    } else {
      arr[i] = 2;
    }
  }

  return arr;
}

console.log("Better solution | Counting sort");

array = [2, 0, 2, 1, 1, 0];
console.log("Array:", array, "| Sorted array:", sortColorsCountingSort(array));

array = [2, 0, 1];
console.log("Array:", array, "| Sorted array:", sortColorsCountingSort(array));

console.log();

/**
 * Optimal solution | Dutch National Flag Algorithm
 *
 * 1. Make three pointers low, mid, and high
 * 2. Loop through the array until mid is passed high or mid > high | while(mid <= high)
 * 3. Check the condition:
 *    - If arr[mid] is 0, swap(arr[mid], arr[low]), increment low and mid
 *    - If arr[mid] is 1, increment mid
 *    - If arr[mid] is 2, swap(arr[mid], arr[high]), decrement high
 * 4. Return the sorted array
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function sortColorsDutchNationalFlag(arr) {
  const n = arr.length;

  let low = 0;
  let mid = 0;
  let high = n - 1;

  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  return arr;
}

console.log("Optimal solution | Dutch National Flag Algorithm");

array = [2, 0, 2, 1, 1, 0];
console.log(
  "Array:",
  array,
  "| Sorted array:",
  sortColorsDutchNationalFlag(array)
);

array = [2, 0, 1];
console.log(
  "Array:",
  array,
  "| Sorted array:",
  sortColorsDutchNationalFlag(array)
);

console.log();
