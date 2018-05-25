let zeros = [];
let max = 0;
let index = 0;

function tenToTwo(num){
    if(typeof num !== 'number') throw 'need a number';
    if(num === 0) {
        zeros.push(index);
        return '0';
    }
    if(num === 1) return '1';


    let str = tenToTwo(Math.floor(num / 2)) + num % 2;
    index++;
    if(num % 2 === 0) zeros.push(index);

    return str;
}

function flipZero(str, i){
    let str1 = str.slice(0, i) + 1 + str.slice(i + 1);
    return str1;
}

function count1s(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === '0'){
            if(count > 0){
                max = Math.max(count, max);
                count = 0;
            }
        }else{
            count++;
        }

        if(i === str.length - 1) max = Math.max(count, max);
    }
}

function longest1s(num){
    let str = tenToTwo(num);
    console.log(str);
    zeros.forEach(i => {
        count1s(flipZero(str, i));
    });

    return max;
}

console.log(longest1s(1775));

