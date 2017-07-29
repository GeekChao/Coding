/*
* Question: fill in the surrounding area until the color changes from the original color.
* Solution: depth-frist search
* Time / Space Complexity: O(n * m) / O(n * m) 
* Author: Mingchao Zou, July 28th
*/

function Pixel(color){
    this.color = color;
    this.visited = false;
}

function Point(x, y){
    this.x = x;
    this.y = y;
}

var screen = [
    [new Pixel('red'), new Pixel('yellow'), new Pixel('black')],
    [new Pixel('yellow'), new Pixel('yellow'), new Pixel('black')],
    [new Pixel('white'), new Pixel('yellow'), new Pixel('black')],
    [new Pixel('red'), new Pixel('white'), new Pixel('black')]
];

function paintFill(color, point){
    var width = screen.length; 
    var height = screen[0].length;

    if(point.x < 0 || point.x > width - 1 || point.y < 0 && point.y > height - 1) 
        throw new Error("invaild point");

    function fill(x, y){
        if(x - 1 >= 0 && !screen[x - 1][y].visited){ //up
            screen[x - 1][y].visited = true;
            screen[x - 1][y].color = color;
            fill(x - 1, y);
        }
        if(x + 1 < width && !screen[x + 1][y].visited){ //down
            screen[x + 1][y].visited = true;
            screen[x + 1][y].color = color;
            fill(x + 1, y);
        }
        if(y - 1 >= 0 && !screen[x][y - 1].visited){ //left
            screen[x][y - 1].visited = true;
            screen[x][y - 1].color = color;
            fill(x, y - 1);
        }
        if(y + 1 < height && !screen[x][y + 1].visited){ //right
            screen[x][y + 1].visited = true;
            screen[x][y + 1].color = color;
            fill(x, y + 1);
        }
    }

    fill(point.x, point.y);

}

module.exports = paintFill;

//unit test
paintFill('orange', new Point(1, 2));
console.log(screen);

/**
 * lesson: identify the relationship between the index of array and the position of the point.
 */