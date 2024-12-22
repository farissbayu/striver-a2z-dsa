// GeekForGeeks: Union of Two Sorted Arrays with Duplicate Elements
function findUnion(a, b) {
  const n1 = a.length;
  const n2 = b.length;

  let i = 0;
  let j = 0;

  const unionArray = [];

  while (i < n1 && j < n2) {
    if (a[i] <= b[j]) {
      if (
        unionArray.length === 0 ||
        a[i] !== unionArray[unionArray.length - 1]
      ) {
        unionArray.push(a[i]);
      }
      i++;
    } else {
      if (
        unionArray.length === 0 ||
        b[j] !== unionArray[unionArray.length - 1]
      ) {
        unionArray.push(b[j]);
      }
      j++;
    }
  }

  while (i < n1) {
    if (unionArray.length === 0 || a[i] !== unionArray[unionArray.length - 1]) {
      unionArray.push(a[i]);
    }
    i++;
  }

  while (j < n2) {
    if (unionArray.length === 0 || b[j] !== unionArray[unionArray.length - 1]) {
      unionArray.push(b[j]);
    }
    j++;
  }

  return unionArray;
}

let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3, 6, 7];
console.log("Array a:", a, "Array b:", b);
console.log(findUnion(a, b));

a = [2, 2, 3, 4, 5];
b = [1, 1, 2, 3, 4];
console.log("Array a:", a, "Array b:", b);
console.log(findUnion(a, b));

a = [1, 1, 1, 1, 1];
b = [2, 2, 2, 2, 2];
console.log("Array a:", a, "Array b:", b);
console.log(findUnion(a, b));
