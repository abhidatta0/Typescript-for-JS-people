export {};

type Point = {
    x: number;
    y?: number;
};

function printCoord(pt: Point){
    console.log('The x coordination '+ pt.x);
    console.log('The y coordination '+ pt.y);
    console.log(pt.y?.toFixed);
}

printCoord({x: 3, y: 7});
printCoord({x: 3});
