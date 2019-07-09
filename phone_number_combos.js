const map = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
};

const dive = function(combo, nextDigits, arr) {
  if (nextDigits.length === 0) {
    arr.push(combo);
    return;
  }
  const currentMap = map[nextDigits[0]];
  if (!currentMap) {
    dive(combo, nextDigits.substring(1), arr);
  } else {
    for (let index = 0; index < currentMap.length; index++) {
      const char = currentMap[index];
      dive(combo + char, nextDigits.substring(1), arr);
    }
  }
};

const letterCombinations = function(digits) {
  const returnArr = [];
  if (digits.length === 0) {
    return [];
  }
  dive('', digits, returnArr);
  return returnArr;
};

console.log(letterCombinations('23414'));
