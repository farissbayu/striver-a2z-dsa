// GeekForGeeks: Bubble sort
function bubbleSort(arr) {
  let arrLength = arr.length;

  let didSwap = false;

  for (let i = 0; i < arrLength - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      didSwap = true;
    }
  }

  if (!didSwap) return arr;

  return bubbleSort(arr);
}

console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
/**
 * do recursion until no more element swapped
 */
