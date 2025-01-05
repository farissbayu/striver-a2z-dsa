// GeekForGeeks: Selection Sort
function select(arr, i) {
  let min = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[min] > arr[j]) {
      min = j;
    }
  }
  return min;
}

function selectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    const index = select(arr, i);
    if (i != index) [arr[i], arr[index]] = [arr[index], arr[i]];
  }
  return arr;
}

console.log(selectionSort([4, 1, 3, 9, 7], 5));
console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 10));
