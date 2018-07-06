function findSubArr(arr){
    if(!Array.isArray(arr)) throw 'an array needed';

    function hasEqualStrAndNum(start, end){
        let count = 0;
        for(let i = start; i < end; i++){
            if(typeof arr[i] === 'number') count++;
            else if(typeof arr[i] === 'string') count--;
        }

        return count === 0;
    }

    for(let len = arr.length; len > 1; len--)
        for(let i = 0; i <= arr.length - len; i++){
            if(hasEqualStrAndNum(i, i + len)) return arr.slice(i, i + len);
        }

    return 'not found';
}

export default findSubArr;