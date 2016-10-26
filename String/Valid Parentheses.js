/**
  Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
  The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
  */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    var len = s.length;
    
    if(!len){
        return true;
    }
    var characters = {'(': ')', '{': '}', '[': ']'};

    var stack = [s[0]];
    for(var i = 1; i < len; i++){
        if(characters[stack[stack.length - 1]] === s[i] ){
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return (stack.length === 0);
};
