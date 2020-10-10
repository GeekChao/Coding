"""
Given an array containing 0s, 1s and 2s, sort the array in-place. 
You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s to recreate the array.

Difficulty: Medium
"""


def dutch_flag_sort(arr):
    i, low, high = 0, 0, len(arr) - 1

    while i <= high:
        if arr[i] == 0:
            arr[i], arr[low] = arr[low], arr[i]
            low += 1
            i += 1
        elif arr[i] == 2:
            arr[i], arr[high] = arr[high], arr[i]
            high -= 1
        else:
            i += 1

    return arr
