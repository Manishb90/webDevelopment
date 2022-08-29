//Constructor FUnction 
// function Person() {

// }
// "use strict";
//this keyword
console.log(this)
const obj = {
    name: "MB",
    Age: 31,
    calcAge: function () {
        console.log(this);
    },
};
obj.calcAge();



let lockdown = true;
const canDrive = true;

if (canDrive) {
    lock = true;
}
if (lockdown) {
    console.log("you can drive");
}

//Falsy values in JS
//0, fALSE, NULL, undefined, NaN, ''

// const no = 1
// const totalproduct = no ?? 20;

// console.log(no);
// if (totalproduct) {
//     console.log('You have total Product');
// }
// else {
//     console.log('You dont have total no');

// }

