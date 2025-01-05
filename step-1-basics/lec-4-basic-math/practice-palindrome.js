// Leetcode
function palindrome(n) {
  if (n < 0) return false;

  const num = n;
  let newNum = 0;
  while (n > 0) {
    const lastDigit = n % 10;
    n = Math.floor(n / 10);
    newNum = newNum * 10 + lastDigit;
  }

  return num === newNum;
}

console.log(palindrome(1221));
console.log(palindrome(-1221));
