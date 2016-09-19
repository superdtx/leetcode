/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var mapS = {};
    var mapT = {};
    var len = s.length;
    var curS, curT;
    
    for(var i = 0; i < len; i++){
        curS = s.charAt(i);
        curT = t.charAt(i);
        
        if(!mapS.hasOwnProperty(curS)){
            mapS[curS] = curT;
        } else if(mapS[curS] !== curT){
            return false;
        }
        
        if(!mapT.hasOwnProperty(curT)){
            mapT[curT] = curS;
        } else if(mapT[curT] !== curS){
            return false;
        }
    }
    
    return true;
};
