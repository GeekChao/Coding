function subSort(arr){
    if(!Array.isArray(arr)) throw 'an array needed!';

    let copyArr = [...arr];
    let sortArr = copyArr.sort((a, b) => a - b);
    if(sortArr === arr) return 'already sorted';

    let m = n = -1;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != sortArr[i]){
            m = i;
            break;
        }
    }

    for(let i = arr.length - 1; i > m; i--){
        if(arr[i] != sortArr[i]){
            n = i;
            break;
        }
    }

    return {
        m: m,
        n: n
    }
}

module.exports = {
    subSort
};
