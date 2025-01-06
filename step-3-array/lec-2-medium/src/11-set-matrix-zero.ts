// Leetcode: 73 Set Matrix Zeroes

/**
 * Brute force solution
 * Only work for positive array
 *
 * 1. Loop based on rows | outer loop
 * 2. Loop based on columns | inner loop
 * 3. If cell is 0
 *    - Mark cells in row i with -1
 *    - Mark cells in column j with -1
 * 4. Change -1 to 0
 * 5. Return matrix
 *
 * Time complexity: O(m * n * (m + n))
 * Space complexity: O(1)
 *
 */
function setMatrixZeroBruteForce(matrix: number[][]): number[][] {
  // Loop based on rows
  for (let i = 0; i < matrix.length; i++) {
    // Loop based on columns
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        // Mark cells in row i with -1 | do loop same as loop i
        for (let k = 0; k < matrix.length; k++) {
          if (matrix[k][j] !== 0) {
            matrix[k][j] = -1;
          }
        }

        // Mark cells in column j with -1 | do loop same as loop j
        for (let k = 0; k < matrix[i].length; k++) {
          if (matrix[i][k] !== 0) {
            matrix[i][k] = -1;
          }
        }
      }
    }
  }

  // Change -1 to 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

console.log("Brute force solution");
let matrix: number[][] = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
console.log("Matrix before: ", matrix);
console.log("Matrix after: ", setMatrixZeroBruteForce(matrix));
matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
console.log("Matrix before: ", matrix);
console.log("Matrix after: ", setMatrixZeroBruteForce(matrix));
console.log();

/**
 * Better solution
 *
 * Intuition:
 * 1. Create two arrays to store the information of which row and column need to be set to zero
 * 2. Loop through the matrix and mark the row and column that need to be set to zero | mark the row and column if the cell is 0
 *
 * 1. Define two array to store the information of row and column that need to be set to zero
 * 2. Loop through the matrix
 *    - If cell is 0
 *      - Mark the row i and col j with 1
 * 3. Loop through the matrix
 *    - If row i or col j is marked with 1
 *      - Set the cell to 0
 * 4. Return matrix
 *
 * Time complexity: O(m * n)
 * Space complexity: O(m + n)
 */
function setMatrixZeroBetter(matrix: number[][]): number[][] {
  let rowZero = new Array(matrix.length).fill(0);
  let colZero = new Array(matrix[0].length).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rowZero[i] = 1;
        colZero[j] = 1;
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (rowZero[i] || colZero[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

console.log("Better solution");
matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
console.log("Matrix before: ", matrix);
console.log("Matrix after: ", setMatrixZeroBetter(matrix));
matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
console.log("Matrix before: ", matrix);
console.log("Matrix after: ", setMatrixZeroBetter(matrix));
console.log();
