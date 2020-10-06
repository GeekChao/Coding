"""
Problem: Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

Difficulty: Easy
"""


def max_sub_array_of_size_k(k, arr):
    if k > len(arr):
        return -1

    max_window_sum = sum(arr[0: k])
    window_sum = max_window_sum

    for i in range(1, len(arr) - k + 1):
        window_sum = window_sum - arr[i - 1] + arr[i + k - 1]
        max_window_sum = max(max_window_sum, window_sum)

    return max_window_sum


assert(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]) == 7)

assert(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]) == 9)
