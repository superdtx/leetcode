/**
  The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
  P   A   H   N
  A P L S I I G
  Y   I   R
  And then read line by line: "PAHNAPLSIIGYIR"
  Write the code that will take a string and make this conversion given a number of rows:
  string convert(string text, int nRows);
  convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".
  ROW 4
  P       I       N    
  A    L  S    I  G
  Y  A    H  R
  P       I
  */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    var res = Array(numRows).fill('');
    var row;
    const keyLoop = 2 * numRows - 2;
    
    if(keyLoop === 0 || s.length <= numRows){
        return s;
    }
    
    for(var i = 0; i < s.length; i++){
        row = i % keyLoop;
        // "|/" 确定在垂直边还是斜边
        row = row > (numRows - 1) ? (keyLoop - row) : row;
        res[row] += s[i];
    }
    
    return res.join('');
};
