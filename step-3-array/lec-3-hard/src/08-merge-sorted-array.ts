// Leetcode: 88 Merge sorted array

/**
 * Brute force
 *
 * 1. Define temporary array to store the sorted array
 * 2. Define left, right and index as 0
 * 3. While left < m and right < n do loop
 * 4. If current nums1 is less than current nums2
 *    - Insert nums1 into tempArr
 *    - Increment left
 * 5. Else
 *    - Insert nums2 into tempArr
 *    - Incremenet Right
 * 6. Increment index
 * 7. While left < m, store every nums1 into tempArr
 * 8. While right < n, store every nums2 into tempArr
 * 9. Store tempArr into nums1
 *
 * Time Complexity: O(m + n) + O(m + n)
 * Space Complexity: O(m + n)
 */
function mergeSortedArrayBruteForce(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  const tempArr: number[] = new Array(m + n);
  let left = 0;
  let right = 0;

  let index = 0;

  while (left < m && right < n) {
    if (nums1[left] <= nums2[right]) {
      tempArr[index] = nums1[left];
      left++;
    } else {
      tempArr[index] = nums2[right];
      right++;
    }
    index++;
  }

  while (left < m) {
    tempArr[index++] = nums1[left++];
  }

  while (right < n) {
    tempArr[index++] = nums2[right++];
  }

  for (let i = 0; i < m + n; i++) {
    nums1[i] = tempArr[i];
  }

  return nums1;
}

let arr7 = [1, 2, 3, 0, 0, 0];
let m8 = 3;
let arr8 = [2, 5, 6];
let n8 = 3;
console.log(mergeSortedArrayBruteForce(arr7, m8, arr8, n8));

arr7 = [1];
m8 = 1;
arr8 = [];
n8 = 0;
console.log(mergeSortedArrayBruteForce(arr7, m8, arr8, n8));

arr7 = [0];
m8 = 0;
arr8 = [1];
n8 = 1;
console.log(mergeSortedArrayBruteForce(arr7, m8, arr8, n8));

/**
 * Optimal solution | Two pointer
 *
 * 1. Define three pointers p1, p2 and p
 * 2. p1 = m - 1, p2 = n - 1, p = nums1.length - 1
 * 3. While p1 >= 0 and p2 >= 0 do loop
 *    - If nums1[p1] >= nums2[p2]
 *      - nums1[p] = nums1[p1]
 *      - Decrement p1
 *    - Else
 *      - nums1[p] = nums2[p2]
 *      - Decrement p2
 *    - Decrement p
 * 4. While p2 >= 0 do loop
 *    - nums1[p] = nums2[p2]
 *    - Decrement p2
 *    - Decrement p
 * 5. Return nums1
 *
 * Time Complexity: O(m + n)
 * Space Complexity: O(1)
 */
function mergeSortedArrayOptimal(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): number[] {
  let p1 = m - 1; // pointer for nums1
  let p2 = n - 1; // pointer for nums2
  let p = nums1.length - 1; // pointer for extra space in nums1

  // insert larger element into extra space
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] >= nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  // insert all nums2 into nums1 according to p
  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }

  return nums1;
}

arr7 = [1, 2, 3, 0, 0, 0];
m8 = 3;
arr8 = [2, 5, 6];
n8 = 3;
console.log(mergeSortedArrayOptimal(arr7, m8, arr8, n8));

arr7 = [1];
m8 = 1;
arr8 = [];
n8 = 0;
console.log(mergeSortedArrayOptimal(arr7, m8, arr8, n8));

arr7 = [0];
m8 = 0;
arr8 = [1];
n8 = 1;
console.log(mergeSortedArrayOptimal(arr7, m8, arr8, n8));
