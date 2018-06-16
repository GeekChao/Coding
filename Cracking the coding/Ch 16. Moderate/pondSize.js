function pondSize(arr){
    if(!Array.isArray(arr)) throw 'an array needed';

    let row = arr.length, column = arr[0].length, map = new Map();
    for(let i = 0; i < row; i++) //store the indices of all zeros in the matrix
        for(let j = 0; j < column; j++){
            if(arr[i][j] === 0) map.set(i * column + j, false);
        }

    function findNeighborZeros(index){
        let r = Math.floor(index / column);
        let c = index % column;
        let zeros = [];
        for(let i = r - 1; i <= r + 1; i++)
            for(let j = c - 1; j <= c + 1; j++){
                if(i >= 0 && i <= row - 1 && j >= 0 && j <= column - 1){
                    if(arr[i][j] === 0 && !map.get(i * column + j)) {
                        zeros.push(i * column + j);
                        map.set(i * column + j, true);
                    }
                }
            }
        return zeros;
    }

    let queue = [], sizes = [];
    for(let index of map.keys()){
        if(!map.get(index)){
            queue.push(index);
            let size = 1;
            map.set(index, true);
            while(queue.length > 0){
                let item = queue.shift();
                let zeros = findNeighborZeros(item);
                queue = queue.concat(zeros);
                size += zeros.length;
            }
            sizes.push(size);
        }
    }

    return sizes;
}

module.exports = {
    pondSize,
}