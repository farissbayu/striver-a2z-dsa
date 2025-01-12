// Leetcode: 15. 3Sum

/**
 * Brute force
 *
 * 1. Define a set to store the result -> to avoid duplicates
 * 2. Loop from 0 to n | loop i
 * 3. Loop from i + 1 to n | loop j
 * 4. Loop from j + 1 to n | loop k
 *    - If nums[i] + nums[j] + nums[k] === 0
 *      - Define a temp array to store the result
 *      - Sort the temp array
 *      - Add the temp array to the set
 * 5. Convert the set to an array and return
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(n)
 */
function threeSumBruteForce(nums: number[]): number[][] {
  const n = nums.length;

  const set: Set<string> = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          const temp: number[] = [nums[i], nums[j], nums[k]];
          temp.sort((a, b) => a - b);
          set.add(temp.join(","));
        }
      }
    }
  }

  const result: number[][] = Array.from(set).map((str) =>
    str.split(",").map(Number)
  );

  return result;
}

console.log("Brute force solution");
let arr2 = [-1, 0, 1, 2, -1, -4];
console.log("Array:", arr2, " | 3 sum:", threeSumBruteForce(arr2));
arr2 = [];
console.log("Array:", arr2, " | 3 sum:", threeSumBruteForce(arr2));
arr2 = [0];
console.log("Array:", arr2, " | 3 sum:", threeSumBruteForce(arr2));
arr2 = [0, 0, 0];
console.log("Array:", arr2, " | 3 sum:", threeSumBruteForce(arr2));
console.log();

/**
 * Better solution | Hash Set
 *
 * 1. Define a set to store the result -> to avoid duplicates
 * 2. Loop from 0 to n | loop i
 *    - Define a temp set to store the values
 * 3. Loop from i + 1 to n | loop j
 *    - Calculate the third value | third = -(nums[i] + nums[j])
 *    - If temp set has the third value
 *      - Define a temp array to store the result
 *      - Sort the temp array
 *      - Add the temp array to the set
 * 4. Convert the set to an array and return
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */
function threeSumBetter(nums: number[]): number[][] {
  const n = nums.length;
  const set: Set<string> = new Set();

  for (let i = 0; i < n; i++) {
    const temp: Set<number> = new Set();
    for (let j = i + 1; j < n; j++) {
      const third = -(nums[i] + nums[j]);
      if (temp.has(third)) {
        const result = [nums[i], nums[j], third];
        result.sort((a, b) => a - b);
        set.add(result.join(","));
      }
      temp.add(nums[j]);
    }
  }

  const result: number[][] = Array.from(set).map((str) =>
    str.split(",").map(Number)
  );

  return result;
}

console.log("Better solution | Hash Set");
arr2 = [-1, 0, 1, 2, -1, -4];
console.log("Array:", arr2, " | 3 sum:", threeSumBetter(arr2));
arr2 = [];
console.log("Array:", arr2, " | 3 sum:", threeSumBetter(arr2));
arr2 = [0];
console.log("Array:", arr2, " | 3 sum:", threeSumBetter(arr2));
arr2 = [0, 0, 0];
console.log("Array:", arr2, " | 3 sum:", threeSumBetter(arr2));
console.log();

/**
 * Optimal solution | Two pointers
 *
 * 1. Sort the array
 * 2. Loop i until i = n - 1
 *    - If arr[i] === arr[i - 1] continue -> to find new element for i
 *    - Define j = i + 1 and k = n - 1 (last index)
 *    - Loop while j < k | j is not across k
 *      - Calc sum = nums[i] + nums[j] + nums[k]
 *      - If the summation is lesser than 0
 *        - Move j to the right | increment j
 *      - Else if the summation is more than 0
 *        - Move k to the left | decrement k
 *      - Else if the summation is equal to 0
 *        - Push [nums[i], nums[j], nums[k]] into result array
 *        - Move j and k (j++, k--)
 *        - While j lesser than k and nums[j] equal to nums[j - 1] | find new element for j
 *          - Increment j
 *        - While j lesser than k and nums[k] equal to nums[k + 1] | find new element for k
 *          - Decrement k
 * 3. Return result
 *
 * Time complexity: O(n log n) + O(n * n) = O(n^2)
 * Space complexity: O(m)
 *
 */
function threeSumOptimal(nums: number[]): number[][] {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  const result: number[][] = [];

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  return result;
}

console.log("Optimal solution | Two pointers");
arr2 = [-1, 0, 1, 2, -1, -4];
console.log("Array:", arr2);
console.log("3 sum:", threeSumOptimal(arr2));
arr2 = [];
console.log("Array:", arr2);
console.log("3 sum:", threeSumOptimal(arr2));
arr2 = [0];
console.log("Array:", arr2);
console.log("3 sum:", threeSumOptimal(arr2));
arr2 = [0, 0, 0];
console.log("Array:", arr2);
console.log("3 sum:", threeSumOptimal(arr2));
arr2 = [-2, 0, 1, 1, 2];
console.log("Array:", arr2);
console.log("3 sum:", threeSumOptimal(arr2));
console.log();
