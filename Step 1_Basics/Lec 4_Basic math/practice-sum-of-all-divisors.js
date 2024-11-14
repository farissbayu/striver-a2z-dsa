function sumOfAllDivisors(n) {
  let sumAll = 0;
  for (let i = 1; i <= n; i++) {
    sumAll += Math.floor(n / i) * i;
  }
  return sumAll;
}

console.log(sumOfAllDivisors(3));
console.log(sumOfAllDivisors(5));
