"""
Problem: Given a set of positive numbers, determine if there exists a subset whose sum is equal to a given number ‘S’.

"""

# Here is the code for our bottom-up dynamic programming approach:
def can_partition(num, sum):
  n = len(num)
  dp = [[False for x in range(sum+1)] for y in range(n)]

  # populate the sum = 0 columns, as we can always form '0' sum with an empty set
  for i in range(0, n):
    dp[i][0] = True

  # with only one number, we can form a subset only when the required sum is
  # equal to its value
  for s in range(1, sum+1):
    dp[0][s] = True if num[0] == s else False

  # process all subsets for all sums
  for i in range(1, n):
    for s in range(1, sum+1):
      # if we can get the sum 's' without the number at index 'i'
      if dp[i - 1][s]:
        dp[i][s] = dp[i - 1][s]
      elif s >= num[i]:
        # else include the number and see if we can find a subset to get the remaining sum
        dp[i][s] = dp[i - 1][s - num[i]]

  # the bottom-right corner will have our answer.
  return dp[n - 1][sum]


# bottom-up DP solution? Can you find an algorithm that has O(S)O(S) space complexity
def can_partition(num, sum):
    n = len(num)
    dp = [False for x in range(sum+1)]

    # handle sum=0, as we can always have '0' sum with an empty set
    dp[0] = True

    # with only one number, we can have a subset only when the required sum is equal to its value
    for s in range(1, sum+1):
        dp[s] = num[0] == s

    # process all subsets for all sums
    for i in range(1, n):
        for s in range(sum, -1, -1):
            # if dp[s]==true, this means we can get the sum 's' without num[i], hence we can move on to
            # the next number else we can include num[i] and see if we can find a subset to get the
            # remaining sum
            if not dp[s] and s >= num[i]:
                dp[s] = dp[s - num[i]]

    return dp[sum]


def main():
    print("Can partition: " + str(can_partition([1, 2, 3, 7], 6)))
    print("Can partition: " + str(can_partition([1, 2, 7, 1, 5], 10)))
    print("Can partition: " + str(can_partition([1, 3, 4, 8], 6)))


main()