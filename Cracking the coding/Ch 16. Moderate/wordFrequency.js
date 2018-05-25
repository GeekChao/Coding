let bookMap = new Map();

function wordFreq(word, book){
    if(bookMap.has(book)){
        return countFreq(word, bookMap.get(book));
    }else{
        let dict = initBook(book);
        bookMap.set(book, dict);
        return countFreq(word, dict);
    }

    function initBook(book){
        let map = new Map();
        let reg = /\b\w+\b/g;
        let words = book.match(reg);
        for(let w of words){
            if(!map.has(w)){
                map.set(w, 1);
            }else{
                map.set(w, map.get(w) + 1);
            }
        }
        return {
            map: map,
            length: words.length
        };
    }

    function countFreq(word, {map, length}){
        if(map.has(word)) return map.get(word) / length;
        else throw `word: ${word}`;
    }
}

module.exports = wordFreq;