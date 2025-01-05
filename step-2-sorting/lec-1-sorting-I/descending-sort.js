function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[maxIndex] < arr[j]) {
        maxIndex = j;
      }
    }

    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
  }

  return arr;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let didSwap = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        didSwap = true;
      }
    }

    if (!didSwap) break;
  }

  return arr;
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] < arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }

  return arr;
}

function main() {
  console.log("- Descending | Sorting Part 1 -");

  console.log("Selection sort | O(N^2)");
  console.log(selectionSort([5, 4, 3, 2, 1, 7]));
  console.log(selectionSort([13, 46, 24, 52, 20, 9]));
  console.log(selectionSort([1, 2, 3, 1, 3, 2, 12]));

  console.log("Bubble sort | O(N) - O(N^2)");
  console.log(bubbleSort([5, 4, 3, 2, 1, 7]));
  console.log(bubbleSort([13, 46, 24, 52, 20, 9]));
  console.log(bubbleSort([1, 2, 3, 1, 3, 2, 12]));

  console.log("Insertion sort | ");
  console.log(insertionSort([5, 4, 3, 2, 1, 7]));
  console.log(insertionSort([13, 46, 24, 52, 20, 9]));
  console.log(insertionSort([1, 2, 3, 1, 3, 2, 12]));
}

main();
