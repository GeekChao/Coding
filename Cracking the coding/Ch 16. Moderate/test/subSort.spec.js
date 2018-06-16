const ss = require('../subSort');

describe('sub sort an integer array', () => {
    it('validates input', () => {
        expect(function(){
            ss.subSort('12325');
        }).toThrow();
    });
    it('finds indices m and n', () => {
        expect(ss.subSort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19])).toEqual({m: 3, n: 9});
    });
});