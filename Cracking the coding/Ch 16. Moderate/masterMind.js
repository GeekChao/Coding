function masterMind(guess, solution){
    if(!typeof guess === 'string' || !typeof solution === 'string') throw 'only string allowed!';
    if(guess.length !== solution.length) throw 'same length needed!';

    function countMap(map, key){
        if(map.has(key)){
            let value = map.get(key) + 1;
            map.set(key, value);
        }else{
            map.set(key, 1);
        }
    }
    //count hints
    let gMap = new Map(), sMap = new Map(), hints = phints = 0;
    for(let i = 0; i < guess.length; i++){
        if(guess[i] === solution[i]){
            hints++;
        }
        else{
            countMap(gMap, guess[i]);
            countMap(sMap, solution[i]);
        }   
    }

    //count pseudo hints
    for(let [color, num] of gMap){
        if(sMap.has(color)){
            let snum = sMap.get(color);
            phints +=  snum > num ? num : snum;
        }
    }

    return {
        hints : hints,
        phints : phints
    }
}

module.exports = {
    masterMind,
};