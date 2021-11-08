function simpleState<T>(initial: T):[()=> T, (v: T)=> void]{
    let str = initial;
    return [
        ()=> str,
        (v: T)=>{
            str = v;
        }
    ]
};

let [st1getter, st1setter] = simpleState(10);  //Hover over for types

let [st2getter, st2setter] = simpleState<string|null>(null);  //Overridng inferred types  
st2setter('hello');