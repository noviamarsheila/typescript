"use strict";
// tipe data pada balikan function
function getName() {
    return "Hello, My name is sheila";
}
console.log(getName());
function getAge() {
    return 20;
}
function printName() {
    console.log("Sheila");
}
printName();
//
function multiply(val1, val2) {
    return val1 * val2;
}
const result = multiply(2, 3);
console.log(result);
const Add = (val1, val2) => {
    return val1 + val2;
};
// defualt parameter
const fullName = (firstName, lastName = "Sheila") => {
    return firstName + " " + lastName;
};
console.log(fullName("Novia"));
// optional parameter
const getUmur = (val1, val2) => {
    return val1 + " " + val2;
};
console.log(getUmur(1, 2));
