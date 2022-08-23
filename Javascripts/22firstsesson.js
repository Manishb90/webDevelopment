//global scope
//function scope
//Block scope

//this 2 keyword was introduced in 2015(ES6)
//let
//const


//var this doesnot word with block scope
const age = 30;
// console.log(age)
//function scope

// function calcAge() {
//     console.log(age)
// }
// calcAge();


const firstname = "Alex";
function calcAge() {
    const age = 40;
    console.log(firstname);
}
console.log(age);

function calcAge(birthyr) {
    const age = 40;
    if (birthyr > 1980) {
        console.log("I am still running");
        console.log(age);
        function add(a, b) {
            console.log(a + b);
        }


    }

}

calcAge(1990);


// if (null) {
//     console.log("Truthy value");
// }
// else {
//     console.log("Falsy value");

// };

// if (true) {
//     console.log(firstname);

// }


//function Declartation

function addDec(a, b) {
    console.log(a + b);

}
addDec(10, 20);

//function Expression

const addExp = function (a, b) {
    console.log(a + b);
}
addExp(20, 20);


let lang = 'py';
let oldlang = lang;
lang = 'js';

console.log(lang);
console.log(oldlang);

const development = {
    frontend: "JS",
    backend: "JAVA",
};
console.log(development);
const newdevelopment = development;
console.log(newdevelopment);