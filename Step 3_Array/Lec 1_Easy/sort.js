// quick sort
export function sort(arr, low, high) {
  if (low < high) {
    let pIndex = partition(arr, low, high);
    sort(arr, low, pIndex - 1);
    sort(arr, pIndex + 1, high);
  }

  return arr;
}

function partition(arr, low, high) {
  const pivot = arr[low];
  let i = low;
  let j = high;

  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i++;
    }

    while (arr[j] > pivot && j >= low + 1) {
      j--;
    }

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  [arr[low], arr[j]] = [arr[j], arr[low]];
  return j;
}
