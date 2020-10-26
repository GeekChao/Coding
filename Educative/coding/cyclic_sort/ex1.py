"""
Problem: Write a function to sort the objects in-place on their creation sequence number in O(n)O(n) and without any extra space.
Difficulty: Easy
"""

def cyclic_sort(nums):
  i = 0
  while i < len(nums):
    j = nums[i] - 1
    if nums[i] != nums[j]:
      nums[i], nums[j] = nums[j], nums[i]  # swap
    else:
      i += 1
  return nums