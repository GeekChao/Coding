/*
* Time / Space Complexity: O(n2) / O(1)
* Author: Mingchao Zou, Aug 3
*/
"use strict"

function bubbleSort(arr, len) {

    function swap(i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    var isSorted = true;
    for(let j = len - 1; j > 0; j--){
        if(isSorted && j < len - 1){
            break;
        }

        for(let i = 0; i < j; i++){
            if(arr[i] > arr[i + 1]){
                swap(i, i + 1);
                isSorted = false;
            }
        }
    }
}

function print(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

var array = [2, 1, 8, 4, 5, 4, 0, 3];

bubbleSort(array, array.length);

print(array);