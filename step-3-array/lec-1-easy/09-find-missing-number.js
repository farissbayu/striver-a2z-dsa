function missingNumber(nums) {
  const n = nums.length;
  const total = (n * (n + 1)) / 2;
  const numsTotal = nums.reduce((acc, cur) => acc + cur, 0);

  return total - numsTotal;
}

let nums = [3, 0, 1];
console.log("Nums:", nums, "| Missing number:", missingNumber(nums));
nums = [0, 1];
console.log("Nums:", nums, "| Missing number:", missingNumber(nums));
