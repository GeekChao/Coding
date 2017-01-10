/*
* Question: return all subsets of a set
* Solution: Recursion 
* Time / Space Complexity: O(2 ^ n) / O(n)
* Author: Mingchao Zou, Dec 9th
*/

function Set(elements){
    this.elements = elements;
}

Set.prototype.powerSet = function(){
    var subset = []; //stack
    var sets = [];
    var self = this;
    
    function fun(n, ele){
        if(ele) subset.push(ele);

        if(n === self.elements.length - 1){
            /*sets.push(subset); // Bug: reference copy*/
            sets.push(subset.slice()); // value copy
            if(ele) subset.pop();
            return;
        }

        fun(n + 1, null);
        fun(n + 1, self.elements[n + 1]);

        if(ele) subset.pop();
    }

    fun(-1, null);

    return sets;
};

module.exports = Set;