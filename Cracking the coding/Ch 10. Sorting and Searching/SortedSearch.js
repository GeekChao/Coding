/*
* Question: find an item in a array-like Listy without knowledge of the size
* Solution: binary search
* Time / Space Complexity: O(logN) / O(logN)
* Author: Mingchao Zou, August 5th
*/

function binarySearch(arr, val, size){
    var low = 0;
    var high = size - 1;

    while(low <= high){
        var mid = Math.trunc((low + high) / 2);
        if(arr[mid] < val){
            low = mid + 1;
        }else if(arr[mid] > val){
            high = mid - 1;
        }else{
            return mid;
        }
    }

    if(low > high)  throw "Not Found!";
}

function getSize(arr){
    function isInBound(index){
        return index < arr.length && index > 0 ? true : false;
    }

    function findArrSize(small, large){
        var mid = Math.trunc((small + large) / 2);
        if(isInBound(mid) && !isInBound(mid + 1)) return mid + 1; // hit the last index of the arrry
        if(isInBound(mid)){ // mid is less than the last index
            return findArrSize(mid, large);
        }else{ // mid is larger than the last index
            return findArrSize(small, mid);
        }
    }

    var last = 1;

    while(isInBound(last * 2)) last *= 2;

    return findArrSize(last, last * 2);
}

function sortedSearch(arr, val){
    var size = getSize(arr);
    return binarySearch(arr, val, size);
}

//unit test
var arr = [3, 4, 4, 8, 9, 12, 23, 38];
console.log(sortedSearch(arr, 4));
console.log(sortedSearch(arr, 38));
console.log(sortedSearch(arr, 3));
console.log(sortedSearch(arr, 9));
console.log(sortedSearch(arr, 33));

/*Output
    1
    7
    0
    4
    Not Found! 
*/