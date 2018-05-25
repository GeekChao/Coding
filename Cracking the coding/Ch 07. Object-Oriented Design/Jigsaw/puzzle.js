class Puzzle {
    constructor(number){
        this.number = number;
        this.occupied = false;
    }

    getNumber(){
        return this.number;
    }

    pickByPlayer(){
        this.occupied = true;
    }

    isOccupied(){
        return this.occupied;
    }
}

module.exports = Puzzle;
