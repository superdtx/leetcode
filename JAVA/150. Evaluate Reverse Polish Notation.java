/*
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
*/

public class Solution {
    public int evalRPN(String[] tokens) {
        int a, b;
        Stack<Integer> s = new Stack<Integer>();
        for(String token: tokens){
            if(token.equals("+")){
                s.add(s.pop()+s.pop());
            } else if (token.equals("-")) {
                a = s.pop();
                b = s.pop();
                s.add(b - a);
            } else if (token.equals("*")) {
                s.add(s.pop()*s.pop());
            } else if (token.equals("/")) {
                a = s.pop();
                b = s.pop();
                s.add(b / a);
            } else {
                s.add(Integer.parseInt(token));
            }
        }
        
        return s.pop();
    }
}
