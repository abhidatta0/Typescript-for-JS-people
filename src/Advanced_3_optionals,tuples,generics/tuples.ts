function simpleStringState(initial: string):[()=> string, (v: string)=> void]{
  let str = initial;
  return [
      ()=> str,
      (v: string)=>{
          str = v;
      }
  ]
};

let [stringGetter, stringSetter] = simpleStringState('Hello');
console.log(stringGetter());
stringSetter('Updated Hello');
console.log(stringGetter());
