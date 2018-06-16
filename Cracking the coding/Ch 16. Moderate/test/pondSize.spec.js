const ps = require('../pondSize');

describe('pond sizes', () => {
    it('validates inputs', () => {
        expect(function(){
            ps.pondSize('sdfsdf');
        }).toThrow();
    });
    it('computes the sizes of all ponds in the matrix', () => {
        let matrix = [
            [0, 2, 1, 0],
            [0, 1, 0, 1],
            [1, 1, 0, 1],
            [0, 1, 0, 1]
        ];
        expect(ps.pondSize(matrix)).toEqual([2, 4, 1]);
    });

    it('computes the sizes of all ponds in the matrix', () => {
        let matrix = [
            [0, 2, 1, 0, 0],
            [0, 1, 0, 1, 0],
            [1, 1, 0, 1, 1],
            [0, 1, 0, 1, 0]
        ];
        expect(ps.pondSize(matrix)).toEqual([2, 6, 1, 1]);
    });

    it('computes the sizes of all ponds in the matrix', () => {
        let matrix = [
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [1, 1, 1, 1],
            [0, 0, 1, 0]
        ];
        expect(ps.pondSize(matrix)).toEqual([6, 2, 1]);
    });
});

