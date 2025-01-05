// Leetcode: 485. Max Consecutive Ones

/**
 * Find max consecutive ones in an array
 * traverse through the array and keep track of the count of consecutive ones
 */
function findMaxConsecutiveOnes(arr) {
  let counter = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      counter++;
      if (max < counter) {
        max = counter;
      }
    } else {
      counter = 0;
    }
  }
  return max;
}

let array = [1, 1, 0, 1, 1, 1];
console.log(
  "Array:",
  array,
  "| Max consecutive ones:",
  findMaxConsecutiveOnes(array)
);
