let hasWon = require('../tictac');

describe('tic tac toe', () => {
    it('validates the input array', () => {
        expect(function(){
            hasWon('ox');
        }).toThrow('An array needed');
        expect(function(){
            hasWon([[1, 2], [2, 4]]);
        }).toThrow('The size of array is greater than 2');
        expect(function(){
            hasWon([['x', 'x', 'x'], [' ', 'o', 'o'], ['o', ' ', 'x'], [' ', 'x', 'o']]);
        }).toThrow('A NxN array needed');
    });

    it('horrizontally won', () => {
        let arr = [['x', 'x', 'x'], [' ', 'o', 'o'], ['o', ' ', 'x']];
        expect(hasWon(arr)).toEqual({row: 0, ch: 'x'});
    });

    it('vertically won', () => {
        let arr = [['x', 'o', 'x'], [' ', 'o', 'o'], ['o', 'o', 'x']];
        expect(hasWon(arr)).toEqual({col: 1, ch: 'o'});    
    });

    it('backward diagonally won', () => {
        let arr = [['x', 'x', 'o'], [' ', 'x', 'o'], ['o', ' ', 'x']];
        expect(hasWon(arr)).toEqual({dia: 'backward', ch: 'x'});
    })

    it('forward diagonally won', () => {
        let arr = [['x', 'x', 'o'], [' ', 'o', ' '], ['o', 'o', 'x']];
        expect(hasWon(arr)).toEqual({dia: 'forward', ch: 'o'});
    })

    it('nobody wins', () => {
        let arr = [[' ', 'x', 'o'], [' ', 'o', 'o'], [' ', ' ', 'x']];
        expect(hasWon(arr)).toEqual('nobody wins');
    })
});