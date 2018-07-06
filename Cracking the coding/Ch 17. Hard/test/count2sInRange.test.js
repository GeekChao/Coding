import count2sInRange from '../src/count2s';

describe('count of 2s', () => {
    it('validates inputs', () => {
        expect(function(){
            count2sInRange(-1);
        }).toThrow();
        expect(function(){
            count2sInRange('23');
        }).toThrow();
    });

    it('count the number of 2s between 0 and n', () => {
        expect(count2sInRange(25)).toEqual(9);
    });
});