/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    var len = secret.length;
    var bull = 0;
    var cow = 0;
    var i;
    var secretArr = secret.split("").map(function(e) { return Number.parseInt(e); });
    var guessArr = guess.split("").map(function(e) { return Number.parseInt(e); });

    for(i = 0; i < len;){
        if(secretArr[i] === guessArr[i]){
            bull += 1;
            secretArr.splice(i, 1);
            guessArr.splice(i, 1);
            len--;
        } else {
            i++;
        }
    }
    
    for(i = 0; i < guessArr.length; i++){
        if(secretArr.indexOf(guessArr[i]) > -1){
            cow++;
            secretArr.splice(secretArr.indexOf(guessArr[i]), 1);
        }
    }
    
    return bull+'A'+cow+'B';
};
