function findLargestPeople(arr){
    if(!Array.isArray(arr)) throw 'an array needed!';
    arr.sort((p1, p2) => p1.w - p2.w);
    for(let num = arr.length; num > 1; num--){
        for(let i = 0; i <= arr.length - num; i++){
            let k = i + 1;
            while(k <= arr.length + 1 - num){
                let count = 1, lastIndex = i;
                for(let j = k; j < arr.length; j++){
                    if(arr[lastIndex].h < arr[j].h){
                        count++;
                        lastIndex = j;
                    }
                    if(count === num) return num;
                }
                k++;
            }
        }
    }
    if(num === 1) return 1;
}

export default findLargestPeople;