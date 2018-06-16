function generate(digits){
    if(typeof digits !== 'string' && !Array.isArray(digits)) throw 'only an array or a string allowed!';

    let vaild = ['tree', 'used', 'egg', 'beef'];

    let map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };

    if(typeof digits === 'string'){
        digits = digits.split('');
    }
    digits = digits.filter(digit => digit >= 2 && digit <= 9); //filter 1 and 0

    let words = [];
    function allWords(arr, word = ''){
        if(arr.length === 0) {
            words.push(word);
            return;
        }
        let digit = arr[0];
        let chars = map[digit];
        for(let ch of chars){
            allWords(arr.slice(1), word + ch);
        }

        return words;
    }

    return allWords(digits).filter(word => vaild.includes(word));
}

module.exports = {
    generate
};