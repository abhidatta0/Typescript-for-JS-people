interface SomeType {
    readonly prop: {name: string, age: number}
}

function doSomething(obj: SomeType){
    console.log(`prop has value ${obj.prop}`);
    obj.prop.name = 'dsda';
    //obj.prop = {name:'d',age: 10};
}

function apple(a:any){
    let item = 10;
}

apple('fruit');

const a = [1, 2, 3, 4, 5];
const b = a[10]!;

console.log(b);

const ids: Record<number, string> = {
    10: 'a',
    20: 'b',
};
ids[30]= 'c';

const out = [4,5,6].map(v => `${v}*10`);