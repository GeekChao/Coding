/*
* Question: Count how many possible ways the child run up the stairs with either 1, 2 or 3 steps
* Solution: Top down recursinon / Memoization / Bottom up dynamic 
* Time / Space Complexity: O(3 ^ N) O(N) / O(N) O(N) / O(N) O(1)
* Author: Mingchao Zou, Nov 14th
*/

function StairCase(stairs) {
    this.stairs = stairs;
}

StairCase.prototype.runUpRecur =  function (){
    var count = 0;

    function runWays(n){
        if(n === 0) {
            count++;
            return;
        }else if(n < 0){
            return;
        }

        runWays(n - 1);
        runWays(n - 2);
        runWays(n - 3);
    }
    
    runWays(this.stairs);

    return count;
};

StairCase.prototype.runUpMemo = function(){
    var memo = [];

    function runWays(n){
        if(n === 0){
            return 1;
        }else if(n < 0){
            return 0;
        }

        if(memo[n] === undefined){
            memo[n] = runWays(n - 1) + runWays(n - 2) + runWays(n - 3);
        }

        return memo[n];
    }

    return runWays(this.stairs);
};

StairCase.prototype.runUpBottom = function(){

    var one = 1, two = 2, three = 4;
    var count = 0;

    function runWays(n){
        if(n <= 0) return 0;
        else if(n === 1) return 1;
        else if(n === 2) return 2;
        else if(n === 3) return 4;

        for(var i = 4; i <= n; i++){    
            count = three + two + one;
            one = two;
            two = three;
            three = count;
        }

        return count;
    }

    return runWays(this.stairs);
};

module.exports = StairCase;