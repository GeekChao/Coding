import add from '../dist/add';

describe('add without plus', () => {
    it('only accepts positive integers', () => {
        expect(function(){
            add(1.4, 23)
        }).toThrow();
        expect(function(){
            add(1, -23)
        }).toThrow();
    });
    it('returns the addition result', () => {
        expect(add(2, 45)).toEqual(47);
        expect(add(12, 123)).toEqual(135);
        expect(add(1249, 123)).toEqual(1372);
        expect(add(199, 123)).toEqual(322);
    });
});
