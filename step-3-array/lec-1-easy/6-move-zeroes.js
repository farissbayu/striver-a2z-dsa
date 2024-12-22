// Leetcode: 283. Move Zeroes
/**
 * First solution
 */
var moveZeroes = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 1;
    while (j < arr.length) {
      if (arr[i] === 0 && arr[j] !== 0) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      j++;
    }
  }

  return arr;
};

// Two pointer solution (Optimal)
var moveZeroesTwoPointer = function (arr) {
  let zeroIndex = 0;
  let nonZeroIndex = 0;

  while (nonZeroIndex < arr.length) {
    if (arr[zeroIndex] === 0 && arr[nonZeroIndex] !== 0) {
      [arr[zeroIndex], arr[nonZeroIndex]] = [arr[nonZeroIndex], arr[zeroIndex]];
    }
    if (arr[zeroIndex] !== 0) {
      zeroIndex++;
    }

    nonZeroIndex++;
  }

  return arr;
};

// Striverz solution
var moveZeroesTwoPointerStriverz = function (arr) {
  let j = -1;

  // find first zero in the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      j = i;
      break;
    }
  }

  if (j === -1) return arr;

  // move zero to end of array
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
};

console.log("Brute force solution");
console.log("input: ", [0, 1, 0, 3, 12]);
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log("input: ", [0]);
console.log(moveZeroes([0]));
console.log();

console.log("Two pointer solution");
console.log("input: ", [0, 1, 0, 3, 12]);
console.log(moveZeroesTwoPointer([0, 1, 0, 3, 12]));
console.log("input: ", [0]);
console.log(moveZeroesTwoPointer([0]));
console.log();

console.log("Two pointer solution striverz");
console.log("input: ", [0, 1, 0, 3, 12]);
console.log(moveZeroesTwoPointerStriverz([0, 1, 0, 3, 12]));
console.log("input: ", [0]);
console.log(moveZeroesTwoPointerStriverz([0]));
console.log();
