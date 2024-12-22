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

function leftRotateArrayByK(arr, k) {
  k %= arr.length;

  const reverse = (start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };

  reverse(0, arr.length - 1);
  reverse(0, k - 1);
  reverse(k, arr.length - 1);

  return arr;
}

function moveZeroes(arr) {
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
}

function linearSearch(arr, num) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      result = i;
      break;
    }
  }

  return result;
}

function unionArray(arr1, arr2) {
  const n1 = arr1.length;
  const n2 = arr2.length;

  let i = 0;
  let j = 0;

  const unionArray = [];

  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      if (
        unionArray.length === 0 ||
        arr1[i] !== unionArray[unionArray.length - 1]
      ) {
        unionArray.push(arr1[i]);
      }
      i++;
    } else {
      if (
        unionArray.length === 0 ||
        arr2[j] !== unionArray[unionArray.length - 1]
      ) {
        unionArray.push(arr2[j]);
      }
      j++;
    }
  }

  while (i < n1) {
    if (
      unionArray.length === 0 ||
      arr1[i] !== unionArray[unionArray.length - 1]
    ) {
      unionArray.push(arr1[i]);
    }
    i++;
  }

  while (j < n2) {
    if (
      unionArray.length === 0 ||
      arr2[j] !== unionArray[unionArray.length - 1]
    ) {
      unionArray.push(arr2[j]);
    }
    j++;
  }

  return unionArray;
}

function findMissingArray(arr, n) {
  const total = (n * (n + 1)) / 2;
  const arrTotal = arr.reduce((acc, cur) => acc + cur, 0);

  return total - arrTotal;
}

function maximumConsecutiveOnes(arr) {
  let counter = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      counter++;
      if (max < counter) {
        max = counter;
      }
    } else {
      counter = 0;
    }
  }
  return max;
}

function findTheNumberThatAppearsOnce(arr) {
  let i = 0;
  const counter = {};
  while (i < arr.length) {
    counter[arr[i]] = counter[arr[i]] ? counter[arr[i]] + 1 : 1;
    i++;
  }

  return Number(Object.keys(counter).find((key) => counter[key] === 1));
}

function longestSubarrayWithK(arr, k) {
  let sum = 0;
  let maxLen = 0;
  let prefixSumMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === k) {
      maxLen = i + 1;
    }

    const remaining = sum - k;
    if (prefixSumMap.has(remaining)) {
      const len = i - prefixSumMap.get(remaining);
      maxLen = Math.max(maxLen, len);
    }

    if (!prefixSumMap.has(sum)) {
      prefixSumMap.set(sum, i);
    }
  }

  return maxLen;
}

function main() {
  console.log("- Array Problem Easy -");
  console.log();

  console.log("Largest element in array");
  console.log("Array: ", [2, 5, 1, 3, 0]);
  console.log("Max: ", largestElement([2, 5, 1, 3, 0]));
  console.log("Array: ", [8, 10, 5, 7, 9]);
  console.log("Max: ", largestElement([8, 10, 5, 7, 9]));
  console.log();

  console.log("Second smallest and second largest element in array");
  console.log("Array: ", [1, 2, 4, 7, 7, 5]);
  console.log(
    "Second smallest: ",
    secondSmallestLargest([1, 2, 4, 7, 7, 5])[0]
  );
  console.log("Second largest: ", secondSmallestLargest([1, 2, 4, 7, 7, 5])[1]);
  console.log("Array: ", [1, 1]);
  console.log("Second smallest: ", secondSmallestLargest([1, 1])[0]);
  console.log("Second largest: ", secondSmallestLargest([1, 1])[1]);
  console.log();

  console.log("Check if array is sorted");
  console.log("Array: ", [1, 2, 3, 4, 5]);
  console.log("Array is sorted: ", checkIfSorted([1, 2, 3, 4, 5]));
  console.log("Array: ", [5, 4, 6, 7, 8]);
  console.log("Array is sorted: ", checkIfSorted([5, 4, 6, 7, 8]));
  console.log();

  console.log("Remove duplicates from sorted array");
  console.log("Array: ", [1, 1, 2, 2, 2, 3, 3]);
  console.log("Removed duplicates: ", removeDuplicates([1, 1, 2, 2, 2, 3, 3]));
  console.log("Array: ", [1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4]);
  console.log(
    "Removed duplicates: ",
    removeDuplicates([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4])
  );
  console.log();

  console.log("Left rotate the array by one");
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
  console.log();

  console.log("Left rotate the array by k");
  console.log("Array: ", [-1, -100, 3, 99]);
  console.log(
    "Array after rotated by k: ",
    leftRotateArrayByK([-1, -100, 3, 99], 2)
  );
  console.log("Array: ", [1, 2, 3, 4, 5, 6, 7]);
  console.log(
    "Array after rotated by k: ",
    leftRotateArrayByK([1, 2, 3, 4, 5, 6, 7], 3)
  );
  console.log();

  console.log("Move zeroes to end of array");
  console.log("Array: ", [1, 0, 2, 3, 0, 4, 0, 1]);
  console.log(
    "Array after zeroes moved to end of array: ",
    moveZeroes([1, 0, 2, 3, 0, 4, 0, 1])
  );
  console.log("Array: ", [1, 2, 0, 1, 0, 4, 0]);
  console.log(
    "Array after zeroes moved to end of array: ",
    moveZeroes([1, 2, 0, 1, 0, 4, 0])
  );
  console.log("Array: ", [0, 0, 1]);
  console.log(
    "Array after zeroes moved to end of array: ",
    moveZeroes([0, 0, 1])
  );
  console.log();

  console.log("Linear search");
  console.log("Array: ", [1, 2, 3, 4, 5], " Num: ", 3);
  console.log("Result: ", linearSearch([1, 2, 3, 4, 5], 3));
  console.log("Array: ", [5, 4, 3, 2, 1], " Num: ", 5);
  console.log("Result: ", linearSearch([5, 4, 3, 2, 1], 5));
  console.log();

  console.log("Union of two sorted array");
  console.log("Array1: ", [1, 2, 3, 4, 5], "Array2: ", [2, 3, 4, 4, 5]);
  console.log(unionArray([1, 2, 3, 4, 5], [2, 3, 4, 4, 5]));
  console.log();

  console.log("Find missing number in an array");
  console.log("Array:", [1, 2, 4, 5], "N:", 5);
  console.log("Missing number: ", findMissingArray([1, 2, 4, 5], 5));
  console.log("Array:", [1, 3], "N:", 3);
  console.log("Missing number: ", findMissingArray([1, 3], 3));
  console.log();

  console.log("Maximum consecutive ones in an array");
  console.log("Array:", [1, 1, 0, 1, 1, 1]);
  console.log(
    "Maximum consecutive ones: ",
    maximumConsecutiveOnes([1, 1, 0, 1, 1, 1])
  );
  console.log("Array:", [1, 0, 1, 1, 0, 1]);
  console.log("Missing number: ", maximumConsecutiveOnes([1, 0, 1, 1, 0, 1]));
  console.log();

  console.log("Find the number that appears once in an array");
  console.log("Array:", [2, 2, 1]);
  console.log(
    "Number that appears once: ",
    findTheNumberThatAppearsOnce([2, 2, 1])
  );
  console.log("Array:", [4, 1, 2, 1, 2]);
  console.log(
    "Number that appears once: ",
    findTheNumberThatAppearsOnce([4, 1, 2, 1, 2])
  );
  console.log();

  console.log("Longest subarray with sum K");
  console.log("Array:", [1, 2, 3, 1, 1, 1, 1], "K:", 3);
  console.log(
    "Length of longest subarray: ",
    longestSubarrayWithK([1, 2, 3, 1, 1, 1, 1], 3)
  );
  console.log("Array:", [2, 3, 5, 1, 9], "K:", 10);
  console.log(
    "Length of longest subarray: ",
    longestSubarrayWithK([2, 3, 5, 1, 9], 10)
  );
  console.log();
}

main();
