"""
Problem: Given a sorted array of numbers, find if a given number ‘key’ is present in the array. 
Though we know that the array is sorted, we don’t know if it’s sorted in ascending or descending order. 
You should assume that the array can have duplicates.

Difficulty: Easy
"""

def binary_search(arr, key):
  low, high = 0, len(arr) - 1
  isAscending = True if arr[0] < arr[-1] else False

  while low <= high:
    mid = (low + high) // 2

    if key == arr[mid]:
      return mid
    elif (key < arr[mid] and isAscending) or (key > arr[mid] and not isAscending):
      high = mid - 1
    else:
      low = mid + 1

  return -1

def main():
  print(binary_search([4, 6, 10], 10))
  print(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
  print(binary_search([10, 6, 4], 10))
  print(binary_search([10, 6, 4], 4))


main()
