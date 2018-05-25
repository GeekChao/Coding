function numSwap(a, b){
    if(typeof a !== 'number' || typeof b !== 'number') throw 'number only';

    a = a - b;
    b = a + b;
    a = b - a;
    
    return {
        a: a,
        b: b
    };
}

module.exports = numSwap;