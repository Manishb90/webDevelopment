"use strict";
//Map Method

const restaurant = new Map();
restaurant.set("Open", 10).set("close", 22);;
console.log(restaurant);
// console.log(restaurant.get("Open"));

console.log(...restaurant);

console.log(restaurant.has("Open"));

var twoSum = function (nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in map) {
            return [map[target - nums[i]], i];
        } else {
            map[nums[i]] = i;
        }
    }
};


