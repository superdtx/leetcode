/*
Implement a trie with insert, search, and startsWith methods.

Note:
You may assume that all inputs are consist of lowercase letters a-z.
*/


/**
 * Initialize your data structure here.
 */
var TrieNode = function(){
    this.nodes = {};
    this.endFlag = false;
};
 
var Trie = function() {
    this.root = new TrieNode();
    this.root.endFlag = true;
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    var node = this.root;
    
    for(var i = 0, len = word.length; i < len; i++){
        var item = word.charAt(i);
        if(!node.nodes[item]){
            node.nodes[item] = new TrieNode();
        }
        node = node.nodes[item];
    }
    
    node.endFlag = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    var node = this.root;
    
    for(var i = 0, len = word.length; i < len; i++){
        var item = word.charAt(i);
        if(!node.nodes[item]){
            return false;
        }
        node = node.nodes[item];
    }
    
    return node.endFlag;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    var node = this.root;
    
    for(var i = 0, len = prefix.length; i < len; i++){
        var item = prefix.charAt(i);
        if(!node.nodes[item]){
            return false;
        }
        node = node.nodes[item];
    }
    
    return !this.endFlag;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
