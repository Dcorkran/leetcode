/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  const answerArr = [];
  if (numRows < 2) {
    return s;
  }
  for (let i = 0, j = 0, shouldIterateUp = true; i < s.length; i++) {
    const char = s[i];
    if (answerArr[j]) {
      answerArr[j] += char;
    } else {
      answerArr[j] = char;
    }

    if (shouldIterateUp && j < numRows - 1) {
      j += 1;
    } else if (shouldIterateUp && j === numRows - 1) {
      j -= 1;
      shouldIterateUp = false;
    } else if (!shouldIterateUp && j > 0) {
      j -= 1;
    } else {
      j += 1;
      shouldIterateUp = true;
    }
  } 
  return answerArr.reduce((prev, cur) => prev + cur, '');
};

console.log(convert('AB', 1));

https://leetcode.com/problems/zigzag-conversion/submissions/
