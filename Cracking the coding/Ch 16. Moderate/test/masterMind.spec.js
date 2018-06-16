const game = require('../masterMind');

describe('master mind', () => {
    describe('validates inputs', () => {
        it('string only', () => {
            expect(function(){
                game.masterMind('RGB', 123);
            }).toThrow();
        });
        it('same length', () => {
            expect(function (){
                game.masterMind('RGB', 'sffs');
            }).toThrow();
        })
    });

    it('counts the number of hints and pusedo-hits', () => {
        expect(game.masterMind('RGBY', 'GGRR')).toEqual({hints: 1, phints: 1});
        expect(game.masterMind('RGGY', 'GGRR')).toEqual({hints: 1, phints: 2});
        expect(game.masterMind('RBBBBYY', 'GGRRBBY')).toEqual({hints: 2, phints: 2});
    });
});