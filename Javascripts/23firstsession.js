

// for (let i = 0; i < 5; i++) {
//     console.log(arr[i]);

// }

// for (number of arr) {
//     console.log(number);
// }

// for (i in arr) {
//     console.log(i);
// }
// let i = 0;
// while (i > 8) {
//     console.log("Running");
//     i++;
// }

//foreach loop

// function display(a) {
//     a(10);
// }
// display(function display(number) {
//     console.log(number)
// })
// const arr = [11, 12, 13, 14, 15, 16, 17];
// console.log(arr);
// arr.forEach((item, index, array) => console.log(item));
// function a()
// console.log("running");




// function add(a, b) {
//     return a + b;
// }
// const result = add(10, 20);
// console.log(result);


const obj = {
    name: "MB",
    age: 30,
    favNo: [1, 2, 2, 1],
    calcAge: function () {
        console.log("Running calc age Function");
        return "age";
    },
    freeHours: {
        hourone: 'six-seven',
        hourtwo: 2100,
        allhours: [1800, 1900, 2100],

    }
};
const firsthour = obj.freeHours.hourone;
console.log(firsthour);
const allhour = obj.freeHours.allhours[0];
console.log(allhour);

const { name: myname,
    favNo,
    freeHours: { hourone,
        allhours: [, firstno] },
} = obj;
console.log(myname);
console.log(favNo);

console.log(hourone);
// console.log(allhours[0]);
console.log(firstno);




const arry = [1, 2, 3, 40, [1, 2]];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [a, b, c, d, e] = arry;

console.log(arry);
console.log(...arry);

const allElem = [...arry]
console.log(allElem);

const arrOne = [1, 2, 3, 4];
const arrSec = [5, 6, 7, 8];

const arrThree = arrOne.concat(arrSec);
console.log(arrThree);


console.log([...arrOne, ...arrSec]);

//Array Destructuring
const [first, two, ...third] = arrOne;
console.log(...third);



function disparray(...a) {
    console.log(...a)

}
disparray(1, 2, 3, 4);


// const arr = [1, 2, [20, 30], 4];
// const arra = [1, 2];

// const trdelement = arr[2]
// console.log(trdelement);
// const frthelement = arr[3]
// console.log(frthelement);


// const [frstelem, scndelm, frthelem] = arr;
// console.log(frstelem, scndelm, frthelem);

// const [, , trdelem1] = arra;
// console.log(trdelem1);

// const [, , trdelem2 = 0] = arra; //you can defined the default value
// console.log(trdelem2);






// function add() { }
// const add = function () { }
// const add = () =>




// const display = function (number) {
//     return number;
// };
// console.log(display(20));



// const ar = [1, 2, 3, 4];

// const newArr = [];

const result = ar.map((element) => 20);

const res = ar.forEach((element) => {
    newArr.push(element);
});

console.log(res);
console.log(result);

const ar = [1, 2, 3, 4];
const newArr = [];

