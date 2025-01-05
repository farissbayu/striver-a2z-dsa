// GeekForGeeks
function minimumJumps(arr) {
  let maxReach = 0;
  let lastIndex = 0;
  let jumps = 0;

  if (arr.length === 1) return 0;

  for (let i = 0; i < arr.length; i++) {
    maxReach = Math.max(maxReach, i + arr[i]);
    if (i === lastIndex) {
      // time to jump
      if (maxReach === i) {
        // condition when we can jump to next element
        jumps = -1;
        break;
      }

      jumps++;
      lastIndex = maxReach;

      if (maxReach >= arr.length - 1) {
        // break the loop when last element can be reached
        break;
      }
    }
  }

  return jumps;
}
