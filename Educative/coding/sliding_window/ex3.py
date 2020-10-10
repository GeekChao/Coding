"""
Problem: Given a string, find the length of the longest substring in it with no more than K distinct characters.

Time Complexity: O(N)
Space Complexity: O(K)

Difficulty: Medium
"""


def longest_substring_with_k_distinct(string, k):
    window_start, max_substr_len = 0, -1
    ch_dict = {}

    for window_end in range(len(string)):
        # increment the count of ch
        ch = string[window_end]

        if ch in ch_dict:
            ch_dict[ch] += 1
        else:
            ch_dict[ch] = 1

        while len(ch_dict) > k:
            # decrement the count of ch
            remove_ch = string[window_start]
            ch_dict[remove_ch] -= 1

            if ch_dict[remove_ch] == 0:
                del ch_dict[remove_ch]

            window_start += 1

        max_substr_len = max(max_substr_len, window_end - window_start + 1)

    return max_substr_len


assert(longest_substring_with_k_distinct("araaci", 2) == 4)
assert(longest_substring_with_k_distinct("araaci", 1) == 2)
assert(longest_substring_with_k_distinct("cbbebi", 3) == 5)
