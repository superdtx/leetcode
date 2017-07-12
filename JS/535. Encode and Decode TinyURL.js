/**
Note: This is a companion problem to the System Design problem: Design TinyURL.
TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk.

Design the encode and decode methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
**/

const maxLen = 6;
let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let url2code = new Map();
let code2url = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
    if(url2code.has(longUrl)){
        return url2code.get(longUrl);
    }
    
    var code = '';
    
    for(let i = 0; i < maxLen; i++){
        code += charSet[Math.floor(Math.random()*charSet.length)];
    }
    
    url2code.set(longUrl, code);
    code2url.set(code, longUrl);
    
    return 'http://tinyurl.com/' + code;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    let shortUrlArray = shortUrl.split('/');
    let code = shortUrlArray[shortUrlArray.length - 1];
    
    if(!code2url.has(code)){
        throw new Error(`The given code(${code}) is not existed!`);
    }

    return code2url.get(code);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
