/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var slen = s.length;
    var tlen = t.length;
    
    if(slen !== tlen){
        return false;
    }
    
    var i;
    var sXor = 0;
    var tXor = 0;
    var sSum = 0;
    var tSum = 0;
    var sMul = 1;
    var tMul = 1;
    
    for(i = 0; i < slen; i++){
        sXor ^= s.charCodeAt(i);
        tXor ^= t.charCodeAt(i);
        sSum += s.charCodeAt(i) - 'a'.charCodeAt(0);
        tSum += t.charCodeAt(i) - 'a'.charCodeAt(0);
        sMul *= s.charCodeAt(i) - 'a'.charCodeAt(0);
        tMul *= t.charCodeAt(i) - 'a'.charCodeAt(0);
    }
    
    console.log(sXor, tXor);
    console.log(sSum, tSum);
    console.log(sMul, tMul);
    
    return sXor === tXor && sSum === tSum && sMul === tMul;
};
