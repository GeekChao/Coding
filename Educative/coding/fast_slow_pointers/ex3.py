"""
Problem: Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

Difficulty: Medium
"""

# Solution one: a hashmap


def calcNum(num):
    digits = [int(x) for x in str(num)]
    sum = 0

    for x in digits:
        sum += x * x

    return sum


def isHappyNum(num):
    map = {}

    while True:
        if num == 1:
            return True

        if num in map:
            return False

        map[num] = num
        num = calcNum(num)


assert(isHappyNum(23) == True)
assert(isHappyNum(12) == False)


# Solution two: fast / slow pointer
# The process to find out if a number is a happy number or not, always ends in a cycle.

def find_happy_number(num):
    slow, fast = num, num
    while True:
        slow = find_square_sum(slow)  # move one step
        fast = find_square_sum(find_square_sum(fast))  # move two steps
        if slow == fast:  # found the cycle
            break
    return slow == 1  # see if the cycle is stuck on the number '1'


def find_square_sum(num):
    _sum = 0
    while (num > 0):
        digit = num % 10
        _sum += digit * digit
        num //= 10
    return _sum
