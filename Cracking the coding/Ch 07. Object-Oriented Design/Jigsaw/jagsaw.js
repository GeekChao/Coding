let Puzzle = require('./puzzle');

class JagSaw {
    constructor(width, height, name){
        this.width = width;
        this.height = height;
        this.name = name;
        this.puzzles = [];
        this.initJagSaw();
    }

    initJagSaw(){
        for(let i = 0; i < this. height; i++){
            let row = [];
            for(let j = 0; j < this.width; j++){
                row.push(new Puzzle(i * this.width + j));
            }
            this.puzzles.push(row);
        }
    }
}

module.exports = JagSaw;
