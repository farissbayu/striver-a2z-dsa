// GeekForGeeks
let result = [];

function printNos(N) {
  result = [];
  collectNumbers(N);
  console.log(result.join(" "));
}

function collectNumbers(N) {
  if (N === 0) return;

  collectNumbers(N - 1);
  result.push(N);
}

printNos(10);
printNos(8);

// another solution
function print1toN(n) {
  printNumbers(1, n);
  process.stdout.write("\n");
}

function printNumbers(i, n) {
  if (i > n) return;

  process.stdout.write(i.toString());
  if (i < n) {
    process.stdout.write(" ");
  }
  printNumbers(i + 1, n);
}

print1toN(5);
