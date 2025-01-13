// Leetcode: 18 4Sum

/**
 * Brute force
 *
 * 1. Define a set to store the result -> to avoid duplicates
 * 2. Loop from 0 to n | loop i
 * 3. Loop from i + 1 to n | loop j
 * 4. Loop from j + 1 to n | loop k
 * 5. Loop from k + 1 to n | loop l
 *    - If nums[i] + nums[j] + nums[k] + nums[l] === target
 *      - Define a temp array to store the result
 *      - Sort the temp array
 *      - Add the temp array to the set
 * 6. Convert the set to an array and return
 *
 * Time Complexity: O(n^4)
 * Space Complexity: O(n)
 */
function fourSumBruteForce(nums: number[], target: number): number[][] {
  const n = nums.length;

  const set: Set<string> = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        for (let l = k + 1; l < n; l++) {
          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            const temp: number[] = [nums[i], nums[j], nums[k], nums[l]];
            temp.sort((a, b) => a - b);
            set.add(temp.join(","));
          }
        }
      }
    }
  }

  const result: number[][] = [];
  set.forEach((value) => {
    result.push(value.split(",").map(Number));
  });

  return result;
}

console.log("Brute force");
let arr3 = [1, 0, -1, 0, -2, 2];
let target = 0;
console.log("Array:", arr3);
console.log("Target:", target);
console.log("4 sum:", fourSumBruteForce(arr3, target));
arr3 = [];
target = 0;
console.log("Array:", arr3);
console.log("Target:", target);
console.log("4 sum:", fourSumBruteForce(arr3, target));
arr3 = [0];
target = 0;
console.log("Array:", arr3);
console.log("Target:", target);
console.log("4 sum:", fourSumBruteForce(arr3, target));
arr3 = [2, 2, 2, 2, 2];
target = 8;
console.log("Array:", arr3);
console.log("Target:", target);
console.log("4 sum:", fourSumBruteForce(arr3, target));
console.log();

/**
 * Better solution | Hash Set
 *
 * 1. Define a set to store the result -> to avoid duplicates
 * 2. Loop from 0 to n | loop i
 * 3. Loop from i + 1 to n | loop j
 *    - Define a hash set to store the remaining values
 * 4. Loop from j + 1 to n | loop k
 *    - Calculate the remaining value | remaining = target - nums[i] - nums[j] - nums[k]
 *    - If hash set has the remaining value
 *      - Define a temp array to store the result
 *      - Sort the temp array
 *      - Add the temp array to the set
 *    - Add nums[k] to the hash set
 * 5. Convert the set to an array and return
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(n)
 */
function fourSumBetter(nums: number[], target: number): number[][] {
  const n = nums.length;

  const set: Set<string> = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const hashSet: Set<number> = new Set();
      for (let k = j + 1; k < n; k++) {
        const remaining = target - nums[i] - nums[j] - nums[k];
        if (hashSet.has(remaining)) {
          const temp: number[] = [nums[i], nums[j], nums[k], remaining];
          temp.sort((a, b) => a - b);
          set.add(temp.join(","));
        }
        hashSet.add(nums[k]);
      }
    }
  }

  const result: number[][] = Array.from(set).map((str) =>
    str.split(",").map(Number)
  );

  return result;
}

console.log("Better solution | Hash Set");
arr3 = [1, 0, -1, 0, -2, 2];
target = 0;
console.log("Array:", arr3);
console.log("Target:", target);
console.log("4 sum:", fourSumBetter(arr3, target));
arr3 = [];
target = 0;
console.log("Array:", arr3);
console.log("Target:", target);
console.log("4 sum:", fourSumBetter(arr3, target));
arr3 = [0];
target = 0;
console.log("Array:", arr3);
console.log("Target:", target);
console.log("4 sum:", fourSumBetter(arr3, target));
arr3 = [2, 2, 2, 2, 2];
target = 8;
console.log("Array:", arr3);
console.log("Target:", target);
console.log("4 sum:", fourSumBetter(arr3, target));
console.log();

/**
 * Optimal solution | Two pointers
 *
 * 1. Sort the array
 * 2. Loop from 0 to n | loop i
 *    - If i > 0 and nums[i] === nums[i - 1] continue | find new element for i
 * 3. Loop from i + 1 to n | loop j
 *    - If j > i + 1 and nums[j] === nums[j - 1] continue | find new element for j
 *    - Define two pointers k = j + 1 and l = n - 1
 *    - Loop  while k < l
 *      - Calculate the sum | sum = nums[i] + nums[j] + nums[k] + nums[l]
 *      - If sum < target increment k
 *      - If sum > target decrement l
 *      - If sum === target
 *        - Add the result to the array
 *        - Increment k and decrement l
 *        - Loop while k < l and nums[k] === nums[k - 1] increment k | find new element for k
 *        - Loop while k < l and nums[l] === nums[l + 1] decrement l | find new element for l
 * 4. Return the result
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(n)
 */
function fourSumOptimal(nums: number[], target: number): number[][] {
  const n = nums.length;
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let k = j + 1;
      let l = n - 1;

      while (k < l) {
        const sum = nums[i] + nums[j] + nums[k] + nums[l];

        if (sum < target) {
          k++;
        } else if (sum > target) {
          l--;
        } else {
          result.push([nums[i], nums[j], nums[k], nums[l]]);
          k++;
          l--;

          while (k < l && nums[k] === nums[k - 1]) {
            k++;
          }

          while (k < l && nums[l] === nums[l + 1]) {
            l--;
          }
        }
      }
    }
  }

  return result;
}

console.log("Optimal solution | Two pointers");
arr3 = [1, 0, -1, 0, -2, 2];
target = 0;
console.log("Array:", arr3);
console.log("Target:", target);
console.log("4 sum:", fourSumOptimal(arr3, target));
arr3 = [];
target = 0;
console.log("Array:", arr3);
console.log("Target:", target);
console.log("4 sum:", fourSumOptimal(arr3, target));
arr3 = [0];
target = 0;
console.log("Array:", arr3);
console.log("Target:", target);
console.log("4 sum:", fourSumOptimal(arr3, target));
arr3 = [2, 2, 2, 2, 2];
target = 8;
console.log("Array:", arr3);
console.log("Target:", target);
console.log("4 sum:", fourSumOptimal(arr3, target));
console.log();
