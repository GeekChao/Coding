const t = require('../t9');

describe('an old cellphone', () => {
    it('validates inpputs', () => {
        expect(function(){
            t.generate(187333);
        }).toThrow();
    });

    it('provids a list of valid words', () => {
        expect(t.generate('8733')).toEqual(['tree', 'used']);
    });

    it('provids a list of valid words', () => {
        expect(t.generate('1344')).toEqual(['egg']);
    });


    it('provids a list of valid words', () => {
        expect(t.generate('20333')).toEqual(['beef']);
    });
});