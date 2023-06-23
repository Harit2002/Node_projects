"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = { name: "Harit Khushwas", age: 10 };
console.log("Harit Khushwas");
console.log(user.name);
var loginUser = function (name, email, isPaid) {
    console.log(name, email, isPaid);
    return "Ok";
};
var value = loginUser("Harit", "HaritKhushwas@gmail.com", false);
console.log(value);
// working with object
function createUer(user) {
    return { name: name };
}
function createCourse() {
    return { name: "backend", price: 80000 };
}
var myUser = {
    name: "Harit",
    email: "String"
};
function addUser(user) {
}
addUser(myUser);
//arrays
var superHeros = [];
var heroPower = [];
superHeros.push("Thor");
heroPower.push(90);
console.log(superHeros, heroPower);
var Users = /** @class */ (function () {
    function Users(name, email) {
        this.name = name;
        this.email = email;
    }
    return Users;
}());
var harit = new Users("Harit Khushwas", "haritkhushwas@gmail.com");
console.log(harit);
