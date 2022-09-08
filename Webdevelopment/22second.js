
// test1(12, 45);
// var a = 10;

var c = test1(12, 45)
//function Declaration
function test1(a, b) {
    //     var a = 11;
    const x = a + b;
    //     function inner() {
    //         var a = 11;
    //         console.log(a);
    //     }
    //     inner()
    return x;
}

// fun();
// //Function Expression
// var fun = function () {
//     console.log(101)
// }

var subs = function (a, b) {
    return a - b;
};
var res = subs(15, 6);
console.log(res);

//Arrow function

var mult = (a, b) => {
    return a * b;
}
var res = mult(15, 6);
console.log(res);

//falsy value
//0, false, null, undefinded

console.log(1 === 2);
console.log(0 === false);

function div(percentage) {
    var result = "fail"
    if (percentage >= 60) {
        result = "First division";
    }
    if (percentage < 60 && percentage >= 45) {
        result = "Second Div";
    }
    if (percentage < 45 && percentage >= 33) {
        result = "3rd Div";
    }
    return result;
}
const division = div(40);
console.log(division);

//switch statement

x = 12;
switch (x) {
    case 10:
        console.log(10)
        var a = 10;
        break;
    case 11:
        console.log("I am in 11");
        break;
    case 12:
        console.log("I am in 12");
        break;
    case 13:
        console.log("I am in 13");
    case 14:
        console.log("I am in 14");
        break;
    default:
        console.log("I am in default");
}
var abc = 10;
var result;

if (abc >= 10) {
    result = "greater than equals to 10";
}
else {
    result = "less than 10";
}
result = abc >= 10 ? "greate than 10" : "less than 10";