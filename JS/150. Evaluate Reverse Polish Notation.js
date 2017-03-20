/*
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
*/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    var len = tokens.length;
    
    var stack = [];
    var i = 0;

    while(i < len){
        if(tokens[i] === '+'){
            stack.push(stack.pop() + stack.pop());
        } else if(tokens[i] === '-'){
            var substrahend = stack.pop();
            var minuend = stack.pop();
            stack.push(minuend - substrahend);
        } else if(tokens[i] === '*'){
            stack.push(stack.pop()*stack.pop());
        } else if(tokens[i] === '/'){
            var divisor = stack.pop();
            var dividend = stack.pop();
            stack.push(Math.round(dividend/divisor));
        } else {
            stack.push(parseInt(tokens[i]));
        }
        
        i++;
    }
    
    return stack[0];
};
