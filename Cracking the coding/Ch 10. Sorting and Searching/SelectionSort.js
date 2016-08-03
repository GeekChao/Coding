/*
* Selection Sort
* Time / Space Complexity: O(n2) / O(1)
* Author: Mingchao Zou, Aug 3
*/

"use strict"

function selectionSort(arr){

    function swap(i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    for(let i = 0; i < arr.length - 1; i++){
        var min = arr[i];
        var k = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < min){ // find the minimum element
                min = arr[j];
                k = j;
            }
        }

        if(k != i){
            swap(i, k);
        }
    }
}

function print(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

var array = [2, 1, 8, 4, 5, 4, 0, 3];

selectionSort(array);

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