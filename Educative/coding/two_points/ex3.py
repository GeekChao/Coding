"""
Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

Difficulty: Easy
"""


def square(x):
    return x * x


def make_squares(arr):
    n = len(arr)
    squares = [0 for x in range(n)]
    highestSquareIdx = n - 1
    start, end = 0, len(arr) - 1

    while start <= end:
        left, right = square(arr[start]), square(arr[end])

        if left <= right:
            squares[highestSquareIdx] = right
            end -= 1
        else:
            squares[highestSquareIdx] = left
            start += 1

        highestSquareIdx -= 1

    return squares


assert(make_squares([-2, -1, 0, 2, 3]) == [0, 1, 4, 4, 9])
