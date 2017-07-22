/*
* Question: multiply two positive integers without the * operator
* Solution: recursion and memorzation
* Time / Space Complexity: O(logs), where s is the smaller of the tow numbers / O(logs)
* Author: Mingchao Zou, July 21th
*/

function multiply1(num1, num2){
    if(num1 < 0 || num2 < 0)
        throw new Error("two positive integers needed!");
    var smallNum = num1 < num2 ? num1 : num2;
    var largeNum = num1 > num2 ? num1 : num2;
    var map = {};

    function add(num){
        if(num == 1) return largeNum;

        if(map.hasOwnProperty(num)) return map[num];
        
        var half = Math.trunc(num / 2);
        if(num % 2 == 0){
            return map[num] = add(half) + add(half);
        }else{
            return map[num] = add(half) + add(half) + largeNum;
        }
    }  

    return add(smallNum);

}

function multiply2(num1, num2){
    if(num1 < 0 || num2 < 0)
        throw new Error("two positive integers needed!");
    var smallNum = num1 < num2 ? num1 : num2;
    var largeNum = num1 > num2 ? num1 : num2;

    function add(num){
        if(num == 1) return largeNum;
        
        var halfProd = add(Math.trunc(num / 2));
        if(num % 2 == 0){
            return halfProd + halfProd;
        }else{
            return halfProd + halfProd + largeNum;
        }
    }  

    return add(smallNum);

}

console.log(multiply2(12, 124));
console.log(multiply2(7, 8));
console.log(multiply2(-33, 124));

module.exports = multiply;

/*
** Lesson:
* 1. return
* 2. array
* 3. object[index]
* 4. num / 2
*/