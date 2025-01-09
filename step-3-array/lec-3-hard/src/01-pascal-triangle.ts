// Leetcode: 118. Pascal's Triangle

/**
 * Brute force solution
 *
 * 1. Define an array to store the result
 * 2. Loop from 1 to numRows
 *    - Define an array to store the current row
 *    - Loop from 1 to i
 *      - Initialize cur = 1
 *      - Loop from 0 to j - 1
 *        - Calculate cur = cur * (i - 1 - k) / (k + 1)
 *        - Push cur to the current row
 *      - Push the current row to the result
 * 3. Return the result
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(n^2)
 */
function pascalTriangleBruteForce(numRows: number): number[][] {
  let result: number[][] = [];

  for (let i = 1; i <= numRows; i++) {
    const tempList: number[] = [];
    for (let j = 1; j <= i; j++) {
      let cur = 1;

      for (let k = 0; k < j - 1; k++) {
        cur = cur * (i - 1 - k);
        cur = cur / (k + 1);
      }
      tempList.push(cur);
    }
    result.push(tempList);
  }

  return result;
}

console.log("Pascal Triangle Brute Force");
let numRows1 = 5;
console.log(
  "Number of rows:",
  numRows1,
  "| Pascal Triangle:",
  pascalTriangleBruteForce(numRows1)
);
numRows1 = 6;
console.log(
  "Number of rows:",
  numRows1,
  "| Pascal Triangle:",
  pascalTriangleBruteForce(numRows1)
);
console.log();

/**
 * Optimal solution
 *
 * 1. Define an array to store the result
 * 2. Loop from 1 to numRows
 *    - Define an array to store the current row
 *    - Initialize curEl = 1
 *    - Push curEl to the current row
 *    - Loop from 1 to i - 1
 *      - Calculate curEl = curEl * (i - j) / j
 *      - Push curEl to the current row
 *    - Push the current row to the result
 * 3. Return the result
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n^2)
 */
function pascalTriangleOptimal(numRows: number): number[][] {
  let result: number[][] = [];

  for (let i = 1; i <= numRows; i++) {
    let curRow: number[] = [];
    let curEl = 1;
    curRow.push(curEl);

    for (let j = 1; j < i; j++) {
      curEl = (curEl * (i - j)) / j;
      curRow.push(curEl);
    }
    result.push(curRow);
  }

  return result;
}

console.log("Pascal Triangle Optimal");
numRows1 = 5;
console.log(
  "Number of rows:",
  numRows1,
  "| Pascal Triangle:",
  pascalTriangleOptimal(numRows1)
);
numRows1 = 6;
console.log(
  "Number of rows:",
  numRows1,
  "| Pascal Triangle:",
  pascalTriangleOptimal(numRows1)
);
console.log();
