let user = { name: "Harit Khushwas", age: 10 };

console.log("Harit Khushwas");
console.log(user.name);

let loginUser = (name: string, email: string, isPaid: boolean): string => {
  console.log(name, email, isPaid);
  return "Ok";
};

let value = loginUser("Harit", "HaritKhushwas@gmail.com", false);

console.log(value);

// working with object

function createUer(user: { name: string; isPaid: boolean }): {} {
  return { name };
}

function createCourse(): { name: string; price: number } {
  return { name: "backend", price: 80000 };
}

type User = {
  readonly name: string; //readonly meand we can only assign it once and can't edit it
  email: string;
  isActive?: boolean; // '?' is used to tell that this field is not mendatory
};

let myUser = {
  name: "Harit",
  email: "String",
};

function addUser(user: User) {}

addUser(myUser);

//arrays
const superHeros: string[] = [];
const heroPower: number[] = [];

superHeros.push("Thor");
heroPower.push(90);

console.log(superHeros, heroPower);

class Users {
  constructor(public name: string, public email: string) {}
}

let harit = new Users("Harit Khushwas", "haritkhushwas@gmail.com");

console.log(harit);

const arr: number[] = [1, 2, 3, 4];
arr.push(10);

function getValue<T>(value: T[]): T {
  return value[1];
}

class Sample<T> {
    
}

export {};
