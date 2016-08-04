/*
* Binary Search
* Time / Space Complexity: O(logn) / O(logn)
* Author: Mingchao Zou, Aug 4 2016
*/
"use strict"

function binarySearch(arr, val) {
    function binarySearchRecursive(low, high){
        if(low > high){
            return Number.NEGATIVE_INFINITY;
        }

        var mid = Math.floor((low + high) / 2);
        if(arr[mid] == val){
            return val;
        }else if(arr[mid] > val){
            return binarySearchRecursive(low, mid - 1);
        }else{
            return binarySearchRecursive(mid + 1, high);
        }
    }

    return binarySearchRecursive(0, arr.length - 1);
}

function print(arr){
    arr.forEach(function(element){
        console.log(element);
    });
}

var array = [2, 4, 8, 9, 13, 14, 20, 333];

print(array);

console.log("Found: " + binarySearch(array, 20));
console.log("Found: " + binarySearch(array, 120));
console.log("Found: " + binarySearch(array, 4));
