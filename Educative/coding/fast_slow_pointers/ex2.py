"""
Problem: Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.

Difficulty: Medium
"""


class Node:
    def __init__(self, value, next=None):
        self.value = value
        self.next = next


def cal_cycle_length(node):
    start, length = node, 1

    while node.next is not start:
        length += 1
        node = node.next

    return length


def find_cycle_length(head):
    slow, fast = head, head

    while fast is not None and fast.next is not None:
        slow = slow.next
        fast = fast.next.next

        if slow == fast:  # meet up
            return cal_cycle_length(slow)

    return 0


def find_cycle_start(head):
    slow, fast = head, head
    forward_steps = find_cycle_length(head)

    # move fast pointer with a whole cycle ahead
    while forward_steps > 0:
        fast = fast.next
        forward_steps -= 1

    while slow != fast:
        slow = slow.next
        fast = fast.next

    return slow
