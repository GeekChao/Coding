function sumSwap(arr1, arr2){
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) throw 'two array needed!';

    let set = new Set();
    let sum1 = arr1.reduce((sum, ele) => sum += ele);
    let sum2 = arr2.reduce((sum, ele) => {
        sum += ele;
        set.add(ele);
        return sum;
    });
    let diff = sum1 - sum2;

    if(!Number.isInteger(diff)) return -1;

    for(let a of arr1){
        let b = a - diff / 2;
        if(set.has(b)){
            return [a, b];
        }
    }

    return -1;
}

module.exports = {
    sumSwap,
};
