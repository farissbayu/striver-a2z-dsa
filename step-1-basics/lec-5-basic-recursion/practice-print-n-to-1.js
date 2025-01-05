// GeekForGeeks
function printNto1(n) {
  if (n === 0) return;

  process.stdout.write(n.toString());
  if (n > 0) {
    process.stdout.write(" ");
  }

  printNto1(n - 1);
}

printNto1(5);

// in C++
// void printNos(int N) {
//   // code here
//   if (N == 0) return;

//   cout << N;
//   if (N > 0) {
//     cout << " ";
//   }

//   printNos(N - 1);
// }
