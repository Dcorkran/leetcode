/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const createKeyString = function(arr) {
  return arr.reduce((prev, cur) => `${cur + prev},`, '');
};
const groupAnagrams = function(strs) {
  const map = {};
  strs.forEach(str => {
    const charCountArr = Array(26).fill(0);

    for (let index = 0; index < str.length; index++) {
      const indexToIterate = str[index].charCodeAt() - 96;
      charCountArr[indexToIterate]++;
    }
    const keyString = createKeyString(charCountArr);
    if (map[keyString]) {
      map[keyString].push(str);
    } else {
      map[keyString] = [str];
    }
  });
  const returnArr = [];
  Object.keys(map).forEach(key => {
    returnArr.push(map[key]);
  });
  return returnArr;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
