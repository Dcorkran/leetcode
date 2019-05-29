const maxArea = function(height) {
  let lb = 0;
  let rb = height.length - 1;
  let max = 0;
  let distance = rb;
  while (lb !== rb) {
    const leftVal = height[lb];
    const rightVal = height[rb];
    const currentMax = leftVal < rightVal ? leftVal * distance : rightVal * distance;
    if (max < currentMax) {
      max = currentMax;
    }
    if (leftVal < rightVal) {
      lb += 1;
    } else {
      rb -= 1;
    }
    distance -= 1;
  }
  return max;
};

const heightArr1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(heightArr1));

// should be O(n)
// 1 - make variable for left bound, right bound, and max area
// 2 - while bounds aren't touching
// 3 - count area
// 4 - if area is greater, that is new max
// 5 - if whichever is less, move it to the right or left (depending on lb or rb)
// 6 - return max
