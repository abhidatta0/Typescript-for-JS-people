export function printToFile(text: string, callback: ()=> void):void{
    console.log(text);
    callback();
}

export function arrayMutate(numbers: number[], mutate: (v: number)=> number): number[]{
    return numbers.map(mutate);
}

console.log(arrayMutate([1,2,3], (v)=> v*10));

export function createAdder(num: number): (val: number) => number{
    return (val: number)=> num+val;
}

const addOne  =  createAdder(1);
console.log(addOne(55));