function recursivePermutationA(
  arr: number[],
  ans: number[][],
  ds: number[],
  freq: boolean[]
): void {
  // base case: if the current permutation has the same length as the input array
  // add the current permutation to the list of permutations
  if (ds.length == arr.length) {
    ans.push([...ds]);
    return;
  }

  // recursive case: try to add every element from the input array to the current permutation
  for (let i = 0; i < arr.length; i++) {
    // if the element is not used yet
    if (!freq[i]) {
      freq[i] = true; // mark the element as used
      ds.push(arr[i]); // add the element to the current permutation
      recursivePermutationA(arr, ans, ds, freq); // recursive call
      ds.pop(); // backtrack: remove the element from the current permutation
      freq[i] = false; // unmark the element
    }
  }
}

function permutationA(arr: number[]): number[][] {
  let ans: number[][] = []; // to store the list of all permutations
  let ds: number[] = []; // to store current permutation
  let freq: boolean[] = new Array(arr.length).fill(false); // to keep track of used elements

  recursivePermutationA(arr, ans, ds, freq);

  // sort the permutations
  ans.sort((a, b) => {
    const numA = parseInt(a.join(""));
    const numB = parseInt(b.join(""));
    return numA - numB;
  });

  return ans;
}

let array8a: number[] = [3, 1, 2];
console.log("Array:", array8a, "| Permutations:", permutationA(array8a));
