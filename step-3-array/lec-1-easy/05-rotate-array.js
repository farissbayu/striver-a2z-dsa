// Leetcode: 189. Rotate Array

// Solution 1
function rotate(nums, k) {
  const n = k % nums.length;

  if (n === 0) {
    return nums;
  }

  const leftArr = nums.slice(nums.length - n);
  const rightArr = nums.slice(0, nums.length - n);

  nums.splice(0, nums.length, ...leftArr, ...rightArr);

  return nums;
}

function rotateWithReverse(arr, k) {
  const d = k % arr.length;

  const reverse = (start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  reverse(0, arr.length - 1);
  reverse(0, d - 1);
  reverse(d, arr.length - 1);

  return arr;
}

console.log(rotate([1, 2], 5));
console.log(rotate([-1, -100, 3, 99], 2));
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateWithReverse([1, 2], 5));
console.log(rotateWithReverse([-1, -100, 3, 99], 2));
console.log(rotateWithReverse([1, 2, 3, 4, 5, 6, 7], 3));
