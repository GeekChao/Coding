function insert(n, m, i, j){
    if(typeof n !== 'number' || typeof m !== 'number' || typeof i !== 'number' || typeof j !== 'number') throw 'all the inputs must be integers';

    let seq = (-1 << (j + 1)) | ~(0 << (i - 1));

    return (m << i) | (n & seq);
}

console.log(insert(0b10000, 0b101, 2, 4));
console.log(insert(0b10000000000, 0b10011, 2, 6));