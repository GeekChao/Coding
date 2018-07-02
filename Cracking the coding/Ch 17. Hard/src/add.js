function add(a, b){
    if(!Number.isInteger(a) || !Number.isInteger(b)) throw 'need integers';
    if(a < 0 || b < 0) throw 'need positive integers';

    let bStrA = Number(a).toString(2), bStrB = Number(b).toString(2);
    let overflow = 0, sum = [];
    let map = {
        '000': 0,
        '001': 0,
        '010': 0,
        '011': 1,
        '100': 0,
        '101': 1,
        '110': 1,
        '111': 1,
    };

    if(bStrA.length < bStrB.length) [bStrA, bStrB] = [bStrB, bStrA];

    while(bStrB.length > 0){
        let bita = bStrA[bStrA.length - 1], bitb = bStrB[bStrB.length - 1];
        if(overflow){
            sum.push(bita ^ bitb ^ overflow);
        }else{
            sum.push(bita ^ bitb);
        }
        let seq = [overflow, bita, bitb].join('');
        overflow = map[seq];
        bStrA = bStrA.slice(0, bStrA.length - 1);
        bStrB = bStrB.slice(0, bStrB.length - 1);
    }

    if(overflow){
        if(bStrA.length === 0){
            sum.push(overflow);
        }else{
            while(overflow && bStrA.length){
                let bita = bStrA[bStrA.length - 1];
                sum.push(bita ^ overflow);
                bita & overflow ? overflow = 1 : overflow = 0;
                bStrA = bStrA.slice(0, bStrA.length - 1);
            }
        }
    }

    if(bStrA.length === 0){
        if(overflow){
            sum.push(overflow);
        }
    }else{
        sum.push(bStrA);
    }

    return parseInt(sum.reverse().join(''), 2);
}

export default add;