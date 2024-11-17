/**
 * function for doing divide and merge
 * using recursive
 *
 * Time complexity
 * n * log n
 */
function mergeSort(arr, low, high) {
  if (low >= high) {
    return;
  }

  let mid = Math.floor((low + high) / 2);

  mergeSort(arr, low, mid); // left sub array
  mergeSort(arr, mid + 1, high); // right sub array
  merge(arr, low, mid, high); // do merge

  return arr;
}

/**
 * merge divided array
 * merge and sort it into sub array
 */
function merge(arr, low, mid, high) {
  let temp = [];

  let left = low; // pointer for left sub array
  let right = mid + 1; // pointer for right sub array

  /**
   * loop until one of sub array
   * is done added to temporary array
   */
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++; // shift left pointer 1 step
    } else {
      temp.push(arr[right]);
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
}

/**
 *
 */
function recursiveBubbleSort(arr, start, end) {
  if (end === 0) return;

  for (let i = start; i < end; i++) {
    if (arr[i] >= arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }

  recursiveBubbleSort(arr, start, end - 1);

  return arr;
}

function main() {
  console.log("- Sorting II -");

  console.log("Merge sort | O(N log N)");
  console.log(mergeSort([4, 1, 3, 9, 7], 0, 4));
  console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 9));
  console.log(mergeSort([1, 3, 2], 0, 2));

  console.log("Recursive bubble sort | O(N^2)");
  console.log(recursiveBubbleSort([4, 1, 3, 9, 7], 0, 4));
  console.log(recursiveBubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 9));
  console.log(recursiveBubbleSort([1, 3, 2], 0, 2));
}

main();
