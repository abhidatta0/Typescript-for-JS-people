//Optional in function arguments
function printIngredient(quantity: string, ingredient: string, extra?: string){
  console.log(`${quantity} ${ingredient} ${extra ? extra : ''}`);
}

printIngredient('1Cup', 'Flour');
printIngredient('1Cup', 'Sugar', 'something more');

//Optional in interfaces
interface User{
    id: string;
    info?:{
        email?:string;
    }
}

function getEmail(user: User){
    if(user.info){
      return user.info.email!;
    }
    return "";
}

//Cleaner way
function getEmailEasy(user: User){
    return user?.info?.email ?? "";
}