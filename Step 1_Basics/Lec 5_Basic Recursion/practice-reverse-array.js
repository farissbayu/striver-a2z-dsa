// GeekForGeeks
function reverseArray(arr) {
  reverse(arr, 0, arr.length - 1);
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

console.log(reverseArray([1, 2, 3, 4, 5]));
