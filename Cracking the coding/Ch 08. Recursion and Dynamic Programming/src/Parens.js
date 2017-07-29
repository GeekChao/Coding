/*
* Question: print all vaild combinations of n pairs of parentheses
* Solution: build string from the scatch.
* Time / Space Complexity: O(2 ^ n) / O(n) 
* Author: Mingchao Zou, July 28th
*/

function parens(n){
    var results = [];

    function getParens(leftRem, rightRem, prefix){
        if(leftRem < 0 || rightRem < leftRem) return;

        if(leftRem == 0 && rightRem == 0){
            results.push(prefix);
            return;
        }

        if(leftRem > 0){
            getParens(leftRem - 1, rightRem, prefix + '(');
        }

        if(leftRem < rightRem){
            getParens(leftRem, rightRem - 1, prefix + ')');
        }
    }  
    
    getParens(n , n, ''); 
    return results;
}

module.exports = parens;

//unit test
console.log(parens(2));
console.log(parens(3));

/**
 * Analyze the problem: the number of the right parenthesis is greater than the number of the left ones if there is a sytanx error.
 */