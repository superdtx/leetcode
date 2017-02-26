/**
 * 需要用set() 和 encode
 */

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    
    var len = s.length;
    var hashmap = new Set();
    var res = new Set();
    var code;
    
    for(var i = 0; i <= len-10; i++){
        substr = s.substring(i, i+10);
        code = encode(substr);
        if(hashmap.has(code)){
            res.add(substr);    
        } else {
            hashmap.add(code);
        }
    }
    return Array.from(res);
};

function encode(s) {
    var sum = 0,
        len = s.length,
        c,
        i;

    for (i = 0; i < len; i++) {
        c = s.charAt(i);
        switch (c) {
            case 'A':
                sum = sum * 4;
                break;
            case 'C':
                sum = sum * 4 + 1;
                break;
            case 'G':
                sum = sum * 4 + 2;
                break;
            case 'T':
                sum = sum * 4 + 3;
                break;
        }
    }

    return sum;
} 
