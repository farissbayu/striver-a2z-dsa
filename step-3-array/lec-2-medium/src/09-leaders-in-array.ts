// GeekForGeeks: Array Leaders

/**
 * Brute force solution
 *
 * 1. Loop through the array
 * 2. For each element, check if it is greater than all the elements to its right
 * 3. If it is, add it to the result array
 * 4. Return the result array
 *
 * Time complexity: O(n^2)
 * Space complexity: O(n)
 */
function leadersInArrayBruteForce(arr: number[]): number[] {
  let arrResult: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    let isLeader = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        isLeader = false;
        break;
      }
    }
    if (isLeader) {
      arrResult.push(arr[i]);
    }
  }

  return arrResult;
}

console.log("Brute force solution");

let array9: number[] = [16, 17, 4, 3, 5, 2];
console.log("Array:", array9, "| Leaders:", leadersInArrayBruteForce(array9));
array9 = [10, 4, 2, 4, 1];
console.log("Array:", array9, "| Leaders:", leadersInArrayBruteForce(array9));
array9 = [5, 10, 20, 40];
console.log("Array:", array9, "| Leaders:", leadersInArrayBruteForce(array9));
console.log();

/**
 * Optimal solution
 *
 * 1. Start from the last element
 * 2. The last element is always a leader
 * 3. Loop through the array from the second last element
 * 4. If the current element is greater than the max element so far
 * 5. Add it to the result array
 * 6. Update the max element
 * 7. Return the result array
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function leadersInArrayOptimal(arr: number[]): number[] {
  let max = arr[arr.length - 1];
  let arrResult: number[] = [max];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] >= max) {
      arrResult.push(arr[i]);
      max = arr[i];
    }
  }

  return arrResult.reverse();
}

console.log("Optimal solution");
array9 = [16, 17, 4, 3, 5, 2];
console.log("Array:", array9, "| Leaders:", leadersInArrayOptimal(array9));
array9 = [10, 4, 2, 4, 1];
console.log("Array:", array9, "| Leaders:", leadersInArrayOptimal(array9));
array9 = [5, 10, 20, 40];
console.log("Array:", array9, "| Leaders:", leadersInArrayOptimal(array9));
console.log();
