"""
Problem: We are given an array containing ‘n’ distinct numbers taken from the range 0 to ‘n’. Since the array has only ‘n’ numbers out of the total ‘n+1’ numbers, find the missing number.

Difficulty: Easy
"""

def find_missing_number(nums):
    i = 0
    while i < len(nums):
        j = nums[i]
        if j < len(nums) and nums[i] != nums[j]:
            nums[i], nums[j] = nums[j], nums[i]
        else:
            i += 1
        print(nums)
    
    for index in range(len(nums)):
        if index != nums[index]:
            return index

    return -1

assert(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1]) == 7)
