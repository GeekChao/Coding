class Ant{
    constructor(r, c, dir = 'right'){
        this.row = r;
        this.column = c;
        this.directions = ['right', 'down', 'left', 'up'];
        this.state = {
            dir,
            grid: this.initGrid(this.row, this.column),
            pos: {r: Math.floor(this.column / 2), c: Math.floor(this.row / 2)}
        };
    }

    initGrid(row, column){
        if(row <= 0 || column <= 0) throw 'invaild rows or columns of grid';
        let grid = [];
        for(let i = 0; i < row * column; i++){
            Math.random() > 0.5 ? grid[i] = 'black' : grid[i] = 'white';
        }
        return grid;
    }

    getGrid(){
        return this.state.grid;
    }

    getNextStepFromDegree(dir){
        let {r, c} = this.getPos();
        switch(dir){
            case 'right': 
                return {r: r + 1, c};
            case 'down': 
                return {r: r, c: c - 1};
            case 'left':
                return {r: r - 1, c};
            case 'up': 
                return {r, c: c + 1};
            default:
                break;
        }
    }

    getPos(){
        return this.state.pos;
    }

    isValidStep(r, c){
        if(r < 0 || r >= this.row || c < 0 || c >= this.column){
            throw 'Out of boundary';
        }else{
            return true;
        }
    }

    printMove(){
        console.log('posX: ' + this.state.pos.r + ' posY: ' + this.state.pos.c + ' color: ' + this.state.grid[this.state.pos.r * this.column + this.state.pos.c] + ' dir: ' + this.state.dir);

    }

    next(){
        this.printMove();

        let index = this.directions.indexOf(this.state.dir);
        let {r, c} = this.state.pos;
        let color = this.getGrid()[r * this.column + c];
        let nextGrid = [...this.state.grid], nextDir, nextColor, nextPos;

        if(color === 'white'){
            nextDir = this.directions[(index + 1) % this.directions.length];
            nextColor = 'black';
        }else{
            nextDir = this.directions[(index - 1 + this.directions.length) % this.directions.length];
            nextColor = 'white';
        }

        nextPos = this.getNextStepFromDegree(nextDir);
        nextGrid[r * this.column + c] = nextColor;

        this.isValidStep(nextPos.r, nextPos.c);
    
        this.dispatch({
            type: 'move',
            dir: nextDir,
            pos: nextPos,
            grid: nextGrid
        });

        return this.state;
    }

    dispatch(action){
        switch(action.type){
            case 'move':
                 let {dir, pos, grid} = action;
                 this.setState({dir, pos, grid});
            default:
                break;
        }
    }

    setState(state){
        this.state = Object.assign(this.state, state);
    }

    move(k){
        while(k > 0){
            this.next();
            k--;
        }
    }
}

module.exports = Ant;