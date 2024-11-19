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

/**
 *
 */
function recursiveInsertionSort(arr, i, n) {
  if (i > n) return arr;

  let j = i;
  while (j > 0 && arr[j - 1] > arr[j]) {
    [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    j--;
  }

  return recursiveInsertionSort(arr, i + 1, n);
}

function quickSort(arr, low, high) {
  // make sure subarray size in more than 1
  if (low < high) {
    let pIndex = partition(arr, low, high); // find index that pivot should be
    quickSort(arr, low, pIndex - 1); // do quick sort for left sub array
    quickSort(arr, pIndex + 1, high); // do quick sort for right sub array
  }

  return arr;
}

function partition(arr, low, high) {
  /**
   * pivot for divide array into left and right
   * left should be less or same with pivot
   * right should be more than pivot
   */
  const pivot = arr[low];
  let i = low; // left pointer
  let j = high; // right pointer

  // do looping until j cross i
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[i], arr[j]];
    }
  }

  // put pivot in the correct place
  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
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

  console.log("Recursive insertion sort | O(N^2)");
  console.log(recursiveInsertionSort([4, 1, 3, 9, 7], 0, 4));
  console.log(recursiveInsertionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 9));
  console.log(recursiveInsertionSort([1, 3, 2], 0, 2));

  console.log("Quick sort | O(N log N)");
  console.log(quickSort([4, 1, 3, 9, 7], 0, 4));
  console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 9));
  console.log(quickSort([1, 3, 2], 0, 2));
}

main();
