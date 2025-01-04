// Leetcode: 121. Best Time to Buy and Sell Stock

/**
 * Brute force solution
 *
 * 1. Loop through the array (i)
 * 2. Loop through the array (j)
 * 3. Calculate the maximum profit
 * 4. Return the maximum profit
 *
 * Time complexity: O(n^2)
 * Space complexity: O(1)
 */
function stockBuyAndSell(arr) {
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > maxProfit) {
        maxProfit = Math.max(maxProfit, arr[j] - arr[i]);
      }
    }
  }

  return maxProfit;
}

console.log("Brute force solution");
let array = [7, 1, 5, 3, 6, 4];
console.log("Array:", array, "| Maximum profit:", stockBuyAndSell(array));
array = [7, 6, 4, 3, 1];
console.log("Array:", array, "| Maximum profit:", stockBuyAndSell(array));
console.log();

/**
 * Optimal solution
 *
 * 1. Initialize the minimum price and maximum profit
 * 2. Loop through the array
 * 3. Calculate the maximum profit
 * 4. Return the maximum profit
 *
 * Time complexity: O(n)
 * Space complexity: O(1)
 */
function stockBuyAndSellOptimal(arr) {
  let maxProfit = 0;
  let minPrice = Infinity;

  for (let i = 0; i < arr.length; i++) {
    // Compare current price with minimum price -> update minimum price
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    }

    // Compare current price with minimum price -> update maximum profit
    if (arr[i] - minPrice > maxProfit) {
      maxProfit = arr[i] - minPrice;
    }
  }

  return maxProfit;
}

console.log("Optimal solution");
array = [7, 1, 5, 3, 6, 4];
console.log(
  "Array:",
  array,
  "| Maximum profit:",
  stockBuyAndSellOptimal(array)
);
array = [7, 6, 4, 3, 1];
console.log(
  "Array:",
  array,
  "| Maximum profit:",
  stockBuyAndSellOptimal(array)
);
console.log();
