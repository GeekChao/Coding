let wordF = require('../wordFrequency');

describe('a book', () => {
    let book;

    beforeEach(() => {
        book = 'John says:" hi, how are you?". I responds I am ok. Thanks';
    });

    it('counts the frequency', () => {
        expect(wordF('I', book)).toEqual(1 / 6);
    })

    it('can not find a word', () => {
        
        expect(function(){
            wordF('z', book)
        }).toThrow();
    })
});