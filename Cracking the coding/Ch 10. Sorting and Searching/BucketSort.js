/* 
* Bucket sort works well when keys are distributed in a small range such as 0 to 9.
*/

function bucketSort(arr){
    var qArr = [];
    
    arr.forEach(function(elm){
        if(!typeof elm == "Object")
            throw new Error("Only Support Object");

        var key = Object.keys(elm)[0];
        if(qArr[key] == null){
            qArr[key] = [];
        }

        qArr[key].push(elm);
    });

    var sortArr = [];
    qArr.forEach(function(queue){
        while(queue.length > 0){
            sortArr.push(queue.shift());
        }
    });

    return sortArr;
}

module.exports = bucketSort;

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

console.log(bucketSort(arr));

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
  */