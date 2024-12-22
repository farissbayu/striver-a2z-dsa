function twoSum(arr, k) {
  const hashmap = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (hashmap.has(k - arr[i])) {
      return [hashmap.get(k - arr[i]), i];
    }

    hashmap.set(arr[i], i);
  }

  return [-1];
}

function main() {
  console.log("- Array Problem Medium -");
  console.log();

  console.log("Two Sum Problem");
  console.log("Array: [2, 6, 5, 8, 11], Target: 14");
  console.log("Result: ", twoSum([2, 6, 5, 8, 11], 14));
  console.log("Array: [3, 2, 4], Target: 6");
  console.log("Result: ", twoSum([3, 2, 4], 6));
  console.log();
}

main();
