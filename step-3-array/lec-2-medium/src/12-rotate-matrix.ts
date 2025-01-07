// Leetcode: 48. Rotate Image

/**
 * Brute force
 *
 * 1. Define a new matrix
 * 2. Loop through the matrix | outer loop
 * 3. Define a row
 * 4. Loop through the matrix | inner loop
 * 5. Push the elements to the row in reverse order
 * 6. Push the row to the new matrix
 * 7. Return the new matrix
 *
 * Time complexity: O(n^2)
 * Space complexity: O(n^2)
 */
function rotateMatrixBruteForce(matrix: number[][]): number[][] {
  let result: number[][] = [];
  for (let i = 0; i < matrix.length; i++) {
    let row: number[] = [];
    for (let j = matrix[0].length - 1; j >= 0; j--) {
      row.push(matrix[j][i]);
    }
    result.push(row);
  }

  return result;
}

console.log("Brute force solution");
let matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Matrix before: ", matrix2);
console.log("Matrix after: ", rotateMatrixBruteForce(matrix2));
matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
console.log("Matrix before: ", matrix2);
console.log("Matrix after: ", rotateMatrixBruteForce(matrix2));
console.log();

/**
 * Optimal solution | Transpose and reverse
 *
 * 1. Transpose the matrix
 * 2. Reverse every row
 * 3. Return the matrix
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function rotateMatrixOptimal(matrix: number[][]): number[][] {
  // Transprose matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // Reverse every row
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length / 2; j++) {
      [matrix[i][j], matrix[i][matrix[0].length - 1 - j]] = [
        matrix[i][matrix[0].length - 1 - j],
        matrix[i][j],
      ];
    }
  }

  return matrix;
}

console.log("Optimal solution | Transpose and reverse");
matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Matrix before: ", matrix2);
console.log("Matrix after: ", rotateMatrixOptimal(matrix2));
matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];
console.log("Matrix before: ", matrix2);
console.log("Matrix after: ", rotateMatrixOptimal(matrix2));
console.log();
