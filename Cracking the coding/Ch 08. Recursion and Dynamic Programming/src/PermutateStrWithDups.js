/*
* Question: all permutations of a string whose characters are not necessarily unique.
* Solution: base case and build approach 
* Time / Space Complexity: O(n!) / O(n!), which n is the length of the string
* Author: Mingchao Zou, July 27th, 2017
*/

function getPerms(str){
    if(str == null) return;
    if(str.length == 1) return {str:str};

    var ch = str.charAt(str.length - 1);
    var results = {};
    var strings = getPerms(str.substr(0, str.length - 1));

    for(key in strings){
        var string = strings[key];
        for(var i = 0; i <= string.length; i++){
            var temp = string.substr(0, i) + ch + string.substr(i, string.length);
            if(!results.hasOwnProperty(temp)){
                results[temp] = temp;
            }
        }
    }

    return results;
}

module.exports = getPerms;

//unit test
console.log(getPerms("ab"));
console.log(getPerms("aba"));
console.log(getPerms("abab"));
console.log(getPerms("abad"));