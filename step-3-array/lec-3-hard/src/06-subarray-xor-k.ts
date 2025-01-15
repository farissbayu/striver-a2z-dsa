/**
 * Brute force
 *
 * 1. Initialize counter = 0 | to store the number of subarrays with XOR = k
 * 2. Iterate the array from 0 to n - 1
 * 3. Iterate the array from i to n - 1
 *    - Initialize xor = 0
 *    - Iterate the array from K to j
 *      - xor = xor ^ arr[K] | xor operation
 *    - If xor === k
 *      - Increment counter
 * 4. Return counter
 *
 * Time Complexity: O(n^3)
 * Space Complexity: O(1)
 */
function subarrayXorKBruteForce(arr: number[], k: number): number {
  const n = arr.length;
  let counter = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let xor = 0;
      for (let K = i; K <= j; K++) {
        xor = xor ^ arr[K];
      }
      if (xor === k) {
        counter++;
      }
    }
  }
  return counter;
}

console.log("Brute force");
let arr5 = [4, 2, 2, 6, 4];
let k = 6;
console.log(
  "Array:",
  arr5,
  "| subarray with sum = k:",
  subarrayXorKBruteForce(arr5, k)
);
arr5 = [5, 6, 7, 8, 9];
k = 5;
console.log(
  "Array:",
  arr5,
  "| subarray with sum = k:",
  subarrayXorKBruteForce(arr5, k)
);
arr5 = [1, 2, 3, 4, 5];
k = 5;
console.log(
  "Array:",
  arr5,
  "| subarray with sum = k:",
  subarrayXorKBruteForce(arr5, k)
);
console.log();

/**
 * Better solution
 */
function subarrayXorKBetter(arr: number[], k: number): number {
  const n = arr.length;
  let counter = 0;
  for (let i = 0; i < n; i++) {
    let xor = 0;
    for (let j = i; j < n; j++) {
      xor = xor ^ arr[j];
      if (xor === k) {
        counter++;
      }
    }
  }

  return counter;
}

console.log("Better solution");
arr5 = [4, 2, 2, 6, 4];
k = 6;
console.log(
  "Array:",
  arr5,
  "| subarray with sum = k:",
  subarrayXorKBetter(arr5, k)
);
arr5 = [5, 6, 7, 8, 9];
k = 5;
console.log(
  "Array:",
  arr5,
  "| subarray with sum = k:",
  subarrayXorKBetter(arr5, k)
);
arr5 = [1, 2, 3, 4, 5];
k = 5;
console.log(
  "Array:",
  arr5,
  "| subarray with sum = k:",
  subarrayXorKBetter(arr5, k)
);
console.log();

/**
 * Optimal solution | Prefix XOR
 *
 * 1. Initialize hashMap = new Map<number, number>()
 * 2. Initialize counter = 0 | to store the number of subarrays with XOR = k
 * 3. Initialize xor = 0
 * 4. Iterate the array from 0 to n - 1
 *    - xor = xor ^ arr[i] | calculate xor till i
 *    - If xor === k
 *      - Increment counter
 *    - Calculate x = xor ^ k | x ^ k = xor so to find x, can use xor ^ k
 *    - If hashMap has x
 *      - Increment counter by hashMap.get(x)
 *    - Set hashMap[xor] = (hashMap.get(xor) || 0) + 1 | store the amount of xor value in hashMap
 * 5. Return counter
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
function subarrayXorKOptimal(arr: number[], k: number): number {
  const n = arr.length;
  const hashMap = new Map<number, number>();
  let counter = 0;
  let xor = 0;

  for (let i = 0; i < n; i++) {
    xor = xor ^ arr[i];
    if (xor === k) {
      counter++;
    }

    const x = xor ^ k;

    if (hashMap.has(x)) {
      counter = counter + hashMap.get(x)!;
    }

    hashMap.set(xor, (hashMap.get(xor) || 0) + 1);
  }

  return counter;
}

console.log("Optimal solution | Prefix XOR");
arr5 = [4, 2, 2, 6, 4];
k = 6;
console.log(
  "Array:",
  arr5,
  "| subarray with sum = k:",
  subarrayXorKOptimal(arr5, k)
);
arr5 = [5, 6, 7, 8, 9];
k = 5;
console.log(
  "Array:",
  arr5,
  "| subarray with sum = k:",
  subarrayXorKOptimal(arr5, k)
);
arr5 = [1, 2, 3, 4, 5];
k = 5;
console.log(
  "Array:",
  arr5,
  "| subarray with sum = k:",
  subarrayXorKOptimal(arr5, k)
);
console.log();
