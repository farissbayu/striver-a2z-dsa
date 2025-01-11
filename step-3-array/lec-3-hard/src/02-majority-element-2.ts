// Leetcode: 229. Majority Element II

/**
 * Brute force solution
 *
 * 1. Define an array to store the result
 * 2. Define n = arr.length / 3
 * 3. Loop from 0 to arr.length
 *    - If the result includes arr[i], continue
 *    - Define counter = 0
 *    - Loop from 0 to arr.length
 *      - If arr[i] === arr[j], increment counter
 *    - If counter > n, push arr[i] to the result
 * 4. Return the result
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */
function majorityElement2BruteForce(arr: number[]): number[] {
  let result: number[] = [];
  const n = Math.floor(arr.length / 3);

  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {
      continue;
    }

    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }
    if (counter > n) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log("Brute force solution");
let arr1 = [3, 2, 3];
console.log(
  "Array:",
  arr1,
  " | majority element:",
  majorityElement2BruteForce(arr1)
);
arr1 = [1];
console.log(
  "Array:",
  arr1,
  " | majority element:",
  majorityElement2BruteForce(arr1)
);
arr1 = [1, 2];
console.log(
  "Array:",
  arr1,
  " | majority element:",
  majorityElement2BruteForce(arr1)
);
console.log();

/**
 * Better solution
 *
 * 1. Define an array to store the result
 * 2. Define n = arr.length / 3
 * 3. Define a map to store the frequency of each element
 * 4. Loop from 0 to arr.length | count the frequency of each element
 * 5. Loop through the map | find elements with frequency > n
 * 6. Return the result
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function majorityElement2Better(arr: number[]): number[] {
  let result: number[] = [];
  const n = Math.floor(arr.length / 3);
  let map: Map<number, number> = new Map();

  // count the frequency of each element
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  // find elements with frequency > n
  for (let [key, value] of map) {
    if (value > n) {
      result.push(key);
    }
  }

  return result;
}

console.log("Better solution | Hash Map");
arr1 = [3, 2, 3];
console.log(
  "Array:",
  arr1,
  " | majority element:",
  majorityElement2Better(arr1)
);
arr1 = [1];
console.log(
  "Array:",
  arr1,
  " | majority element:",
  majorityElement2Better(arr1)
);
arr1 = [1, 2];
console.log(
  "Array:",
  arr1,
  " | majority element:",
  majorityElement2Better(arr1)
);
console.log();

/**
 * Optimal solution | Boyer-Moore Voting Algorithm
 *
 * 1. Define count1 = 0, count2 = 0, el1 = Number.MIN_SAFE_INTEGER, el2 = Number.MIN_SAFE_INTEGER
 * 2. Loop from 0 to arr.length | find the two most frequent elements
 *    - If count1 === 0 && arr[i] !== el2, count1 = 1, el1 = arr[i]
 *    - If count2 === 0 && arr[i] !== el1, count2 = 1, el2 = arr[i]
 *    - If el1 === arr[i], increment count1
 *    - If el2 === arr[i], increment count2
 *    - Else, decrement count1 and count2
 * 3. Define count1 = 0, count2 = 0
 * 4. Loop from 0 to arr.length | count the frequency of the two most frequent elements | verify if they are majority elements
 * 5. Return the result
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function majorityElement2Optimal(arr: number[]): number[] {
  const n = Math.floor(arr.length / 3);
  let count1 = 0;
  let count2 = 0;
  let el1 = Number.MIN_SAFE_INTEGER;
  let el2 = Number.MIN_SAFE_INTEGER;

  // Find the two most frequent elements
  for (let i = 0; i < arr.length; i++) {
    if (count1 === 0 && arr[i] !== el2) {
      count1 = 1;
      el1 = arr[i];
    } else if (count2 === 0 && arr[i] !== el1) {
      count2 = 1;
      el2 = arr[i];
    } else if (el1 === arr[i]) {
      count1++;
    } else if (el2 === arr[i]) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  count1 = 0;
  count2 = 0;

  // Count the frequency of the two most frequent elements | verify if they are majority elements
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === el1) {
      count1++;
    } else if (arr[i] === el2) {
      count2++;
    }
  }

  if (count1 > n) {
    result.push(el1);
  }
  if (count2 > n) {
    result.push(el2);
  }

  return result;
}

console.log("Optimal solution | Boyer-Moore Voting Algorithm");
arr1 = [3, 2, 3];
console.log(
  "Array:",
  arr1,
  " | majority element:",
  majorityElement2Optimal(arr1)
);
arr1 = [1];
console.log(
  "Array:",
  arr1,
  " | majority element:",
  majorityElement2Optimal(arr1)
);
arr1 = [1, 2];
console.log(
  "Array:",
  arr1,
  " | majority element:",
  majorityElement2Optimal(arr1)
);
console.log();
