// Leetcode: 1752. Check if Array Is Sorted and Rotated
/**
 * 1. Set variable breakpoint
 * 2. Loop from 0 to array length
 * 3. Check for every element in array, if nums[i] > nums[i + 1], breakpoint + 1
 * 4. For last element, check it with first element (rotation), if last element greater than first element, breakpoint + 1
 * 5. Return true if breakpoint 0 or 1, otherwise return false
 */
function check(nums) {
  let breakPoint = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1 && nums[i] > nums[0]) {
      breakPoint++;
    } else if (nums[i] > nums[i + 1]) {
      breakPoint++;
    }
  }

  if (breakPoint > 1) {
    return false;
  } else {
    return true;
  }
}

let array = [2, 1, 3, 4];
console.log(array);
console.log(check(array));
