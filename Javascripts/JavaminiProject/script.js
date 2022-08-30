"use strict"

const url = "https://api.github.com/users/gorakhjoshi";
console.log(window);


// console.log(response);

// .then((a) => console.log("your promise is fulfilled"))
// .catch(() => console.log("Error"));
console.log("start");
const response = fetch(url)
    .then((res) => {
        console.log("First then");
        return res.json();
    })
    .then((data) => {
        console.log("Secornd then");
        console.log(data);
    })
    .catch((e) => console.log("Eeerror"));
console.log(response);
console.log("End");
