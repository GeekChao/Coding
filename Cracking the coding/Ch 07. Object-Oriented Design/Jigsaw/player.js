let JagSaw = require('./jagsaw');

class Player {
    constructor(id, chucks){
        this.id = id;
        this.chucks = [];
    }

    startPlay(){
        this.jagsaw = new JagSaw(3, 3, 'jussaic');
        this.time = Date.now();
    }

    restart(){
        this.jagsaw.initJagSaw();
        this.time = Date.now();
    }

    randomPick(){

    }

    findNeighbor(){

    }

    mergeTwoChucks(){

    }

    fitsWith(a, b){
        return Math.abs(a - b) === 1;
    }
}
