//These next instructions are to be written in JavaScript in the < script > tag-- >
//< !-- 🐨 Create a div-- >
///< !--   💰 document.createElement('div')-- >

//< !-- 🐨 Set the div's textContent to 'Hello World' and className to 'container' -->
//    < !--   💰 div.textContent = '...' -- >

//< !-- 🐨 Append the div to the root div using`append` -- >
//< !--   💰 document.getElementById('root')-- >
//< !--   📜 https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append -->
"use strict";

//creating sourceElement(div) element
const sourceElement = document.createElement("div");
sourceElement.id = "root";

//targeting destination
const destination = document.body;

//sending sourceElement(div) to destination 
destination.append(sourceElement);

//creating another div
const divElement = document.createElement("div");
divElement.textContent = "Hello World";
divElement.className = "container";

//sending divELement to sourceElement

sourceElement.append(divElement);

