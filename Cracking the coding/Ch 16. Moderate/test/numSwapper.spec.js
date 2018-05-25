let swap = require('../numSwapper');

describe('swap a number in place', () => {

    it('validates the input', () => {
        expect(function(){
            swap('abc', 12);
        }).toThrow('number only');
    });

    it('swaps', () => {
        var {a, b} = swap(23, 12);
        expect(a).toBe(12);
        expect(b).toBe(23);
    });
});