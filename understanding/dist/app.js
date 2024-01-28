"use strict";
const button = document.querySelector("button");
let logged;
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("Clicked");
    logged = true;
});
let local = "hemant";
function clickHandler(message) {
    console.log("Clock" + message);
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", clickHandler.bind(null, "me"));
const hobbies = ["Sport", "Cooking"];
const activeHobby = ["Hiking", ...hobbies];
const person = {
    name: "Max",
    age: 30,
};
const copiesPerson = Object.assign({ address: "dublin", blood_group: "+0ve" }, person);
console.log(copiesPerson);
const add = (...numbers) => {
    return numbers.reduce((currResult, currValue) => {
        return currResult + currValue;
    }, 0);
};
const addNum = add(5, 6, 7);
console.log(addNum);
