# minimum-size-subarray-sum
solution in Python , JS

The objective is to find the *minimal length* of a subarray whose sum is greater than or equal to the target. So, even if you've found a subarray that meets the sum condition, there might be a shorter one that also meets the condition.

For instance, consider the example:

`target = 7`, `nums = [2,3,1,2,4,3]`

- Starting from the beginning, the sum becomes `2 + 3 + 1 + 2 = 8` at the fourth element, which is greater than or equal to 7. So, we've found a subarray `[2,3,1,2]` of length 4. If we stopped here, we'd miss the shorter subarray that also meets the condition.

- However, by shrinking the window from the left (i.e., removing the `2`), the sum becomes `3 + 1 + 2 = 6`. This is less than the target, so we expand the window to the right.

- Later, the sum becomes `3 + 1 + 2 + 4 = 10` when we include the 5th element. Now, if we shrink the window from the left by removing `3` and then `1`, we get the sum `2 + 4 = 6` (still less than target). But, if we shrink once more by removing `2`, we get the sum `4 + 3 = 7`, which meets the condition and gives us a shorter subarray `[4,3]` of length 2.

By shrinking the window from the left, we're essentially exploring all possible subarrays that could meet the condition to ensure we find the shortest one.
