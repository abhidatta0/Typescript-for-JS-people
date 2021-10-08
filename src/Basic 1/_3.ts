//Union types
function printId(id: number | string){
    console.log("Your ID is : ", id);
    if(typeof id === 'string'){
        console.log(id.toUpperCase());
    }
    else{
        console.log(id);
    }
}

printId(101);
printId("dasdasd");
//printId({myId: 22342});  //throws error

function getFirstThree(x: number[]|string){
    return x.slice(0,3);        // slice is a method of both number array and string
}
