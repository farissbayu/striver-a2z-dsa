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
let matrix1: number[][] = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
console.log("Matrix before: ", matrix1);
console.log("Matrix after: ", setMatrixZeroBruteForce(matrix1));
matrix1 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
console.log("Matrix before: ", matrix1);
console.log("Matrix after: ", setMatrixZeroBruteForce(matrix1));
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
matrix1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
console.log("Matrix before: ", matrix1);
console.log("Matrix after: ", setMatrixZeroBetter(matrix1));
matrix1 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
console.log("Matrix before: ", matrix1);
console.log("Matrix after: ", setMatrixZeroBetter(matrix1));
console.log();

/**
 * Optimal solution
 *
 * 1. Use row[0] and col[0] as marker array
 * 2. Loop through the matrix to find zeros
 * 3. Mark the row and column with zeros
 * 4. Loop through the matrix with size reduced by row[0] and col[0]
 * 5. Set zeros in the matrix based on the marker array
 * 6. Set zeros in the first row and column based on the marker array
 * 7. Return matrix
 *
 * Time complexity: O(m * n)
 * Space complexity: O(1)
 */
function setMatrixZeroOptimal(matrix: number[][]): number[][] {
  let col0 = 1;

  // Marking the row and column with zeros
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // Mark the column

        if (j !== 0) {
          matrix[0][j] = 0; // Mark the row
        } else {
          col0 = 0; // Mark the additional variable
        }
      }
    }
  }

  /**
   * Set zeros in the submatrix based on the marker array
   */
  // for (let i = matrix.length - 1; i >= 1; i--) {
  //   for (let j = matrix[0].length - 1; j >= 1; j--) {
  //     if (matrix[0][j] === 0 || matrix[i][0] === 0) {
  //       matrix[i][j] = 0;
  //     }
  //   }
  // }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] !== 0) {
        if (matrix[0][j] === 0 || matrix[i][0] === 0) {
          matrix[i][j] = 0;
        }
      }
    }
  }

  // Set zeros in the first row
  if (matrix[0][0] === 0) {
    for (let j = 0; j < matrix[0].length; j++) {
      matrix[0][j] = 0;
    }
  }

  // Set zeros in the first column
  if (col0 === 0) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
}

console.log("Optimal solution");
// matrix1 = [
//   [1, 1, 1],
//   [1, 0, 1],
//   [1, 1, 1],
// ];
// console.log("Matrix before: ", matrix1);
// console.log("Matrix after: ", setMatrixZeroOptimal(matrix1));
// matrix1 = [
//   [0, 1, 2, 0],
//   [3, 4, 5, 2],
//   [1, 3, 1, 5],
// ];
// console.log("Matrix before: ", matrix1);
// console.log("Matrix after: ", setMatrixZeroOptimal(matrix1));
matrix1 = [
  [1, 2, 3, 4],
  [5, 0, 7, 8],
  [0, 10, 11, 12],
  [13, 14, 15, 0],
];
console.log("Matrix before: ", matrix1);
console.log("Matrix after: ", setMatrixZeroOptimal(matrix1));
console.log();
