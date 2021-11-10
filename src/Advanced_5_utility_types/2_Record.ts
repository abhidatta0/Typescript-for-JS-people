interface MyUser{
    name: string;
    id: string;
    email?: string;
};

const mapById = (users: MyUser[]): Record<MyUser["id"], MyUser>=>{
    return users.reduce((a,v)=> {
       return {
           ...a,
           [v.id]: v,
       }
    },{});
}

console.log(mapById([{id: "foo", name: "Mr. Foo"}, {id:"baz", name:"Mrs. Baz"}]));

type UserWithoutId = Omit<MyUser, "id">;