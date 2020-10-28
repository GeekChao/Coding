"""
Problem: Given a set with distinct elements, find all of its distinct subsets.

Difficulty: Easy
"""

def find_subsets(nums):
  queue = [[]]

  for i in range(len(nums)):
      newQueue = [subset + [nums[i]] for subset in queue]
      queue.extend(newQueue)

  return queue

def main():

  print("Here is the list of subsets: " + str(find_subsets([1, 3])))
  print("Here is the list of subsets: " + str(find_subsets([1, 5, 3])))


main()