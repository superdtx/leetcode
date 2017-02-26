/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    var len = strs.length;
    var hashmap = {};
    var res = [];
    
    strs.forEach(function(str){
        var key = str.split('').sort().join('');
        hashmap[key] ? hashmap[key].push(str) : hashmap[key]=[str];
    });
    
    Object.keys(hashmap).forEach(function(elem){
        res.push(hashmap[elem]);
    });
    
    return res;
};
