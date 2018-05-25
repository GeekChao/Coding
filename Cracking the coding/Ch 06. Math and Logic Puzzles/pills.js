function find(bottles, weight){
    let sumW = bottles.reduce((sum, cW) => sum + cW);

    for(let i = 0; i < bottles.length; i++){
        if(sumW - bottles[i] === sumW - weight){
            sumW -= bottles[i];
        }else{
            return i;
        }
    }

    return false;
}

function init(size, weight, extraW){
    let bottles = Array(20),
        index = Math.floor(Math.random() * size);

    bottles.fill(1, 0, 20);
    bottles[index] = extraW;

    return bottles;
}

module.exports = {
    init: init,
    find: find,
}