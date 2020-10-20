"""
Problem: Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

Difficulty: Medium
"""


def find_intersections(intervals_a, intervals_b):
    point_a, point_b, start, end = 0, 0, 0, 1
    intersections = []

    while point_a < len(intervals_a) and point_b < len(intervals_b):
        interval_a, interval_b = intervals_a[point_a], intervals_b[point_b]

        # sort two interals by the start time
        if interval_a[start] > interval_b[start]:
            small_interval, big_interval = interval_b, interval_a
            point_b += 1
        else:
            small_interval, big_interval = interval_a, interval_b
            point_a += 1

        # overlapping
        if small_interval[end] >= big_interval[start]:
            intersections.append(
                [big_interval[start], min(small_interval[end], big_interval[end])])

    return intersections


def main():
    print("Intervals Intersection: " +
          str(find_intersections([[1, 3], [5, 6], [7, 9]], [[2, 3], [5, 7]])))
    print("Intervals Intersection: " +
          str(find_intersections([[1, 3], [5, 7], [9, 12]], [[5, 10]])))


main()
