// GeekForGeeks
function sumToN(n) {
  const bigN = BigInt(n);
  const result = (bigN * (bigN + 1n)) / 2n;
  return (result * result).toString();
}

// Recursive solution
function sumToNRecursive(n) {
  if (n === 1) return 1;
  return n * n * n + sumToNRecursive(n - 1);
}

console.log(sumToN(5));
console.log(sumToNRecursive(5));

console.log(sumToN(10));
console.log(sumToNRecursive(10));
