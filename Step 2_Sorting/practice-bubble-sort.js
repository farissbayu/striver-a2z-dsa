// GeekForGeeks: Bubble Sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let didSwap = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        didSwap = true;
      }
    }

    if (!didSwap) break;
  }
  return arr;
}

console.log(bubbleSort([4, 1, 3, 9, 7]));
console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(bubbleSort([1, 2, 3, 4, 5]));
