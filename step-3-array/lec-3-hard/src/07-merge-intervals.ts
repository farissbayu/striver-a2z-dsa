// Leetcode: 56 Intervals

/**
 * Brute force
 *
 * 1. Sort the array based on first element
 * 2. Define result array
 * 3. For loop i to n - 1 | traverse every element in the array
 *    - Define start and end | first and second element in the array
 *    - Check if the current element is already in the latest interval, if yes skip current element
 *    - For loop j = i  + 1 to n - 1 | find every overlapping element
 *      - If first element is less than end => overlap
 *        - Update end = max(end, array[j][0])
 *      - else break
 *      - Push start and end into result
 * 4. Return result
 *
 * Time complexity: O(n log n) + O(2n)
 * Space complexity: O(n)
 */
function mergeIntervalsBruteForce(intervals: number[][]): number[][] {
  const n = intervals.length;
  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [];

  for (let i = 0; i < n; i++) {
    const start = intervals[i][0];
    let end = intervals[i][1];

    // interval is already inside the result
    if (result.length && end <= result[result.length - 1][1]) {
      continue;
    }

    for (let j = i + 1; j < n; j++) {
      // current element is overlapping
      if (intervals[j][0] <= end) {
        end = Math.max(end, intervals[j][1]);
      } else {
        break; // not overlapping
      }
    }

    result.push([start, end]);
  }

  return result;
}

console.log("Brute force");
let arr6: number[][] = [
  [1, 3],
  [2, 6],
  [8, 9],
  [9, 11],
  [8, 10],
  [2, 4],
  [15, 18],
  [16, 17],
  [15, 18],
];
console.log("Array:", arr6);
console.log("Merge intervals:", mergeIntervalsBruteForce(arr6));
arr6 = [
  [1, 4],
  [4, 5],
];
console.log("Array:", arr6);
console.log("Merge intervals:", mergeIntervalsBruteForce(arr6));
console.log();

/**
 * Optimal solution
 *
 * 1. Sort the array based on first element
 * 2. Define result array
 * 3. For loop i to n - 1 | traverse every element in the array
 *    - If result is empty or current element start is greater than last result element end
 *      - Push current element into result => continue
 *    - If current element start is lesser than or equal to last result element end
 *      - Update last result element end into the greater
 * 4. Return result
 *
 * Time complexity: O(n log n) + O(n) => O(n log n)
 * Space complexity: O(n)
 */
function mergeIntervalsOptimal(intervals: number[][]): number[][] {
  const n = intervals.length;
  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [];

  for (let i = 0; i < n; i++) {
    if (result.length === 0 || intervals[i][0] > result[result.length - 1][1]) {
      result.push(intervals[i]);
      continue;
    }

    if (intervals[i][0] <= result[result.length - 1][1]) {
      result[result.length - 1][1] = Math.max(
        intervals[i][1],
        result[result.length - 1][1]
      );
    }
  }

  return result;
}

console.log("Optimal solution");
arr6 = [
  [1, 3],
  [2, 6],
  [8, 9],
  [9, 11],
  [8, 10],
  [2, 4],
  [15, 18],
  [16, 17],
  [15, 18],
];
console.log("Array:", arr6);
console.log("Merge intervals:", mergeIntervalsOptimal(arr6));
arr6 = [
  [1, 4],
  [4, 5],
];
console.log("Array:", arr6);
console.log("Merge intervals:", mergeIntervalsOptimal(arr6));
console.log();
