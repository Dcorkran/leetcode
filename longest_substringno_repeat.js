/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  let longestSubstring = 0;
  if (!s) {
    return 0;
  }
  for (let i = 0; i < s.length; i++) {
    let tempLongestSubstring = 0;
    const dict = {};
    for (let j = 0 + i; j < s.length; j++) {
      const currentChar = s[j];
      if (dict[currentChar]) {
        if (tempLongestSubstring > longestSubstring) {
          longestSubstring = tempLongestSubstring;
        }
        break;
      }
      tempLongestSubstring += 1;
      dict[currentChar] = true;
      if (tempLongestSubstring > longestSubstring) {
        longestSubstring = tempLongestSubstring;
      }
    }
  }
  return longestSubstring === 0 ? 1 : longestSubstring;
};

console.log(lengthOfLongestSubstring("dvdf"));
