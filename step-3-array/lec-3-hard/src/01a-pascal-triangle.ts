/**
 * Pascal Triangle variant 1
 * Given a row and column, find the value at that position in Pascal's Triangle.
 *
 * use nCr = n! / (r! * (n - r)!)
 */
function pascalTriangleVariant1(row: number, column: number): number {
  const r = row - 1;
  const c = column - 1;

  let result = 1;

  for (let i = 0; i < c; i++) {
    result = result * (r - i);
    result = result / (i + 1);
  }

  return result;
}

console.log("Pascal Triangle Variant 1");
let row1 = 5;
let column1 = 3;
console.log(pascalTriangleVariant1(row1, column1)); // 6
row1 = 5;
column1 = 5;
console.log(pascalTriangleVariant1(row1, column1)); // 1
console.log();
