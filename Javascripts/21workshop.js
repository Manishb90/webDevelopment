console.log("hello World");
var obj = {
    x: 10,
};
console.log(obj);
//primitive
//--number,string,boolean,null,undefined,symbol
//non-primitive
//--object

var a = "manish";
var n = 10;
console.log(a);
console.log(n);

var a = 10;
var b = a;
var x = b;
var x1;
console.log(x1);

//3 equals means both the data and datatype are equal//
var x2 = "test";
var y2 = "test";

var t = x2 === y2;
console.log(t);

//Array index start from 0
var arr = [24, 34, 12, 19, 40]
console.log(arr[2]);

var obj = {
    name: "Rahul Kumar",
    age: 32,
};


var xy = obj.age;
//accessing using DOT operator
console.log(obj.name);
console.log(xy)

//accessing using Square Bracket
var ageString = "age"
console.log(obj[ageString]);

function fun1() {

}
console.log(typeof fun1);

