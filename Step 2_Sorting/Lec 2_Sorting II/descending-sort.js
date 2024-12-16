function main() {
  console.log("- Sorting II -");

  console.log("Merge sort | O(N log N)");
  console.log(mergeSort([4, 1, 3, 9, 7], 0, 4));
  console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 9));
  console.log(mergeSort([1, 3, 2], 0, 2));

  console.log("Recursive bubble sort | O(N^2)");
  console.log(recursiveBubbleSort([4, 1, 3, 9, 7], 0, 4));
  console.log(recursiveBubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 9));
  console.log(recursiveBubbleSort([1, 3, 2], 0, 2));

  console.log("Recursive insertion sort | O(N^2)");
  console.log(recursiveInsertionSort([4, 1, 3, 9, 7], 0, 4));
  console.log(recursiveInsertionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 9));
  console.log(recursiveInsertionSort([1, 3, 2], 0, 2));

  console.log("Quick sort | O(N log N)");
  console.log(quickSort([4, 1, 3, 9, 7], 0, 4));
  console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1], 0, 9));
  console.log(quickSort([1, 3, 2], 0, 2));
}

main();
