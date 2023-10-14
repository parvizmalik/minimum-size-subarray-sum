# O(n) solution


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = 0
        curr_sum = 0
        n = len(nums)
        min_length = float('inf')
        for right in range(n):
            curr_sum += nums[right]
            while curr_sum >= target:
                min_length = min(min_length, right-left+1)
                curr_sum -= nums[left]
                left += 1

        return min_length if min_length != float('inf') else 0


def min_subarray(target, nums):
    left, curr_sum, min_length = 0, 0, float('inf')

    for right, num in enumerate(nums):
        curr_sum += num
        while curr_sum >= target:
            min_length = min(min_length, right - left + 1)
            curr_sum -= nums[left]
            left += 1

    return min_length if min_length != float('inf') else 0


# Test cases
print(min_subarray(7, [2, 3, 1, 2, 4, 3]))  # 2
print(min_subarray(4, [1, 4, 4]))  # 1
print(min_subarray(11, [1, 1, 1, 1, 1, 1, 1, 1]))  # 0
