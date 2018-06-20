const p = require('../pairs');

describe('An array', () => {
    it('validates inputs', () => {
        expect(function(){
            p.pairsWithSum([1, 3, 4], [23])
        }).toThrow();
    });

    it('finds all pairs of integers which sums to a specified value', () => {
        expect(p.pairsWithSum([1, 3, 2, 3, 78, 23, 12, 78, 1, 4], 4)).toEqual([{a: 1, b: 3}, {a: 1, b: 3}, {a: 3, b: 1}, {a: 3, b: 1}]);
    });

    it('finds all pairs of integers which sums to a specified value', () => {
        expect(p.pairsWithSum([1, 3, 2, 3, 78, 23, 12, 78, 1, 4, 3, 3], 6)).toEqual([{a: 3, b: 3}, {a: 3, b: 3}, {a: 2, b: 4}, {a: 4, b: 2}]);
    });
});