const isPalindrome = function(x) {
  if (x < 10 && x >= 0) {
    return true;
  }
  if (x < 0 || !Number.isInteger(x) || x % 10 === 0) {
    return false;
  }
  let flippedInt = 0;
  while (x > flippedInt) {
    flippedInt = flippedInt * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === flippedInt || (flippedInt > 9 && x === Math.floor(flippedInt / 10));
};

console.log(isPalindrome(21120));
