'use strict'
// //constuctr Function

// const Person = function (firstName) {
//     this.first = firstName;
//     this.calcAge = function (birthyear) {
//         return 2022 - birthyear;
//     }
// };
// const alexobj = new Person("Alex");
// console.log(alexobj);
// const newObj = new Person("Alexis");
// console.log(newObj);
// Person.prototype.map = function (birthyear) {
//     return 2022 - birthyear;
// };
// console.log(Person.prototype);
// console.log(alexobj.calcAge(1993));


// const arr = new Array("Alex");
//const arr = [1,2,3];
// console.log(arr);


///////////////////ES6 CLASSES ////////////////////////////

class Person {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthDate = birthYear;
    }
    calcAge() {
        return 2022 - this.birthDate;
    }
    add(a, b) {
        return a + b;
    }
}
const objHari = new Person("Harry", 1990);
console.log(objHari.calcAge());

