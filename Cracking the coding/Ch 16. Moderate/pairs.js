function pairsWithSum(arr, sum){
    if(!Array.isArray(arr) || typeof sum !== 'number') throw 'invalid inputs';

    let map = new Map(), pairs = [];
    for(let a of arr){
        if(map.has(a)){
            map.set(a, map.get(a) + 1);
        }else{
            map.set(a, 1);
        }
    }
    for(let a of map.keys()){
        let b = sum - a;
        let num = map.get(b);
        if(a !== b){
            if(map.has(b)){
                while(num--) pairs.push({a, b});
            }
        }else{
            while(num >= 2) {
                pairs.push({a, b});
                num -= 2;
            }
        }
    }

    return pairs;
}

module.exports = {
    pairsWithSum
}