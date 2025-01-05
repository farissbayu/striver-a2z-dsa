// Leetcode: 128. Longest Consecutive Sequence

/**
 * Brute force solution | Linear search
 *
 * 1. Define the longest streak = 0
 * 2. Loop through the array
 * 3. Define the current number
 * 4. Define the current streak = 1
 * 5. Check if the next number is in the array
 * 6. Update the longest streak
 * 7. Return the longest streak
 *
 * Time complexity: O(n^3)
 * Space complexity: O(1)
 */
function longestConsecutiveSequenceBruteForce(arr: number[]) {
  let longestStreak = 0; // define the longest streak = 0

  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i]; // define the current number
    let currentStreak = 1; // define the current streak = 1

    // check if the next number is in the array
    while (linearSearch(arr, currentNum + 1)) {
      currentNum++;
      currentStreak++;
    }

    // update the longest streak
    longestStreak = Math.max(longestStreak, currentStreak);
  }

  return longestStreak;
}

// linear search function for checking if the number is in the array
function linearSearch(arr: number[], num: number): boolean {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return true;
    }
  }

  return false;
}

console.log("Brute force solution | Linear search");

let array10: number[] = [100, 4, 200, 1, 3, 2];
console.log(
  "Array:",
  array10,
  "| Longest consecutive sequence:",
  longestConsecutiveSequenceBruteForce(array10)
);
array10 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(
  "Array:",
  array10,
  "| Longest consecutive sequence:",
  longestConsecutiveSequenceBruteForce(array10)
);
console.log();

/**
 * Better solution | sort the array
 *
 * 1. If the array is empty, return 0
 * 2. Sort the array
 * 3. Define the longest streak = 1
 * 4. Define the last smaller = Number.MIN_SAFE_INTEGER
 * 5. Define the current streak = 0
 * 6. Loop through the array
 * 7. If the current number - 1 is the last smaller
 *    - Update the last smaller
 *    - Update the current streak
 * 8. Else if the current number is not the last smaller
 *    - Update the last smaller
 *    - Update the current streak = 1
 * 9. Update the longest streak
 * 10. Return the longest streak
 *
 * Time complexity: O(n log n)
 * Space complexity: O(1)
 */
function longestConsecutiveSequenceBetter(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }

  arr.sort((a, b) => a - b);

  let longestStreak = 1;
  let lastSmaller = Number.MIN_SAFE_INTEGER;
  let currentStreak = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - 1 === lastSmaller) {
      lastSmaller = arr[i];
      currentStreak++;
    } else if (arr[i] !== lastSmaller) {
      lastSmaller = arr[i];
      currentStreak = 1;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
  }

  return longestStreak;
}

console.log("Better solution | Sort the array");

array10 = [100, 4, 200, 1, 3, 2];
console.log(
  "Array:",
  array10,
  "| Longest consecutive sequence:",
  longestConsecutiveSequenceBetter(array10)
);
array10 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(
  "Array:",
  array10,
  "| Longest consecutive sequence:",
  longestConsecutiveSequenceBetter(array10)
);
console.log();

/**
 * Optimal solution| Hash set
 *
 * 1. If the array is empty, return 0
 * 2. Create a hash set
 * 3. Define the longest streak = 0
 * 4. Loop through the hash set
 * 5. If the current number - 1 is not in the hash set
 *   - Define the current number | make it as starting point
 *   - Define the current streak = 1
 *   - Loop through the hash set
 *   - If the current number + 1 is in the hash set
 *     - Increment the current number
 *     - Increment the current streak
 *   - Update the longest streak
 * 6. Return the longest streak
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function longestConsecutiveSequenceOptimal(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }

  const set = new Set(arr);
  let longestStreak = 0;

  set.forEach((num) => {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  });

  return longestStreak;
}

console.log("Optimal solution | Hash set");
array10 = [100, 4, 200, 1, 3, 2];
console.log(
  "Array:",
  array10,
  "| Longest consecutive sequence:",
  longestConsecutiveSequenceOptimal(array10)
);
array10 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(
  "Array:",
  array10,
  "| Longest consecutive sequence:",
  longestConsecutiveSequenceOptimal(array10)
);
console.log();
