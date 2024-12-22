// GeekForGeeks: Quick Sort
class Solution {
  partition(arr, low, high) {
    // Your code here
    let pivot = arr[low];
    let i = low;
    let j = high;

    while (i < j) {
      while (arr[i] <= pivot && i <= high - 1) {
        i++;
      }

      while (arr[j] > pivot && j >= low + 1) {
        j--;
      }

      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    [arr[low], arr[j]] = [arr[j], arr[low]];

    return j;
  }

  quickSort(arr, low, high) {
    // code here
    if (low < high) {
      let pIndex = this.partition(arr, low, high);
      this.quickSort(arr, low, pIndex - 1);
      this.quickSort(arr, pIndex + 1, high);
    }

    return arr;
  }
}
