/**
 * @param {string[]} strs
 * @return {string}
 */

 // vertical scan 
 // need to loop through all arrays
 // need to loop through char n in each arr at the same time
 // if match, save prefix and continue
 // if not, return prefix
var longestCommonPrefix = function(strs) {
    if (!strs || strs.length === 0) return ""
    for (let i = 0; i < strs[0].length; i++) {
        let charToMatch = strs[0][i]
        for (let j = 1; j < strs.length; j++) {
            if (!strs[j][i] || strs[j][i] !== charToMatch) {
                return strs[0].substring(0, i)
            }
        }
    }
    return strs[0]
};