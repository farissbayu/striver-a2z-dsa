// GeekForGeeks: Insertion Sort
function insert(arr, i) {
  let j = i;
  while (j > 0 && arr[j - 1] > arr[j]) {
    [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    j--;
  }
}

function insertionSort(arr, n) {
  for (let i = 0; i < n; i++) {
    insert(arr, i);
  }

  return arr;
}

console.log(insertionSort([4, 1, 3, 9, 7], 5));
console.log(insertionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10));
