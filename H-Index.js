/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    
    citations.sort(function(a, b){
       if(a < b){
           return 1;
       }
       return -1;
    });

    for(var i = 0; i < citations.length; i++){
        if(citations[i] <= i){
            return i;
        }
    }
    return citations.length;
};
