"""
Given an array of sorted numbers, remove all duplicates from it. 
You should not use any extra space; after removing the duplicates in-place 
return the length of the subarray that has no duplicate in it.

Solution:
 As the input array is sorted, therefore, one way to do this is to shift the elements left whenever we encounter duplicates.
 In other words, we will keep one pointer for iterating the array and one pointer for placing the next non-duplicate number. 
 So our algorithm will be to iterate the array and whenever we see a non-duplicate number we move it next to the last non-duplicate number we’ve seen.

Difficulty: Easy
"""


def remove_duplicates(arr):
    # index of the next non-duplicate element
    next_non_duplicate = 1

    i = 1
    while(i < len(arr)):
        if arr[next_non_duplicate - 1] != arr[i]:
            arr[next_non_duplicate] = arr[i]
            next_non_duplicate += 1
        i += 1

    return next_non_duplicate
