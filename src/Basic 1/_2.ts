
export {}; 

// Object types
let obj:{x: number, bar?: string} = {x: 0};
obj.bar = 'Hello';

//Function types
function greet(name: string){
    console.log('Hello '+name.toUpperCase()+'!');
}

//greet(42);  //throws error

function getFavouriteNumber(): number{
    return 26;
}


//Object types
function printCoord(pt:{x:number; y?: number}){
    console.log('The x coordination '+ pt.x);
    console.log('The y coordination '+ pt.y);
    console.log(pt.y?.toFixed);   // Optional chaining feature
}

printCoord({x: 3, y: 7});
printCoord({x: 3});   // Runs fine

//Anonymous functions
const names = ['Alice', 'Bob','Eve'];
names.forEach(function(s){
   //console.log(s.toUppercase()); // throws error (typo mistake)
});

names.forEach((s)=>{
    console.log(s.toUpperCase());  
});

