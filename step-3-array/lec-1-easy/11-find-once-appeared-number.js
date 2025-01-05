// Leetcode: 136. Single Number

/**
 * First solution
 *
 * Using object to store the count of each number
 * Use it like hash map
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function findTheNumberThatAppearsOnce(arr) {
  let i = 0;
  const counter = {};
  while (i < arr.length) {
    counter[arr[i]] = counter[arr[i]] ? counter[arr[i]] + 1 : 1;
    i++;
  }

  return Number(Object.keys(counter).find((key) => counter[key] === 1));
}

/**
 * Optimal solution
 *
 * Using XOR bitwise operation to achieve this in an optimal way
 * XOR of a number with itself is 0 | 2 ^ 2 = 0
 * Number XOR 0 is the number itself | 2 ^ 0 = 2
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function findTheNumberThatAppearsOnceOptimal(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}

let array = [4, 3, 2, 4, 1, 3, 2];
console.log(
  "Array:",
  array,
  "| Number that appears once:",
  findTheNumberThatAppearsOnce(array)
);
console.log(
  "Array:",
  array,
  "| Number that appears once:",
  findTheNumberThatAppearsOnceOptimal(array)
);
