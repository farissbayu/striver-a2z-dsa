// GeekForGeeks: Sorted Array Search
function searchInSorted(arr, k) {
  // your code here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) {
      return true;
    }
  }
  return false;
}

console.log("Array: ", [1, 2, 3, 4, 6], " k: ", 6);
console.log(searchInSorted([1, 2, 3, 4, 6], 6));
console.log("Array: ", [1, 2, 4, 5, 6], " k: ", 3);
console.log(searchInSorted([1, 2, 4, 5, 6], 3));
