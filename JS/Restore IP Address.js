/**
Given a string containing only digits, restore it by returning all possible valid IP address combinations.
For example:
Given "25525511135",
return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
*/
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    
    var result = [];
    var address = [];
    backTracking(s, 0, 0, result, address);
    
    return result;
};

function backTracking(s, start, count, result, address){
    
    if(count === 4){
        if(start === s.length){
            result.push(address.join('.'));
        }
        return;
    }
    
    for(var i = start; i < s.length && i < start + 3; i++){
        //to avoid xxx.01.xxx
        if(i > start && s[start] === '0'){
            break;
        }
        
        var toAdd = s.slice(start, i+1);
        if(parseInt(toAdd) <= 255){
            address.push(parseInt(toAdd));
            backTracking(s, i+1, count+1, result, address.concat());
            address.pop();
        }
    }
}
