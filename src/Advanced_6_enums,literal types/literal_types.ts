function rollDice(dice: 1|2|3): number{
    let pip = 0;
    for(let i=0;i<dice;i++){
        pip++;
    }
    return pip;
}

console.log(rollDice(1));
// console.log(rollDice(4)); //throws error

//literal types with function overloading
function sendEvent2(name: "addToCart", data: {productId: number}):void;
function sendEvent2(name: "checkout", data: {cardCount: number}):void;
function sendEvent2(name: string, data: unknown):void{
    console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEvent2("addToCart", {productId: 123});