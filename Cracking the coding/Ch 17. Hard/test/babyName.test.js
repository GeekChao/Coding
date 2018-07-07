import babyName from '../src/babyName';

describe('Baby Names', () => {
    it('compute the frequencies of real baby names', () => {
        let names = [{John: 15}, {Jon: 12}, {Chris: 13}, {Kris: 4}, {Christopher: 19}];
        let synonyms = [['Jon', 'John'], ['John', 'Johnny'], ['Chris', 'Kris'], ['Chris', 'Christopher']];
        expect(babyName(names, synonyms)).toEqual([{Jon: 27}, {Chris: 36}]);
    });
});
