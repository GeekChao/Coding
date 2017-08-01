/*
* Question: calculate the number of ways of representing n cents by an infinite number of qarters, dimes, nickels and pennies.
* Solution: bottom up iteration 
* Time / Space Complexity: O(abc) / O(1), which a, b,c is the maximum number of coins.
* Author: Mingchao Zou, July 30th, 2017
*/

function coins(n){
    var a = Math.trunc(n / 25);
    var b = Math.trunc(n / 10);
    var c = Math.trunc(n / 5);
    var count = 0;

    for(var i = a; i >= 0; i--){
        var sum = 0;
        sum += 25 * i;
        for(var j = b; j >= 0; j--){
            sum += 10 * j;
            if(sum == n){
                count++;
            }else if(sum < n){
                for(var k = c; k >= 0; k--){
                    sum += k * 5;
                    if(sum <= n) count++;
                    sum -= k * 5;
                }
            }
            sum -= 10 * j;
        }
    }

    return count;
}

module.exports = coins;
//unit test 
console.log(coins(5));
console.log(coins(18));
console.log(coins(32));