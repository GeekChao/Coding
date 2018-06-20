const c = require('../calculator');

describe('an arithmetic equation', () => {
    it('validates inputs', () => {
        expect(function(){
            c.calculate(233);
        }).toThrow();
    });

    it('calculates the equation', () => {
        expect(c.calculate('2*3+5/6*3+15')).toEqual(23.5);
    });

    it('calculates the equation', () => {
        expect(Math.trunc(c.calculate('12/3+5/6-3*15'))).toEqual(-40);
    });

    it('calculates the equation', () => {
        expect(Math.trunc(c.calculate('10+13*6/3-15/5'))).toEqual(33);
    });
});

