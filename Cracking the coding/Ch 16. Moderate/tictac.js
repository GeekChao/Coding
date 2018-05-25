function hasWon(arr){
    if(!Array.isArray(arr)) throw 'An array needed';
    let width = arr[0].length;
    let height = arr.length;
    if(width < 3 || height < 3) throw 'The size of array is greater than 2';
    if(width !== height) throw 'A NxN array needed';

    function isEmptyCh(ch){
        return ch === ' ';
    }

    //check each row
    for(let i = 0; i < height; i++){
        let ch = arr[i][0];
        if(isEmptyCh(ch)) break;
        if(arr[i].every(ele => ele === ch)){
            return {row: i, ch};
        }
    }

    //check each column
    for(let i = 0; i < width; i++){
        let ch = arr[0][i];
        if(isEmptyCh(ch)) break;
        let j = 0;
        for(; j < height; j++){
            if(arr[j][i] !== ch) break;
        }
        if(j === height) return {col: i, ch};
    }

    //check backward diagnoal 
    let ch_back = arr[0][0];
    for(let i = 1; i < height; i++){
        if(isEmptyCh(ch_back)) break;
        if(ch_back !== arr[i][i]) break;
        if(i == height - 1) return {dia: 'backward', ch: ch_back};
    }

    //check forward diagonal 
    let ch_for = arr[0][width - 1];
    for(let i = 1, j = width - 2; j >= 0; j--, i++){
        if(isEmptyCh(ch_for)) break;
        if(ch_for !== arr[i][j]) break;
        if(j == 0) return {dia: 'forward', ch: ch_for};
    }

    //nobody wins
    return 'nobody wins';
}

module.exports = hasWon;