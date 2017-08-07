/*
* Question: Given a array with all the numbers from 1 to N, where N is at most 320000, the size of memory is 4kb. Print all the duplicates.
* Solution: bucket sort with bit vector
* Time / Space Complexity: O(N) / O(N)
* Author: Mingchao Zou, August 5th
*/

function findDups(arr){
    const rangeSize = 32000;
    const byteSize = 8;
    var bitVector = new Uint8Array(rangeSize / byteSize);

    arr.forEach(function(elm){
        var index = Math.trunc(elm / byteSize);
        var offset = elm % byteSize;
        if((bitVector[index] & (1 << offset)) != 0){ // not 0
            console.log(elm);
        }else{
            bitVector[index] |= 1 << offset;
        }
    });
}   

module.exports = findDups;

//unit test
var arr = [13, 2, 333, 333, 343, 22423, 222, 22423, 333];
findDups(arr);

/* Output
    333
    22423
    333 
*/

/* 
* Lesson: The way to verify one bit in bit vector is either 0 or not equal to 0.
*/