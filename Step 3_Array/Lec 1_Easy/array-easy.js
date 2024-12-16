// Optimal solution
function largestElement(arr) {
  if (arr.length === 0) return "empty array";
  if (arr.length === 1) return arr[0];

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Optimal solution
function secondSmallestLargest(arr) {
  let smallest = arr[0];
  let largest = arr[0];

  let secondSmallest = Number.MAX_VALUE;
  let secondLargest = Number.MIN_VALUE;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }

    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] > smallest) {
      secondSmallest = arr[i];
    }
  }

  if (secondLargest === Number.MIN_VALUE && secondSmallest === Number.MAX_VALUE)
    return [-1, -1];
  return [secondSmallest, secondLargest];
}

// Optimal solution
function checkIfSorted(arr) {
  let isSorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
    }
  }
  return isSorted;
}

// Brute force solution
function removeDuplicates(nums) {
  let cur = nums[0];
  let i = 1;

  while (i < nums.length) {
    if (nums[i] === cur) {
      nums.splice(i, 1);
    } else {
      cur = nums[i];
      i++;
    }
  }

  return nums;
}

function leftRotateArrayByOne(arr) {
  const temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
}

function main() {
  console.log("- Array Problem Easy -\n");

  console.log("Largest element in array");
  console.log("Array: ", [2, 5, 1, 3, 0]);
  console.log("Max: ", largestElement([2, 5, 1, 3, 0]));
  console.log("Array: ", [8, 10, 5, 7, 9]);
  console.log("Max: ", largestElement([8, 10, 5, 7, 9]));

  console.log("\nSecond smallest and second largest element in array");
  console.log("Array: ", [1, 2, 4, 7, 7, 5]);
  console.log(
    "Second smallest: ",
    secondSmallestLargest([1, 2, 4, 7, 7, 5])[0]
  );
  console.log(
    "\nSecond largest: ",
    secondSmallestLargest([1, 2, 4, 7, 7, 5])[1]
  );
  console.log("Array: ", [1, 1]);
  console.log("Second smallest: ", secondSmallestLargest([1, 1])[0]);
  console.log("Second largest: ", secondSmallestLargest([1, 1])[1]);

  console.log("\nCheck if array is sorted");
  console.log("Array: ", [1, 2, 3, 4, 5]);
  console.log("Array is sorted: ", checkIfSorted([1, 2, 3, 4, 5]));
  console.log("Array: ", [5, 4, 6, 7, 8]);
  console.log("Array is sorted: ", checkIfSorted([5, 4, 6, 7, 8]));

  console.log("\nRemove duplicates from sorted array");
  console.log("Array: ", [1, 1, 2, 2, 2, 3, 3]);
  console.log("Removed duplicates: ", removeDuplicates([1, 1, 2, 2, 2, 3, 3]));
  console.log("Array: ", [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4]);
  console.log(
    "Removed duplicates: ",
    removeDuplicates([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4])
  );

  console.log("\nLeft rotate the array by one");
  console.log("Array: ", [1, 2, 3, 4, 5]);
  console.log(
    "Array after rotated by one: ",
    leftRotateArrayByOne([1, 2, 3, 4, 5])
  );
  console.log("Array: ", [5, 4, 6, 7, 8]);
  console.log(
    "Array after rotated by one: ",
    leftRotateArrayByOne([5, 4, 6, 7, 8])
  );

  console.log("\nLeft rotate the array by d");
  console.log("Array: ", [1, 2, 3, 4, 5]);
  console.log(
    "Array after rotated by d: ",
    leftRotateArrayByOne([1, 2, 3, 4, 5])
  );
  console.log("Array: ", [5, 4, 6, 7, 8]);
  console.log(
    "Array after rotated by d: ",
    leftRotateArrayByOne([5, 4, 6, 7, 8])
  );
}

main();
