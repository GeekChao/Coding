"""
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

Difficulty: Easy
"""


def pair_with_targetsum(arr, target_sum):
    pairStart, pairEnd = 0, len(arr) - 1

    while pairStart < pairEnd:
        current_sum = arr[pairStart] + arr[pairEnd]
        if target_sum == current_sum:
            return [pairStart, pairEnd]
        elif target_sum > current_sum:
            pairStart += 1
        else:
            pairEnd -= 1

    return [-1, -1]


assert(pair_with_targetsum([1, 2, 3, 4, 6], 6) == [1, 3])

assert(pair_with_targetsum([2, 5, 9, 11], 11) == [0, 2])
