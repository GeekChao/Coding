/*
* Merge Sort
* Time / Space Complexity: O(NlogN) / O(N)
* Author: Mingchao Zou, Aug 3
*/
"use strict"

function mergeSort(arr, helper, low, high){

    function merge(arr, low, mid, high) {
        for(let i = low; i <= high; i++){
            helper[i] = arr[i];
        }

        var helpLeft = low;
        var helpRight = mid + 1;
        var current = low;

        while(helpLeft <= mid && helpRight <= high){
            if(helper[helpLeft] <= helper[helpRight]){
                arr[current] = helper[helpLeft];
                helpLeft++;
            }else{
                arr[current] = helper[helpRight];
                helpRight++;
            }
            current++;
        }

        for(let j = helpLeft; j <= mid; j++){
            arr[current] = helper[j];
            current++;
        } 
    }

    if(low < high){
        var mid = Math.floor((low + high) / 2); //narrow down the integer
        mergeSort(arr, helper, low, mid);
        mergeSort(arr, helper, mid + 1, high);
        merge(arr, low, mid, high);
    }
}

function print(arr){
    arr.forEach(function(element){
        console.log(element);
    });
}

var array = [2, 1, 8, 4, 5, 4, 0, 3];
var helper = [];

mergeSort(array, helper, 0, array.length - 1);

print(array);

/*
* Result:
    0
    1
    2
    3
    4
    4
    5
    8
*/

/*
* Lesson: unlike the type of int in java, we should use the Math.floor() to discard fractional parts.
*/