// GeekForGeeks: Merge sort
class Solution {
  mergeSort(arr, l, r) {
    // code here
    if (l >= r) return;

    let m = Math.floor((l + r) / 2);

    this.mergeSort(arr, l, m);
    this.mergeSort(arr, m + 1, r);

    this.merge(arr, l, m, r);

    return arr;
  }

  merge(arr, l, m, h) {
    let temp = [];

    let left = l;
    let right = m + 1;

    while (left <= m && right <= h) {
      if (arr[left] <= arr[right]) {
        temp.push(arr[left]);
        left++;
      } else {
        temp.push(arr[right]);
        right++;
      }
    }

    while (left <= m) {
      temp.push(arr[left]);
      left++;
    }

    while (right <= h) {
      temp.push(arr[right]);
      right++;
    }

    for (let i = l; i <= h; i++) {
      arr[i] = temp[i - l];
    }
  }
}
