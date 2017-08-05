/*
* Question: merge two sroted arrays
* Solution: iterate through these two given arrays in parallel, and put the smaller item in the bigger array.
* Time / Space Complexity: O(n) / O(n)
* Author: Mingchao Zou, August 4th
*/

function merge(arrA, arrB){
    if(arrA.length <= arrB.length)
        throw new Error("the first array is not long enough");

    var helper = [];
    var i = 0;

    while(arrA[i] != undefined) helper.push(arrA[i++]);    //copy the arraA to the helper array

    var m = 0, n = 0, k = 0;

    while(m < helper.length && n < arrB.length){
        if(helper[m] < arrB[n]){
            arrA[k++] = helper[m++];
        }else{
            arrA[k++] = arrB[n++];
        }
    }

    if(m == helper.length){
        while(n < arrB.length) arrA[k++] = arrB[n++];
    }

    if(n == arrB.length){
        while(m < helper.length) arrA[k++] = helper[m++];
    }

    return arrA;
}

module.exports = merge;

//unit test
var arrA = new Array(5);
arrA[0] = 5;
arrA[1] = 8;
var arrB = [3, 5, 6];
console.log(merge(arrA, arrB));