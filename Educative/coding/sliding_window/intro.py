# Given an array, find the average of all contiguous subarrays of size ‘K’ in it.

def find_avg_subarrs(arr, k=5):
    if len(arr) < k:
        return []

    result, slide_window_sum = [], sum(arr[0: k])
    result.append(slide_window_sum / k)

    for i in range(1, len(arr) - k + 1):
        slide_window_sum = slide_window_sum - arr[i - 1] + arr[i + k - 1]
        result.append(slide_window_sum / k)

    return result


assert(find_avg_subarrs([1, 3, 2, 6, -1, 4, 1, 8, 2])
       == [2.2, 2.8, 2.4, 3.6, 2.8])
