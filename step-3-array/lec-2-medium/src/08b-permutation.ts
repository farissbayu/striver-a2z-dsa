function recursivePermutationB(
  index: number,
  arr: number[],
  ans: number[][]
): void {
  // base case: if the current index is the same as the length of the input array
  // add the current permutation to the list of permutations
  if (index === arr.length) {
    ans.push([...arr]);
    return;
  }

  // recursive case: try to swap every element with the current index
  for (let i = index; i < arr.length; i++) {
    [arr[index], arr[i]] = [arr[i], arr[index]]; // swapping elements
    recursivePermutationB(index + 1, arr, ans); // recursive call with the next index, with the swapped elements
    [arr[index], arr[i]] = [arr[i], arr[index]]; // backtrack: swap the elements back | restore the original array
  }
}

function permutationB(arr: number[]): number[][] {
  let ans: number[][] = []; // to store the list of all permutations

  recursivePermutationB(0, arr, ans);

  // sort the permutations
  ans.sort((a, b) => {
    const numA = parseInt(a.join(""));
    const numB = parseInt(b.join(""));
    return numA - numB;
  });

  return ans;
}

let array8b: number[] = [1, 1, 5];
console.log("Array:", array8b, "| Permutations:", permutationB(array8b));
