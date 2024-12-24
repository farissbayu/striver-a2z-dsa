// Leetcode: 169. Majority Element

/**
    Given an array nums of size n, return the majority element.

    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

/**
 * Brute force solution | Count the frequency of each element
 *
 * 1. Initialize a counter for each element in the array
 * 2. Use a nested loop to count the occurrences of each element | if the element is already counted, skip it
 * 3. Check if the count of any element exceeds n / 2
 * 4. Return the element if it does, otherwise continue
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function majorityElementBruteForce(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === undefined) continue;

    let cnt = 1;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        cnt++;
        arr[j] = undefined;
      }
    }

    if (cnt > arr.length / 2) {
      return arr[i];
    }
  }

  return -1;
}

console.log("Brute force solution");

let array = [3, 2, 3];
console.log(
  "Array:",
  array,
  "| Majority element:",
  majorityElementBruteForce(array)
);
array = [2, 2, 1, 1, 1, 2, 2];
console.log(
  "Array:",
  array,
  "| Majority element:",
  majorityElementBruteForce(array)
);

console.log();

/**
 * Better solution | Hash map
 *
 * 1. Initialize a hash map to store the count of each element
 * 2. Loop through the array to count the occurrences of each element
 * 3. Check if the count of any element exceeds n / 2
 * 4. Return the element if it does, otherwise continue
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */

function majorityElementHashMap(arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  for (let [key, value] of map.entries()) {
    if (value > Math.floor(arr.length / 2)) {
      return key;
    }
  }

  return -1;
}

console.log("Better solution");

array = [3, 2, 3];
console.log(
  "Array:",
  array,
  "| Majority element:",
  majorityElementHashMap(array)
);
array = [2, 2, 1, 1, 1, 2, 2];
console.log(
  "Array:",
  array,
  "| Majority element:",
  majorityElementHashMap(array)
);

console.log();

/**
 * Optimal solution | Boyer-Moore Voting Algorithm
 *
 * 1. Initialize a counter and a candidate variable
 * 2. Loop through the array
 * 3. If the counter is 0, set the current element as the candidate and counter to 1
 * 4. If the current element is the candidate, increment the counter, otherwise decrement it
 * 5. Return the candidate
 * 6. Verify if the candidate is the majority element
 * 7. Return the candidate if it is, otherwise return -1
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function majorityElementMooreVoting(arr) {
  let cnt = 0;
  let candidate;

  for (let i = 0; i < arr.length; i++) {
    if (cnt === 0) {
      cnt = 1;
      candidate = arr[i];
    } else if (candidate === arr[i]) {
      cnt++;
    } else {
      cnt--;
    }
  }

  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  if (count > Math.floor(arr.length / 2)) {
    return candidate;
  }
}

console.log("Optimal solution | Boyer-Moore Voting Algorithm");

array = [3, 2, 3];
console.log(
  "Array:",
  array,
  "| Majority element:",
  majorityElementMooreVoting(array)
);
array = [2, 2, 1, 1, 1, 2, 2];
console.log(
  "Array:",
  array,
  "| Majority element:",
  majorityElementMooreVoting(array)
);

console.log();
