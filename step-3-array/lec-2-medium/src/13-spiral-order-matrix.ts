// Leetcode: 54 Spiral Matrix

/**
 * Brute force solution
 *
 * 1. Define the number of rows and columns of the matrix
 * 2. Define array to store the spiral order of the matrix
 * 3. Define the boundaries of the matrix
 *    - left: 0
 *    - right: number of columns - 1
 *    - top: 0
 *    - bottom: number of rows - 1
 * 4. Define a variable to store the current iteration and the length of the array
 * 5. Loop through the matrix
 *    - Traverse right
 *      - Loop through the columns from left to right
 *      - Push the elements to the array | top constant
 *      - Increment the iteration
 *      - Increment the top boundary
 *    - Traverse bottom
 *      - Loop through the rows from top to bottom
 *      - Push the elements to the array | right constant
 *      - Increment the iteration
 *      - Decrement the right boundary
 *    - Traverse left
 *      - Loop through the columns from right to left
 *      - Push the elements to the array | bottom constant
 *      - Increment the iteration
 *      - Decrement the bottom boundary
 *    - Traverse top
 *      - Loop through the rows from bottom to top
 *      - Push the elements to the array | left constant
 *      - Increment the iteration
 *      - Increment the left boundary
 * 6. Return the array
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function spiralOrder(matrix: number[][]): number[] {
  const row = matrix.length; // number of rows
  const col = matrix[0].length; // number of columns

  const ans: number[] = []; // to store the spiral order of the matrix

  let left = 0;
  let right = col - 1;
  let top = 0;
  let bottom = row - 1;

  // Looping trough the matrix
  // Step of spiral
  // right -> bottom -> left -> top
  while (top <= bottom && left <= right) {
    // Traverse right
    for (let j = left; j <= right; j++) {
      ans.push(matrix[top][j]);
    }
    top++;

    // Traverse Bottom
    for (let j = top; j <= bottom; j++) {
      ans.push(matrix[j][right]);
    }
    right--;

    // Traverse Left
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        ans.push(matrix[bottom][j]);
      }
      bottom--;
    }

    // Traverse Right
    if (left <= right) {
      for (let j = bottom; j >= top; j--) {
        ans.push(matrix[j][left]);
      }
      left++;
    }
  }

  return ans;
}

let matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Matrix before: ", matrix3);
console.log("Spiral order: ", spiralOrder(matrix3));
matrix3 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
console.log("Matrix before: ", matrix3);
console.log("Spiral order: ", spiralOrder(matrix3));
console.log();
