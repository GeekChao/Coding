/*
* Quick Sort
* Time / Space Complexity: O(NlogN) / O(logN)
* Author: Mingchao Zou, Aug 4
*/

function quickSort(arr, low, high){

    function swap(i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    if(low >= high){
        return;
    }

    var position;    
    var pivot = arr[low];//assume the first element as the pivot
    var left = low + 1, right = high;

    while(left < right){
        while(left < right && arr[left] < pivot){
            left++;
        }

        while(left < right && arr[right] > pivot){
            right--;
        }
        
        if(left < right){
            swap(left, right);
        }
    }

    if(left == right){ //swap the pivot with the rightmost element less than it.
        if(arr[left] > pivot){
            swap(low, left - 1);
            position = left - 1;
        }else{
            swap(low, left);
            position = left;
        }
    }

    quickSort(arr, low, position - 1);
    quickSort(arr, position + 1, high);
}

function print(arr){
    arr.forEach(function(element){
        console.log(element);
    });
}

var array = [2, 4, 8, 9, 5, 4, 0, 3];

quickSort(array, 0, array.length - 1);

print(array);

/*
* Result:
    0
    2
    3
    4
    4
    5
    8
    9
*/