/**
 * Time complexity
 *
 * (n (n + 1)) / 2
 * equal to n^2
 *
 * O(n^2)
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

/**
 * Time complexity.
 *
 * (n * (n + 1)) / 2
 * equal to n^2
 *
 * O(n^2) -> average and worst case
 * O(n) -> best case: array is on correct order
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    // optimization
    let didSwap = false;

    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        didSwap = true;
      }
    }

    if (!didSwap) break;
  }

  return arr;
}

/**
 * Time complexity
 *
 * (n * (n + 1)) / 2
 * equal to n^2
 *
 * O(n^2) -> average and worst case
 * O(n) -> best case: array is on correct order
 */
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j > 0 && arr[j - 1] > arr[j]) {
      [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      j--;
    }
  }

  return arr;
}

function main() {
  console.log("- Ascending | Sorting Part 1 -");

  console.log("Selection sort | O(N^2)");
  console.log(selectionSort([5, 4, 3, 2, 1]));
  console.log(selectionSort([13, 46, 24, 52, 20, 9]));
  console.log(selectionSort([1, 2, 3, 1, 3, 2, 12]));

  console.log("Bubble sort | O(N) - O(N^2)");
  console.log(bubbleSort([5, 4, 3, 2, 1]));
  console.log(bubbleSort([13, 46, 24, 52, 20, 9]));
  console.log(bubbleSort([1, 2, 3, 1, 3, 2, 12]));

  console.log("Insertion sort | ");
  console.log(insertionSort([5, 4, 3, 2, 1]));
  console.log(insertionSort([13, 46, 24, 52, 20, 9]));
  console.log(insertionSort([1, 2, 3, 1, 3, 2, 12]));
}

main();
