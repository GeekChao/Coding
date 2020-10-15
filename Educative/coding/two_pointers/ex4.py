"""
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible,
return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Difficulty: Medium
"""

import math


def triplet_sum_close_to_target(arr, target_sum):
    min_diff = math.inf
    arr.sort()

    for i in range(len(arr) - 2):
        left, right = i + 1, len(arr) - 1

        while left < right:
            triplet_sum = arr[i] + arr[left] + arr[right]
            diff = abs(triplet_sum - target_sum)

            if diff == 0:
                return target_sum

            min_diff = min(diff, min_diff)

            if triplet_sum > target_sum:
                right -= 1
            else:
                left += 1

    return target_sum - min_diff
