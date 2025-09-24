myFunc();
function myFunc() {
    console.log("Called myFunc");
}
// 
// functions can get parameters
// 
myFunc2("electric", "pikachu", "1");
myFunc2("water", "raichu", "2");
myFunc2("fire", "charmander", "3");
function myFunc2(type, name, number) {
    console.log("The type of the pokemon is: " + type + " The name is: " + name + " And the number is: " + number);
}

// several params
myFunc3('electric', 'Pikachu');
myFunc3('water', 'Raichu');
function myFunc3(type, name) {
    console.log(name + " is of type " + type);
}