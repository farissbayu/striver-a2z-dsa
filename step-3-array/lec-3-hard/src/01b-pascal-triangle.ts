/**
 * Problem: Pascal Triangle Variant 2
 * Print the nth row of Pascal's Triangle.
 */

/**
 * Brute Force
 *
 * 1. Define array to store the element
 * 2. Loop from 1 to n | since the size will equal to n
 *    - Calculate nCr | use function from variant 1
 *    - Push the result to the array
 * 3. Return the array
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */
function pascalTriangleVariant2BruteForce(n: number): number[] {
  let result: number[] = [];

  for (let i = 1; i <= n; i++) {
    result.push(nCr(n - 1, i - 1));
  }

  return result;
}

export function nCr(n: number, r: number): number {
  let result = 1;

  for (let i = 0; i < r; i++) {
    result = result * (n - i);
    result = result / (i + 1);
  }

  return result;
}

console.log("Pascal Triangle Variant 2 Brute Force");
let n1 = 5;
console.log("n:", n1, "| row n-th:", pascalTriangleVariant2BruteForce(n1)); // [1, 4, 6, 4, 1]
n1 = 6;
console.log("n: ", n1, "| row n-th: ", pascalTriangleVariant2BruteForce(n1)); // [1, 5, 10, 10, 5, 1]
console.log();

/**
 * Optimal solution
 *
 * 1. Define array to store the element
 * 2. Initialize cur = 1
 * 3. Push cur to the array
 * 4. Loop from 1 to n - 1
 *    - Calculate cur = cur * (n - i) / i | nCr = n! / (r! * (n - r)!) pattern
 *    - Push cur to the array
 * 5. Return the array
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function pascalTriangleVariant2Optimal(n: number): number[] {
  let result: number[] = [];

  let cur = 1;
  result.push(cur);

  for (let i = 1; i < n; i++) {
    cur = cur * (n - i);
    cur = cur / i;
    result.push(cur);
  }

  return result;
}

console.log("Pascal Triangle Variant 2 Brute Force");
n1 = 5;
console.log("n:", n1, "| row n-th:", pascalTriangleVariant2Optimal(n1)); // [1, 4, 6, 4, 1]
n1 = 6;
console.log("n: ", n1, "| row n-th: ", pascalTriangleVariant2Optimal(n1)); // [1, 5, 10, 10, 5, 1]
console.log();
