/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (typeof nums[i + 1] === "number" && nums[i + 1] === nums[i]) {
      let endIndex = i + 1;
      while (nums[i] === nums[endIndex] && nums[i] === nums[endIndex + 1]) {
        endIndex += 1;
      }
      nums.splice(i, endIndex - i);
    }
  }
  return nums;
};

console.log(removeDuplicates([1,1,2]));
