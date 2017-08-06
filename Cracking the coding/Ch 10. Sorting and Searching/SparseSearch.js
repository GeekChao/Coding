/*
* Question: find an item in a array that is interspersed with empty strings
* Solution: binary search
* Time / Space Complexity: O(logN) / O(logN)
* Author: Mingchao Zou, August 5th
*/

function sparseSearch(arr, val){
    function findNonEmptyStr(left, right){
        while(left >= low || right <= high){
            if(arr[left] != '' && left >= low){ //check the boundary
                return left;
            }else if(arr[right] != '' && right <= high){
                return right;
            }else{
                left--;
                right++;
            }
        }

        if(left < low && right > high){
            return -1;
        }
    }

    var low = 0;
    var high = arr.length - 1;
    
    while(low <= high){
        var mid = Math.trunc((low + high) / 2);
        if(arr[mid] == ''){ //find the non empty string that is closest to the middle.
            var index = findNonEmptyStr(mid - 1, mid + 1);
            if(index == -1){
                return -1;
            }else{
                mid = index;
            }
        }

        if(arr[mid] < val){
            low = mid + 1;
        }else if(arr[mid] > val){
            high = mid - 1;
        }else {
            return mid;
        }
    }

    if(low > high) return -1;
}

//unit test
var arr = ["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""];
console.log(sparseSearch(arr, "ball"));
console.log(sparseSearch(arr, "car"));
console.log(sparseSearch(arr, "dad"));
console.log(sparseSearch(arr, "ef"));


var arr = ["at", "", "", "", "", "", "", "", "car", "", "dad", "", ""];
console.log(sparseSearch(arr, "ball"));

var arr = ["", "", "", "", "", "", "", "", "car", "", "dad", "", ""];
console.log(sparseSearch(arr, "ball"));

var arr = ["", "", "", "at", "", "ball", "", "", "", "", "", "", ""];
console.log(sparseSearch(arr, "at"));


var arr = ["", "", "", "", "", "", "", "", "", "", "", "", ""];
console.log(sparseSearch(arr, "ef"));

/* ouput:
    4
    7
    10
    -1
    -1
    -1
    3
    -1
*/