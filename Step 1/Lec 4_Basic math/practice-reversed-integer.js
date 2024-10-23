// Leetcode
const MIN = -Math.pow(2, 31);
const MAX = Math.pow(2, 31) - 1;

function reversedInteger(n) {
  const isNegative = n < 0;
  let num = isNegative ? -n : n;
  let newNum = 0;

  while (num > 0) {
    const lastDigit = num % 10;
    num = Math.floor(num / 10);
    newNum = newNum * 10 + lastDigit;
  }

  if (isNegative) newNum = newNum * -1;
  if (newNum < MIN || newNum > MAX) newNum = 0;
  return newNum;
}

console.log(reversedInteger(12314100));
console.log(reversedInteger(-12314991));
