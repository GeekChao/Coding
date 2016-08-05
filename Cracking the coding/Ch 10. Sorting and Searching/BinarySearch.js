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
            return mid;
        }else if(arr[mid] > val){
            return binarySearchRecursive(low, mid - 1);
        }else{
            return binarySearchRecursive(mid + 1, high);
        }
    }

    return binarySearchRecursive(0, arr.length - 1);
}

function binarySearch2(arr, val) {
    var low = 0;
    var high = arr.length - 1;

    while(low <= high){
        var mid = Math.floor((low + high) / 2);
        if(arr[mid] == val){
            return mid;
        }else if(arr[mid] > val){
            high = mid - 1;
        }else{
            low = mid + 1;
        }
    }

    return Number.NEGATIVE_INFINITY;
}

function print(arr){
    arr.forEach(function(element){
        console.log(element);
    });
}

var array = [2, 4, 8, 9, 13, 14, 20, 333];

print(array);

console.log("Recursive Found at: " + binarySearch(array, 20));
console.log("Recursive Found at: " + binarySearch(array, 120));
console.log("Recursive Found at: " + binarySearch(array, 4));


console.log("Iterative Found at: " + binarySearch2(array, 20));
console.log("Iterative Found at: " + binarySearch2(array, 120));
console.log("Iterative Found at: " + binarySearch2(array, 4));

/*
* Result:
    2
    4
    8
    9
    13
    14
    20
    333

    Recursive Found at: 6
    Recursive Found at: -Infinity
    Recursive Found at: 1
    
    Iterative Found at: 6
    Iterative Found at: -Infinity
    Iterative Found at: 1
*/
