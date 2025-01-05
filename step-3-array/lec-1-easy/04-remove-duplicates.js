// Leetcode: 26. Remove Duplicates from Sorted Array

// Brute force solution
function removeDuplicates(nums) {
  let cur = nums[0];
  let i = 1;

  while (i < nums.length) {
    if (nums[i] === cur) {
      nums.splice(i, 1);
    } else {
      cur = nums[i];
      i++;
    }
  }

  return nums;
}

/**
 * Optimal solution
 * using 2 pointer
 */
function removeDuplicatesOptimal(nums) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      nums[i + 1] = nums[j];
      i++;
    }
  }

  return nums.splice(0, i + 1);
}

const nums = Array(100000).fill(1).concat(2, 3, 4);
console.log(nums);
console.log(removeDuplicates(nums));
console.log(removeDuplicatesOptimal(nums));
