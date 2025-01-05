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
  const result = findFactorial(1, n, 1, []);
  return result;
}

function findFactorial(fac, n, i, arr) {
  if (fac > n) {
    return arr;
  } else {
    arr.push(fac);
    return findFactorial(fac * (i + 1), n, i + 1, arr);
  }
}

console.log(factorial(6));
console.log(recursiveFactorial(6));
