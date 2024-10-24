// GeekForGeeks
function printGfg(n) {
  if (n === 0) {
    return;
  }

  process.stdout.write("GFG");
  if (n > 1) {
    process.stdout.write(" ");
  }
  printGfg(n - 1);
}

printGfg(5);

// in C++
// void printGfg(int N) {
//   if (N == 0) {
//       return;
//   }

//   cout << "GFG";
//   if (N > 1) {
//       cout << " ";
//   }
//   printGfg(N - 1);
// }
