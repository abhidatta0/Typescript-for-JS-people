function padLeft(padding: number|string, input: string){
  if(typeof padding === 'number'){
    return new Array(padding+1).join(' ')+input;
  }
  return padding+input;
}

function multiplyAll(values: number[]|undefined, factor: number){
   if(!values){
    return values;
   } 
   else{
    return values.map((x)=> x*factor);
   }
}

console.log(multiplyAll(undefined, 3));
console.log(multiplyAll([1,2,3], 3));