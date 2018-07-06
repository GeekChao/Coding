import findSubArr from '../src/findSubArr';

describe('Letters and Numbers', () => {
    it('validates inputs', () => {
        expect(function(){
            findSubArr('He13qr');
        }).toThrow();
    });

    it('find the longest subwary with an equal number of letters and numbers', () => {
        expect(findSubArr(['c', 2, 3, 'a', 'a', 4, 5, 'b', 'b', 1, 4, 8, 'd'])).toEqual(['c', 2, 3, 'a', 'a', 4, 5, 'b', 'b', 1]);
    });
});