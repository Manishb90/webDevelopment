// alert('Helllo');

// Terminal(Node.js)
// or In Browser

const bootcamp = "React";
console.log(bootcamp);
// document.write('Hello')
// console.log(document)
// console.log("Hello from JS");

const evenNumbers = [2, 8, 4, 6];

console.log(evenNumbers);
console.log(typeof evenNumbers);
console.log(evenNumbers[3]);

// to create a oject we use curly bracket
const bootcamps = {
    course: "React",
    Duration: "3 months",
};
console.log(bootcamps.course) //you can print anything by selecting .we have property name for object but not for array

const arrayBootcamp = ["React", "3 month"]
console.log(arrayBootcamp[1]);

//we can use function multiple times

function addTwoNumber(first, second) {
    return first + second;
}
const result = addTwoNumber(20, 40)
console.log(result)

const secondresult = addTwoNumber(2, 40)
console.log(secondresult)