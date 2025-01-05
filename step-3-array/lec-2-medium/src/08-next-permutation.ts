// Leetcode: 31. Next Permutation

/**
 * Brute force solution | Bubble sort + Backtrack recursive permutation
 *
 * Intuition:
 * 1. Find all permutations of the input array
 * 2. Sort the permutations
 * 3. Find the index of the input array
 * 4. Return the next permutation | ans[i + 1]
 *
 * Time complexity: O(n!)
 * Space complexity: O(n!)
 */
function nextPermutationBruteForce(arr: number[]): number[] {
  let ans: number[][] = []; // to store the list of all permutations

  recursivePermutation(0, arr, ans);

  // sort the permutations
  ans.sort((a, b) => {
    const numA = parseInt(a.join(""));
    const numB = parseInt(b.join(""));
    return numA - numB;
  });

  let result: number[] = [];

  for (let i = 0; i < ans.length; i++) {
    if (arr.join("") == ans[i].join("")) {
      result = i === ans.length - 1 ? ans[0] : ans[i + 1];
    }
  }

  return result;
}

function recursivePermutation(
  index: number,
  arr: number[],
  ans: number[][]
): void {
  if (index === arr.length) {
    ans.push([...arr]);
    return;
  }

  for (let i = index; i < arr.length; i++) {
    [arr[index], arr[i]] = [arr[i], arr[index]];
    recursivePermutation(index + 1, arr, ans);
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
}

console.log(
  "Brute force solution | Bubble sort + Backtrack recursive permutation"
);

let array8: number[] = [3, 1, 2];
console.log(
  "Array:",
  array8,
  "| Next permutation:",
  nextPermutationBruteForce(array8)
);

array8 = [1, 2, 3];
console.log(
  "Array:",
  array8,
  "| Next permutation:",
  nextPermutationBruteForce(array8)
);

array8 = [1, 1, 5];
console.log(
  "Array:",
  array8,
  "| Next permutation:",
  nextPermutationBruteForce(array8)
);

console.log();

/**
 * Optimal solution
 *
 * Intuition:
 * 1. Longer prefix match | find breakpoint -> arr[i] < arr[i + 1]
 * 2. Find greater than arr[i] but the smallest one -> swap with arr[i]
 * 3. Reverse the suffix
 *
 * Algorithm:
 * 1. Find breakpoint index
 * 2. Find first greater than arr[i]
 * 3. Reverse the suffix
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */

function nextPermutationOptimal(arr: number[]): number[] {
  let index: number = -1;

  // 1. Find breakpoint index | O(n)
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      index = i;
      break;
    }
  }

  if (index === -1) return arr.sort((a, b) => a - b); // O(nlogn)

  // 2. Find greater than arr[i] but the smallest one | O(n)
  for (let i = arr.length - 1; i > index; i--) {
    if (arr[i] > arr[index]) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
      break;
    }
  }

  // 3. Reverse the suffix | O(n)
  for (let i = index + 1, j = arr.length - 1; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

console.log("Optimal solution");

array8 = [3, 1, 2];
console.log(
  "Array:",
  array8,
  "| Next permutation:",
  nextPermutationOptimal(array8)
);
array8 = [1, 2, 3];
console.log(
  "Array:",
  array8,
  "| Next permutation:",
  nextPermutationOptimal(array8)
);
array8 = [1, 1, 5];
console.log(
  "Array:",
  array8,
  "| Next permutation:",
  nextPermutationOptimal(array8)
);
console.log();
