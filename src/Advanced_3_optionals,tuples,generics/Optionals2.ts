//Optional function calls
function addWithCallback(x: number, y: number, callback?:()=> void){
    console.log(x+y);
    callback?.();
}

//Usage
addWithCallback(10, 20);
addWithCallback(10, 20, function(){console.log("Sample function")});
