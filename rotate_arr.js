const rotateValue = function(startingVal, arr, k, currentIndex, totalIterations) {
  if (totalIterations === arr.length) {
    return arr;
  }
  const moduloIndex = (currentIndex + k) % arr.length;
  const temp = arr[moduloIndex];
  arr[moduloIndex] = startingVal;
  return rotateValue(temp, arr, k, moduloIndex, totalIterations + 1);
};

const rotate = function(nums, k) {
  if (nums.length === 0) {
    return [];
  }
  return rotateValue(nums[0], nums, k, 0, 0);
};

console.log(rotate([1,2,3,4,5,6], 2));