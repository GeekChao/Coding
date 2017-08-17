/* 
* Counting Sort: use the counts to find the right index to move each item to.
*/

function countSort(arr){
    if(arr == null) throw new Error("Null");

    var counts = [];
    arr.forEach(function(elm){
        if(typeof elm == 'object'){
            var key = Object.keys(elm)[0];
            if(counts[key] == undefined) counts[key] = 0; // the defaulf value of array is undefined.
            counts[key]++;
        }else if(typeof elm == 'number'){
            if(counts[key] == undefined) counts[elm] = 0;
            counts[elm]++;
        }
    });

    var total = 0;
    counts.forEach(function(c, i){
        counts[i] = total;
        total += c;
    });

    var sortArr = [];
    arr.forEach(function(elm){
        if(typeof elm == 'object'){
            var key = Object.keys(elm)[0];
            sortArr[counts[key]] = elm;
            counts[key]++;
        }else if(typeof elm == 'number'){
            sortArr[counts[elm]] = elm;
            counts[elm]++;
        }
    });

    return sortArr;
}

module.exports = countSort;

//Unit Test
var arr = [
    {6:'a'},
    {7:'b'},
    {3:'v'},
    {0:'d'},
    {3:'s'},
    {1:'d'},
    {5:'s'},
    {0:'w'},
    {3:'w'},
    {7:'q'}
];

console.log(countSort(arr));

var numArr = [6, 7, 5, 0, 3, 19, 12, 20, 1];
console.log(countSort(numArr));

/* Result:
[ { '0': 'd' },
  { '0': 'w' },
  { '1': 'd' },
  { '3': 'v' },
  { '3': 's' },
  { '3': 'w' },
  { '5': 's' },
  { '6': 'a' },
  { '7': 'b' },
  { '7': 'q' } ] 

  [ 0, 1, 3, 5, 6, 7, 12, 19, 20 ]
*/