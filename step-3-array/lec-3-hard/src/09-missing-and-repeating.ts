// GeekForGeeks: Missing and Repeating

/**
 * Brute Force
 * 1. Define missingNumber and repeatingNumber
 * 2. For loop 1 to N (arr.length)
 * 3. For loop 0 to N - 1
 *    - If I is equal to current element => increment counter
 * 4. If Counter === 2 => repeating = i
 * 5. If Counter === 0 => missing = i
 * 6. Return [repeatingNumber, missingNumber]
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
function findMissingRepeatingNumberBruteForce(arr: number[]): number[] {
  let missingNumber = -1;
  let repeatingNumber = -1;

  for (let i = 1; i <= arr.length; i++) {
    let counter = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i === arr[j]) {
        counter++;
      }
    }
    if (counter === 2) {
      repeatingNumber = i;
    }
    if (counter === 0) {
      missingNumber = i;
    }
  }

  return [repeatingNumber, missingNumber];
}

console.log("Brute Force");
let arr9 = [3, 1, 2, 5, 3];
console.log(
  "Array:",
  arr9,
  "| Repeating and missing:",
  findMissingRepeatingNumberBruteForce(arr9)
);
arr9 = [3, 1, 2, 5, 4, 6, 7, 5];
console.log(
  "Array:",
  arr9,
  "| Repeating and missing:",
  findMissingRepeatingNumberBruteForce(arr9)
);
console.log();

/**
 * Better solution | Hashing
 *
 * 1. Define repeatingNumber and missingNumber
 * 2. Define hashMap to store counter of element
 * 3. For loop 0 to N
 *    - Increment counter of element
 * 4. Calculate sum of array and sum of 1 to N
 * 5. For each element in hashMap => If counter === 2 => repeating = key | find repeating number
 * 6. missing = sum of 1 to N - (sum of array - repeating) | find missing number
 * 7. Return [repeatingNumber, missingNumber]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
// function findMissingRepeatingNumberBetter(arr: number[]): number[] {
//   let repeatingNumber = -1;
//   let missingNumber = -1;

//   const n = arr.length;
//   const hashMap = new Map<number, number>(); // to store the counter of element

//   // count every element
//   for (let i = 0; i < n; i++) {
//     hashMap.set(arr[i], (hashMap.get(arr[i]) || 0) + 1);
//   }

//   // calc sum of array and sum of 1 to n
//   const sumArr = arr.reduce((acc, cur) => {
//     return acc + cur;
//   }, 0);
//   const sN = (n * (n + 1)) / 2;

//   // find repeating number => counter = 2
//   hashMap.forEach((value, key) => {
//     if (value === 2) {
//       repeatingNumber = key;
//     }
//   });

//   // find missing number
//   missingNumber = sN - (sumArr - repeatingNumber);

//   return [repeatingNumber, missingNumber];
// }

/**
 * Better solution | Hashing (Strivers)
 *
 * 1. Define repeatingNumber and missingNumber
 * 2. Define hashMap to store counter of element
 * 3. For loop 0 to N => Increment counter of element
 * 4. For loop 1 to N
 *    - If I is not in hashMap => missing = i
 *    - If I is in hashMap and counter is 2 => repeating = i
 * 5. Return [repeatingNumber, missingNumber]
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function findMissingRepeatingNumberBetter(arr: number[]): number[] {
  let repeatingNumber = -1;
  let missingNumber = -1;

  const n = arr.length;
  const hashMap = new Map<number, number>();

  for (let i = 0; i < n; i++) {
    hashMap.set(arr[i], (hashMap.get(arr[i]) || 0) + 1);
  }

  for (let i = 1; i <= n; i++) {
    if (!hashMap.has(i)) {
      // i is not in hashMap
      missingNumber = i;
    } else if (hashMap.get(i) === 2) {
      // i is in hashMap and counter is 2
      repeatingNumber = i;
    }
  }

  return [repeatingNumber, missingNumber];
}

console.log("Better solution | Hashmap");
arr9 = [3, 1, 2, 5, 3];
console.log(
  "Array:",
  arr9,
  "| Repeating and missing:",
  findMissingRepeatingNumberBetter(arr9)
);
arr9 = [3, 1, 2, 5, 4, 6, 7, 5];
console.log(
  "Array:",
  arr9,
  "| Repeating and missing:",
  findMissingRepeatingNumberBetter(arr9)
);
console.log();

/**
 * Optimal solution | Math
 *
 * Using two equations
 * 1. S - Sn = x - y
 * 2. S2 - Sn2 = x2 - y2
 *
 *
 */
function findMissingRepeatingNumberOptimalMath(arr: number[]): number[] {
  const n = arr.length;

  const sN = (n * (n + 1)) / 2;
  const sN2 = (n * (n + 1) * (2 * n + 1)) / 6;

  let s = 0;
  let s2 = 0;

  for (let i = 0; i < n; i++) {
    s += arr[i];
    s2 += arr[i] * arr[i];
  }

  // S - Sn = x - y
  const value1 = s - sN;

  // S2 - Sn2 = x2 - y2 => (x + y)(x - y) = x2 - y2
  const value2 = (s2 - sN2) / value1;

  const x = (value1 + value2) / 2; // repeating number
  const y = value2 - x; // missing number

  return [x, y];
}

console.log("Optimal solution | Math");
arr9 = [3, 1, 2, 5, 3];
console.log(
  "Array:",
  arr9,
  "| Repeating and missing:",
  findMissingRepeatingNumberOptimalMath(arr9)
);
arr9 = [3, 1, 2, 5, 4, 6, 7, 5];
console.log(
  "Array:",
  arr9,
  "| Repeating and missing:",
  findMissingRepeatingNumberOptimalMath(arr9)
);
console.log();
