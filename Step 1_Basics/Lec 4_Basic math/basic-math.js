function digitExtraction(n) {
  console.log("Digit extraction");
  while (n > 0) {
    const lastDigit = n % 10;
    console.log("N: ", n, "Last digit: ", lastDigit);
    n = Math.floor(n / 10);
  }
  console.log();
}

function countDigit(n) {
  console.log("Count digit");

  let digit = 0;
  const N = n;

  // brute force solution
  // while (n > 0) {
  //   digit++;
  //   n = Math.floor(n / 10);
  // }

  // optimal solution
  digit = Math.floor(Math.log10(n) + 1);
  console.log(`The number ${N} has ${digit} digits.`);
  console.log();
}

function reverseNumber(n) {
  console.log("Reverse number");

  let newNum = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    n = Math.floor(n / 10);
    newNum = newNum * 10 + lastDigit;
  }
  console.log(newNum + "\n");
}

function palindrome(n) {
  console.log("Palindrome");

  const num = n;
  let newNum = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    n = Math.floor(n / 10);
    newNum = newNum * 10 + lastDigit;
  }

  console.log(
    `${num} is ${num === newNum ? "Palindrome" : "not Palindrome"}.\n`
  );
}

function armstrongNumber(n) {
  console.log("Armstrong number");

  const digit = Math.floor(Math.log10(n) + 1);
  const num = n;
  let sum = 0;

  while (n > 0) {
    const lastDigit = n % 10;
    sum += Math.pow(lastDigit, digit);
    n = Math.floor(n / 10);
  }

  console.log(`${num} is ${num === sum ? "" : "not "}Armstrong number.\n`);
}

function printAllDivisors(n) {
  console.log("Print all divisors");

  const halfN = Math.floor(n / 2);

  const result1 = []; // O(N)
  const result2 = []; // O(N/2)
  const result3 = []; // O(log2(N))

  // O(N)
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) result1.push(i);
  }

  // O(N/2)
  for (let i = 1; i <= halfN; i++) {
    if (n % i === 0) {
      if (n / i > halfN) result2.push(n / i);
      result2.push(i);
    }
  }

  // O(sqrt(N))
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (n / i > Math.sqrt(n)) result3.push(n / i);
      result3.push(i);
    }
  }

  console.log(
    `O(N). The divisors of ${n} are ${result1.sort((a, b) => a - b)}.`
  );
  console.log(
    `O(N/2). The divisors of ${n} are ${result2.sort((a, b) => a - b)}.`
  );
  console.log(
    `O(sqrt(N)). The divisors of ${n} are ${result3.sort((a, b) => a - b)}.\n`
  );
}

function checkPrime(n) {
  console.log("Check prime");

  let counter = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      counter++;
      if (Math.floor(n / i) !== i) counter++;
    }
  }
  if (counter === 2) {
    console.log(`${n} is Prime number.\n`);
  } else {
    console.log(`${n} is not Prime number.\n`);
  }
}

function gcd(m, n) {
  console.log("Greatest Common Divisor");

  let gcd = 0;
  let a = m;
  let b = n;

  while (a > 0 && b > 0) {
    if (a > b) a = a % b;
    else b = b % a;
  }
  gcd = Math.max(a, b);

  console.log(`GCD of ${a} and ${b} is ${gcd}.\n`);
}

function main() {
  const n = 1;
  console.log(`- Basic Math -\nN: ${n}\n`);

  digitExtraction(n);
  countDigit(n);
  reverseNumber(n);
  palindrome(n);
  armstrongNumber(n);
  printAllDivisors(n);
  checkPrime(n);
  gcd(20, 15);
  gcd(5, 15);
}

main();
