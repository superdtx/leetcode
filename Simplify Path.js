/**
  Given an absolute path for a file (Unix-style), simplify it.
  For example,
  path = "/home/", => "/home"
  path = "/a/./b/../../c/", => "/c"
  click to show corner cases.
  Corner Cases:
  Did you consider the case where path = "/../"?
  In this case, you should return "/".
  Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
  In this case, you should ignore redundant slashes and return "/home/foo".
  */
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    
    let paths = [];
    let arr = path.split('/');
    let len = arr.length;
    
    for(let i = 0; i < len; i++){
        let cur = arr[i];
        
        if(cur === '.' || cur.length === 0){
            continue;
        }
        
        if(cur === '..') {
            paths.length && paths.pop();
        } else {
            paths.push(cur);
        }
    }
    
    return (paths.length === 0 ? '/' : '/'+paths.join('/'));
};
