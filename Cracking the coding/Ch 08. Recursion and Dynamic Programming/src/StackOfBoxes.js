/*
* Question: compute the height of the tallest possible stack, given n boxes.
* Solution: sort first, then recurse
* Time / Space Complexity: O(nlogn) / O(n)
* Author: Mingchao Zou, July 30th, 2017
*/

function Box(w, d, h){
    this.width = w;
    this.depth = d;
    this.height = h;
}

Box.prototype.isLessthan = function(box){
    if(this.width < box.width && this.depth < box.depth && this.height < box.height){
        return true;
    }else{
        return false;
    }
}

function bubbleSort(arr){
    for(var i = 0; i < arr.length - 1; i++){
        var isOrdered = true;
        for(var j = 0; j < arr.length - 1 - i; j++){
            if(arr[j].width < arr[j + 1].width){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            isOrdered = false;
        }
        if(isOrdered) break;
    }
}   

function stackBoxes(boxes){
    function findBox(index){ 
        if(index < boxes.length && map[i] > 0)
            return map[i];

        var maxH = 0;
        for(var i = index + 1; i < boxes.length; i++){
            if(boxes[i].isLessthan(boxes[index])){
                var height = findBox(i);
                map[i] = height;
                maxH = Math.max(height, maxH);
            }
        }

        maxH += boxes[index].height;
        return maxH;
    }

    bubbleSort(boxes);
    var maxH = 0;
    var map = [];
    for(var i = 0; i < boxes.length; i++){
        maxH = Math.max(maxH, findBox(i));
    }
    return maxH;
}

module.exports = stackBoxes;

//unit test
var boxes = [
    new Box(1, 4, 2),
    new Box(4, 7, 5),
    new Box(3, 4, 6),
    new Box(2, 3, 3),
    new Box(1, 2, 1)
];

console.log(stackBoxes(boxes));

/**
 * Lesson: when it comes to recursion, you can have multiple variables in each stack to retain the state of the whole problem.
 */