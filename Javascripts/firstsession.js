"use strict";
//Set Method
const numberSet = new Set([1, 2, 3, 4, 5, 6, 7, 1, 2]);
console.log(numberSet);

console.log(numberSet.has(3));

console.log(numberSet.delete(4));
console.log(numberSet);

console.log(numberSet.clear);
console.log(numberSet);

//numberSet.map

const mainMenu = new Set(["Pizza", "Momo", "pasta", "pizza", "Rice"]);
console.log(mainMenu);

for (const menuItem of mainMenu) {
    console.log(menuItem);
}
console.log([...mainMenu]);