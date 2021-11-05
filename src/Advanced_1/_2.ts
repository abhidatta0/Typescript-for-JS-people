type Fish = {swim: ()=> void};
type Bird = {fly:()=> void};
type Human = {swim?:()=> void; fly?:()=> void};

function move(animal: Fish|Bird|Human){
    if("swim" in animal){
        return animal.swim?.();
    }
    
    return animal.fly?.();
}


function logValue(x: Date|string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase());
    }
}

let x = Math.random() < 0.5 ? 10 : 'hello world';
x = 1;
console.log(x);
x = 'sda';
console.log(x);


interface Circle{
    kind: 'circle';
    radius: number;
}

interface Square{
   kind: 'square';
   sideLength: number;
}

interface Triangle{
    kind: 'triangle';
    height: number;
    base: number;
}

type Shape = Circle|Square|Triangle;

function handleShape(shape: Shape){
    if(shape.kind === "circle"){

    }
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength**2;
        case "triangle":
            return (shape.height*shape.base)/2;
        default:
            const _exhaustive: never = shape;
            return _exhaustive;
    }
}