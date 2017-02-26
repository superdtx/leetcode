/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var hashmap = {};
    var slen = s.length;
    var tlen = t.length;
    var i;
    
    for(i = 0; i < slen; i++){
        if(hashmap[s[i]]){
            hashmap[s[i]] ++;
        } else {
            hashmap[s[i]] = 1;
        }
    }
    
    for(i = 0; i < tlen; i++){
        if(hashmap[t[i]] && hashmap[t[i]] > 0) {
            hashmap[t[i]]--;
        } else {
            return t[i];
        }
    }
};
