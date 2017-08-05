/*
* Question: sort an array of strings so that all the anagrams are next to each other
* Solution: bucket sort
* Time / Space Complexity: O(n) / O(n)
* Author: Mingchao Zou, August 4th
*/

function anagrams(arr){
    function sortString(str){ 
        var arrChars = str.split('');
        arrChars.sort();    // put anagrams in the same order
        return arrChars.join('');
    }

    var map = {};

    arr.forEach(function(str){
        var key = sortString(str);
        if(map.hasOwnProperty(key)){
            map[key].push(str);
        }else{
            var queue = [];
            queue.push(str);
            map[key] = queue;
        }
    });

    var index = 0;
    for(var key in map){
        map[key].forEach(function(elm){
            arr[index++] = elm;
        });
    }

    return arr;
}

module.exports = anagrams;

//unit test
var arr = ['a', 'abc', 'de', 'cba', 'df', 'bac'];
console.log(anagrams(arr));
//result
[ 'a', 'abc', 'cba', 'bac', 'de', 'df' ]