/**
 * Problem: Knapsack
 * Given two integer arrays to represent weights and profits of ‘N’ items, we need to find a subset of these items which will give us maximum profit such that their cumulative weight is not more than a given number ‘C.’
 * Each item can only be selected once, which means either we put an item in the knapsack or we skip it.
 *
 * Difficulty: Medium
 */

let solveKnapsack = function (profits, weights, capacity) {
  const dp = []

  function knapsackRecursive(profits, weights, capacity, currentIndex) {
    // base checks
    if (capacity <= 0 || currentIndex >= profits.length) return 0

    dp[currentIndex] = dp[currentIndex] || []
    if (typeof dp[currentIndex][capacity] !== "undefined") {
      return dp[currentIndex][capacity]
    }

    // recursive call after choosing the element at the currentIndex
    // if the weight of the element at currentIndex exceeds the capacity, we shouldn't process this
    let profit1 = 0
    if (weights[currentIndex] <= capacity) {
      profit1 =
        profits[currentIndex] +
        knapsackRecursive(
          profits,
          weights,
          capacity - weights[currentIndex],
          currentIndex + 1
        )
    }

    // recursive call after excluding the element at the currentIndex
    const profit2 = knapsackRecursive(
      profits,
      weights,
      capacity,
      currentIndex + 1
    )

    dp[currentIndex][capacity] = Math.max(profit1, profit2)
    return dp[currentIndex][capacity]
  }

  return knapsackRecursive(profits, weights, capacity, 0)
}

var profits = [1, 6, 10, 16]
var weights = [1, 2, 3, 5]
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`)
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`)
