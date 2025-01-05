// GeekForGeeks
function frequencyCount(arr, N, P) {
  const arrResult = new Array(N + 1).fill(0);
  for (let i = 0; i < N; i++) {
    arrResult[arr[i]]++;
  }
  arrResult.shift();
  for (let i = 0; i < N; i++) {
    arr[i] = arrResult[i];
  }
  return arr;
}

console.log(frequencyCount([2, 3, 2, 3, 5], 5, 5));
