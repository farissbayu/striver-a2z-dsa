// GeekForGeeks
// Iterative
function factorial(n) {
  let fac = 1;
  let i = 0;
  let arr = [];
  while (fac <= n) {
    i++;
    fac *= i;
    if (fac <= n) arr.push(fac);
  }
  return arr;
}

// Recursive factorial
function recursiveFactorial(n) {
  if (n === 1) return 1;
  return n * recursiveFactorial(n - 1);
}

console.log(factorial(3));
