/*
* Question: search an item in a sorted array with rotated in many times.
* Solution: binary search
* Time / Space Complexity: O(logN) / O(logN)
* Author: Mingchao Zou, August 4th
*/

function search(arr, val){
    function binarySearch(low, high){
        if(low > high) throw "not found";

        var mid = Math.trunc((low + high) / 2);
        if(arr[mid] > val){
            return binarySearch(low, mid - 1);
        }else if(arr[mid] < val){
            return binarySearch(mid + 1, high);
        }else{
            return mid;
        }
    }

    var i = 0;
    
    while(arr[i] <= arr[i + 1]) i++;

    if(arr[0] < val){
        return binarySearch(0 , i);
    }else if(arr[0] > val){
        return binarySearch(i + 1, arr.length - 1);
    }else{
        return i;
    }
}

module.exports = search;

//unit test
var arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];
console.log(search(arr, 5)); // 8

var arr = [ 4, 5, 7, 10, 14, 15, 16, 19, 20, 25, 1, 3];
console.log(search(arr, 7)); // 2

var arr = [ 16, 16, 16, 17, 18, 1, 3, 5, 5, 7, 10, 14, 15];
console.log(search(arr, 17)); //3

var arr = [ 10, 14, 15, 16, 19, 20, 25, 1, 3, 4, 5, 7];
console.log(search(arr, 27)); //not found