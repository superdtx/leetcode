/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var alen = a.length;
    var blen = b.length;
    if(alen === 0){
        return b;
    } else if(blen === 0){
        return a;
    }
    
    var res = '';
    var aIndex = alen - 1;
    var bIndex = blen - 1;
    var carry = 0;
    
    while(aIndex > -1 && bIndex > -1){
        var aTemp = parseInt(a[aIndex]);
        var bTemp = parseInt(b[bIndex]);
        
        res = ((aTemp+bTemp+carry) % 2) + res;
        carry = Math.floor((aTemp+bTemp+carry) / 2);

        aIndex --;
        bIndex --;
    }
    
    if(aIndex < 0){
        
        while(bIndex > -1){
            var bTemp = parseInt(b[bIndex]);
            res = ((bTemp+carry) % 2) + res;
            carry = Math.floor((bTemp+carry) / 2);
            
            bIndex--;
        }
    }
    
    if(bIndex < 0){
        
        while(aIndex > -1){
            var aTemp = parseInt(a[aIndex]);
            res = ((aTemp+carry) % 2) + res;
            carry = Math.floor((aTemp+carry) / 2);
            
            aIndex--;
        }
    }
    
    if(carry > 0){
        res = carry + res;
    }
    
    return res;
};
