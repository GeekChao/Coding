function count2sInRange(n){
    if(!Number.isInteger(n) || n < 0) throw 'need a positive integer';

    let count = 0;
    for(let i = 0; i <= n; i++){
        count += count2s(i);
    }

    function count2s(num){
        let count = 0;
        while(num > 0){
            if(num % 10 === 2) count++;
            num = Math.floor(num / 10);
        }
        return count;
    }

    return count;
}

export default count2sInRange;