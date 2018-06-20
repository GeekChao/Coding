const Ant = require('../ant');

describe('Langton Ant', () => {
    let ant;
    const row = 100, column = 80;
    beforeEach(function(){
        ant = new Ant(row, column);
    });

    it('generates a grid with black and white squares randomly', () => {
        expect(ant.getGrid().length).toEqual(8000);
    });

    it('validates the mapping from degree to the next step', () => {
        let {r, c} = ant.getPos();
        expect(ant.getNextStepFromDegree('right')).toEqual({r: r + 1, c});
        expect(ant.getNextStepFromDegree('down')).toEqual({r, c: c - 1});
        expect(ant.getNextStepFromDegree('left')).toEqual({r: r - 1, c});
        expect(ant.getNextStepFromDegree('up')).toEqual({r, c: c + 1});
    });     

    it('validates the next step', () => {
        expect(function(){
            ant.isValidStep(row, column)
        }).toThrow();
        expect(ant.isValidStep(row - 2, column - 1)).toEqual(true);
    }); 

    it('move 4 steps', () => {
        expect(ant.move(10));
    });
});