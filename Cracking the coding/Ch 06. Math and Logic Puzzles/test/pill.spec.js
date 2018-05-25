let pills = require('../pills');

describe('6.1 Find the heavy pill bottle', () => {
    let bottles;

    beforeEach(() => {
        bottles = pills.init(20, 1, 1.1);
    });

    it('an array with 19 of 1 and 1 of 1.1', () => {
        expect(bottles.length).toEqual(20);
        expect(bottles.includes(1.1)).toBe(true);
        expect(bottles.filter(ele => ele === 1).length).toEqual(19);
    });

    it('find the heavy bottle with 1.1 gram', () => {
        let index = pills.find(bottles, 1);

        expect(index).not.toBe(false);
        expect(bottles[index]).toEqual(1.1);
    })
});
