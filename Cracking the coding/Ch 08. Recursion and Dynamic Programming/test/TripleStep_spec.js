var StairCase = require('../src/TripleStep');

describe('TripleStep', function(){

    var stairCase;

    beforeEach(function(){
         stairCase = new StairCase(5);
    });

    it('Top Down Recurrsion', function(){
        expect(stairCase.runUpRecur()).toBe(13);
    });

    it('Top Down Memoization', function(){
        expect(stairCase.runUpMemo()).toBe(13);
    });    
    
    it('Botoom Up Dyanmic Programming', function(){
        expect(stairCase.runUpBottom()).toBe(13);
    });
});

