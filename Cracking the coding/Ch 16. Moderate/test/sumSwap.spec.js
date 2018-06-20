const ss = require('../sumSwap');

describe('Sum swap', () => {
    it('validates inputs', () => {
        expect(function(){
            ss.sumSwap([1, 2, 3], '123');
        }).toThrow();
    });

    it('Swap a pair of values to make tow arrays the same sum', () => {
        expect(ss.sumSwap([4, 1, 2, 1, 1, 2], [3, 6, 3, 3])).toEqual([4, 6]);
    });
});