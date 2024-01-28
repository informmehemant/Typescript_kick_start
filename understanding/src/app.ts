// some comment
const button = document.querySelector("button");

// comment
let logged;
button?.addEventListener("click", () => {
  console.log("Clicked");
  logged = true;
});
let local = "hemant";
function clickHandler(message: string) {
  console.log("Clock" + message);
}
button?.addEventListener("click", clickHandler.bind(null, "me"));

// next gen javascript

// const add = (a: number, b: number = 2) => a + b;

// console.log(add(1));

// spread operator

const hobbies = ["Sport", "Cooking"];

const activeHobby = ["Hiking", ...hobbies];

// push all the elements
const person = {
  name: "Max",
  age: 30,
};

const copiesPerson = { address: "dublin", blood_group: "+0ve", ...person };
console.log(copiesPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((currResult, currValue) => {
    return currResult + currValue;
  }, 0);
};

const addNum = add(5, 6, 7);
console.log(addNum);
