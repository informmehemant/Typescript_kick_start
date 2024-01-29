// // some comment
// const button = document.querySelector("button");

// // comment
// let logged;
// button?.addEventListener("click", () => {
//   console.log("Clicked");
//   logged = true;
// });
// let local = "hemant";
// function clickHandler(message: string) {
//   console.log("Clock" + message);
// }
// button?.addEventListener("click", clickHandler.bind(null, "me"));

// // next gen javascript

// // const add = (a: number, b: number = 2) => a + b;

// // console.log(add(1));

// // spread operator

// const hobbies = ["Sport", "Cooking"];

// const activeHobby = ["Hiking", ...hobbies];

// // push all the elements
// const person = {
//   name: "Max",
//   age: 30,
// };

// const copiesPerson = { address: "dublin", blood_group: "+0ve", ...person };
// console.log(copiesPerson);

// // this might be generics

// // // const add = (...numbers: number[]) => {
// //   return numbers.reduce((currResult, currValue) => {
// //     return currResult + currValue;
// //   }, 0);
// // };

// // same thing in tuple way
// const add = (...numbers: [number, number, number]) => {
//   return numbers.reduce((currResult, currValue) => {
//     return currResult + currValue;
//   }, 0);
// };
// const addNum = add(5, 6, 7);
// console.log(addNum);

// // array and object destructuring

// const hobbies = ["Sport", "Cooking", "speaking"];
// const [hobby1, hobby2, ...remaining] = hobbies; // array destructing

// const person = {
//   fname: "Max",
//   age: 30,
// };

// const { fname, age } = person;

// console.log(fname);

// // class and object oriented

class Department {
  // public name: string;
  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }
  describe(this: Department) {
    console.log(`Department: (${this.id}): ${this.name}`);
  }
  addEmployee(employees: string) {
    this.employees.push(employees);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const acconting = new Department("1", "Accounting");

acconting.describe();

// const accountingCopy = { name: "Dummy", describe: acconting.describe };

// accountingCopy.describe();

acconting.addEmployee("Max");
acconting.addEmployee("Manu");
acconting.addEmployee("Manaswi");

// avoid to write cleaner code

// accounting.employees[2] = "anna";

acconting.printEmployeeInformation();
