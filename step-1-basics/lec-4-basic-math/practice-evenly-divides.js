// GeekForGeeks
function evenlyDivides(N) {
  //your code here
  let count = 0;
  const number = N;
  while (N > 0) {
    const digit = N % 10;
    N = Math.floor(N / 10);
    if (number % digit === 0) count++;
  }

  return count;
}

console.log(evenlyDivides(123));
console.log(evenlyDivides(124));
