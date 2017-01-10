var Set = require('../src/PowerSet'); 

describe('PowerSet', function(){
    it('all the subsets', function(){
        var set = new Set([2, 7, 8]);
        expect(set.elements).toEqual([2, 7, 8]);
        expect(set.powerSet()).toEqual([[], [8], [7], [7, 8], [2], [2, 8], [2, 7], [2, 7, 8]]);

        var set1 = new Set([2, 7]);
        expect(set1.powerSet()).toEqual([ [  ], [ 7 ], [ 2 ], [ 2, 7 ] ]);

        var set2 = new Set([2, 7, 8, 3]);
        expect(set2.powerSet()).toEqual([ [  ], [ 3 ], [ 8 ], [ 8, 3 ], [ 7 ], [ 7, 3 ], [ 7, 8 ], [ 7, 8, 3 ], [ 2 ], [ 2, 3 ], [ 2, 8 ], [ 2, 8, 3 ], [ 2, 7 ], [ 2, 7, 3 ], [ 2, 7, 8 ], [ 2, 7, 8, 3 ] ]);
    });
});