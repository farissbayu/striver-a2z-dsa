// GeekForGeeks: Maximum Score from Subarray Minimums

/**
 * Brute force solution
 * 
 * 1. Loop through the array (i)
 * 2. Loop through the array (j)
 * 3. Loop through the subarray (k) | array(i...j)
 * 4. Find the smallest and second smallest elements in the subarray
        if (arr[k] < smallest) {
          secondSmallest = smallest;
          smallest = arr[k];
        } else if (arr[k] < secondSmallest) {
          secondSmallest = arr[k];
        }
 * 5. Calculate the maximum score
 * 6. Return the maximum score
 * 
 * Time complexity: O(n^3)
 * Space complexity: O(1)
 */
function maxScoreSubarrayMinimumBruteForce(arr: number[]): number {
  let maxScore = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let smallest = Number.MAX_SAFE_INTEGER;
      let secondSmallest = Number.MAX_SAFE_INTEGER;

      // Loop for arr(i...j)
      for (let k = i; k <= j; k++) {
        if (arr[k] < smallest) {
          secondSmallest = smallest;
          smallest = arr[k];
        } else if (arr[k] < secondSmallest) {
          secondSmallest = arr[k];
        }
      }

      maxScore = Math.max(maxScore, smallest + secondSmallest);
    }
  }

  return maxScore;
}

console.log("Brute force solution");
let array5 = [4, 3, 1, 5, 6];
console.log(
  "Array:",
  array5,
  "| Maximum score:",
  maxScoreSubarrayMinimumBruteForce(array5)
);
array5 = [5, 2, 1];
console.log(
  "Array:",
  array5,
  "| Maximum score:",
  maxScoreSubarrayMinimumBruteForce(array5)
);
console.log();

/**
 * Better solution | Prefix sum
 *
 * 1. Loop through the array (i)
 * 2. Loop through the array (j)
 * 3. Find the smallest and second smallest elements in the subarray
      define smallest and secondSmallest
        let smallest = arr[i];
        let secondSmallest = Infinity;
      find the smallest and second smallest elements
        if (arr[j] < smallest) {
          secondSmallest = smallest;
          smallest = arr[j];
        } else if (arr[j] < secondSmallest) {
          secondSmallest = arr[j];
        }
 * 4. Calculate the maximum score
 * 5. Return the maximum score
 * 
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function maxScoreSubarrayMinimumBetter(arr: number[]): number {
  let maxScore = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    let smallest = arr[i];
    let secondSmallest = Infinity;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < smallest) {
        secondSmallest = smallest;
        smallest = arr[j];
      } else if (arr[j] < secondSmallest) {
        secondSmallest = arr[j];
      }

      if (secondSmallest !== Infinity) {
        maxScore = Math.max(maxScore, smallest + secondSmallest);
      }
    }
  }

  return maxScore;
}

console.log("Better solution");
array5 = [4, 3, 1, 5, 6];
console.log(
  "Array:",
  array5,
  "| Maximum score:",
  maxScoreSubarrayMinimumBetter(array5)
);
array5 = [5, 2, 1];
console.log(
  "Array:",
  array5,
  "| Maximum score:",
  maxScoreSubarrayMinimumBetter(array5)
);
console.log();

/**
 * Best solution
 *
 * 1. Loop through the array (i)
 * 2. Calculate the sum of the subarray from i to i + 1
      subarray with 2 elements will have the maximum score since it will take the smallest and second smallest elements
 * 3. Update the maximum score
 * 4. Return the maximum score
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function maxScoreSubarrayMinimumBest(arr: number[]): number {
  let maxScore = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < arr.length - 1; i++) {
    const sum = arr[i] + arr[i + 1];
    if (sum > maxScore) {
      maxScore = sum;
    }
  }

  return maxScore;
}

console.log("Best solution");
array5 = [4, 3, 1, 5, 6];
console.log(
  "Array:",
  array5,
  "| Maximum score:",
  maxScoreSubarrayMinimumBest(array5)
);
array5 = [5, 2, 1];
console.log(
  "Array:",
  array5,
  "| Maximum score:",
  maxScoreSubarrayMinimumBest(array5)
);
console.log();
