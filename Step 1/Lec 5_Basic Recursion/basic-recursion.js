function printNameNTimes(n) {
  if (n === 0) {
    return;
  }

  process.stdout.write("Faris");
  if (n > 1) {
    process.stdout.write(" ");
  }
  printNameNTimes(n - 1);
}

function print1toN(i, n) {
  if (i > n) return;

  process.stdout.write(i.toString());
  if (i < n) {
    process.stdout.write(" ");
  }

  print1toN(i + 1, n);
}

function printNto1(n) {
  if (n === 0) return;

  process.stdout.write(n.toString());
  if (n > 0) {
    process.stdout.write(" ");
  }

  printNto1(n - 1);
}

function sum1ToN(n) {
  if (n === 0) return 0;
  return n + sum1ToN(n - 1);
}

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

/**
 * Iterative
 */
// function reverseArray(arr, n) {
//   const result = [];
//   for (let i = n - 1; i >= 0; i--) {
//     result[n - i - 1] = arr[i];
//   }
//   return result;
// }

/**
 * Recursive two pointer
 */
// function reverseArray(arr, n) {
//   reverse(arr, 0, n - 1);
//   return arr;
// }

// function reverse(arr, l, r) {
//   if (l < r) {
//     // swap
//     let temp = arr[l];
//     arr[l] = arr[r];
//     arr[r] = temp;

//     reverse(arr, l + 1, r - 1);
//   }
// }

function main() {
  const n = 5;
  console.log("- Problems on Recursion -\n");

  console.log("Print name n times");
  printNameNTimes(n);
  console.log("\n");

  console.log("Print 1 to n");
  print1toN(1, n);
  console.log("\n");

  console.log("Print n to 1");
  printNto1(n);
  console.log("\n");

  console.log("Sum 1 to N");
  console.log(sum1ToN(n));
  console.log("\n");

  console.log("Factorial N");
  console.log(factorial(n));
  console.log("\n");

  console.log("Reverse Array");
  console.log(reverseArray([1, 2, 3, 4, 5], 5));
  console.log("\n");
}

main();
