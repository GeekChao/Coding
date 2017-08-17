/**
 * use the bucket sort, treating each item as if its key is the last digit of its true key
 */

 function radixSort(arr){
    if(arr == null) throw new Error("Null");
    
    var count = 0;
    function getDigit(num, n){
        if(num < Math.pow(10, n)){
            count++;
            return 0;
        }else{
            var temp = Math.trunc(num / Math.pow(10, n)); //extract integer part of a real number using trunc function.
            return temp % 10;
        }
    }

    var digitPos = 0;
    while(count < arr.length){
        count = 0;
        var arrQueue = [];

        arr.forEach(function(val) {
            var digit = getDigit(val, digitPos);
            if(arrQueue[digit] == undefined){
                var queue = [];
                queue.push(val);
                arrQueue[digit] = queue;
            }else{
                arrQueue[digit].push(val);
            }
        });

        if(count == arr.length){
            return arr;
        }

        arr = [];

        arrQueue.forEach(function(queue){
            if(queue != undefined){
                queue.forEach(function(elm){
                    arr.push(elm);
                });
            }
        });

        digitPos++;
    }

    return arr;

 }

module.exports = radixSort;

//unit test
var numArr = [116, 74, 2225, 120, 3, 19, 442, 20, 1];
//console.log(radixSort(numArr));

/* Result:
[ 1, 3, 19, 20, 74, 116, 120, 442, 2225 ]
*/