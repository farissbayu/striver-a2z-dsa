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

function reverseArray(i, arr, n) {
  if (i < n / 2) {
    // swap
    const temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;

    reverseArray(i + 1, arr, n);
  }
  return arr;
}

function palindrome(i, s) {
  if (i >= s.length / 2) return true; // string is palindrome
  if (s[i] != s[s.length - i - 1]) return false; // string is not palindrome
  return palindrome(i + 1, s);
}

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

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
  console.log(reverseArray(0, [1, 2, 3, 4, 5], 5));
  console.log("\n");

  console.log("Palindrome String");
  console.log(palindrome(0, "121"));
  console.log("\n");

  console.log("Fibonacci n");
  console.log(fibonacci(n));
  console.log("\n");
}

main();
