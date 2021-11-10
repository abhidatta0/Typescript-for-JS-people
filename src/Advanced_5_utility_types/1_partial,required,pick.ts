interface MyUser{
    name: string;
    id: string;
    email?: string;
}

type MyUserOptionals = Partial<MyUser>; //hover over to know  

type MyUserRequired = Required<MyUser>;

type JustEmailAndName = Pick<MyUser, "email" | "id">;