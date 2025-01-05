/**
 * Iterative
 */
function reverseArray(arr, n) {
  const result = [];
  for (let i = n - 1; i >= 0; i--) {
    result[n - i - 1] = arr[i];
  }
  return result;
}

/**
 * Recursive two pointer
 */
function reverseArrayRecursive(arr, n) {
  reverse(arr, 0, n - 1);
  return arr;
}

function reverse(arr, l, r) {
  if (l < r) {
    // swap
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;

    reverse(arr, l + 1, r - 1);
  }
}

console.log(reverseArray([1, 2, 3, 4, 5], 5));
console.log(reverseArrayRecursive([1, 2, 3, 4, 5], 5));
