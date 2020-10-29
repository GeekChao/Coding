"""
Problem: Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. 
The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

Difficulty: Medium
"""

def find_range(arr, key):
  startIndex, endIndex = -1, -1
  low, high = 0, len(arr) - 1

  while low <= high:
    mid = (low + high) // 2
    if arr[mid] == key:
      startIndex, endIndex = mid, mid
      # move backwards to find the start point of the range
      while startIndex - 1 >= 0 and arr[startIndex - 1] == key: 
        startIndex -= 1
      # move forwards to find the end point of the range
      while endIndex + 1 < len(arr) and arr[endIndex + 1] == key:
        endIndex += 1
      
      return [startIndex, endIndex]
    elif arr[mid] < key:
      low = mid + 1
    else:
      high = mid - 1
      
  return [startIndex, endIndex]

def main():
  print(find_range([4, 6, 6, 6, 9], 6))
  print(find_range([1, 3, 8, 10, 15], 10))
  print(find_range([1, 3, 8, 10, 15], 12))


main()