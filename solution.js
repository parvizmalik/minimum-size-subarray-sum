function minSubArrayLen(target, nums) {
  let left = 0;
  let currSum = 0;
  const n = nums.length;
  let minLength = Infinity;

  for (let right = 0; right < n; right++) {
    currSum += nums[right];

    while (currSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currSum -= nums[left];
      left++;
    }
  }

  return minLength !== Infinity ? minLength : 0;
}

// Example usage
const target = 7;
const nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums)); // Outputs: 2


const minSubArrayLen = (target, nums) => {
    let left = 0, currSum = 0, minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        currSum += nums[right];

        while (currSum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            currSum -= nums[left++];
        }
    }

    return minLength !== Infinity ? minLength : 0;
}

// Example usage
const target = 7;
const nums = [2,3,1,2,4,3];
console.log(minSubArrayLen(target, nums));  // Outputs: 2

