// // // some comment
// // const button = document.querySelector("button");

// import { Shape } from "./abstract";

// // // comment
// // let logged;
// // button?.addEventListener("click", () => {
// //   console.log("Clicked");
// //   logged = true;
// // });
// // let local = "hemant";
// // function clickHandler(message: string) {
// //   console.log("Clock" + message);
// // }
// // button?.addEventListener("click", clickHandler.bind(null, "me"));

// // // next gen javascript

// // // const add = (a: number, b: number = 2) => a + b;

// // // console.log(add(1));

// // // spread operator

// // const hobbies = ["Sport", "Cooking"];

// // const activeHobby = ["Hiking", ...hobbies];

// // // push all the elements
// // const person = {
// //   name: "Max",
// //   age: 30,
// // };

// // const copiesPerson = { address: "dublin", blood_group: "+0ve", ...person };
// // console.log(copiesPerson);

// // // this might be generics

// // // // const add = (...numbers: number[]) => {
// // //   return numbers.reduce((currResult, currValue) => {
// // //     return currResult + currValue;
// // //   }, 0);
// // // };

// // // same thing in tuple way
// // const add = (...numbers: [number, number, number]) => {
// //   return numbers.reduce((currResult, currValue) => {
// //     return currResult + currValue;
// //   }, 0);
// // };
// // const addNum = add(5, 6, 7);
// // console.log(addNum);

// // // array and object destructuring

// // const hobbies = ["Sport", "Cooking", "speaking"];
// // const [hobby1, hobby2, ...remaining] = hobbies; // array destructing

// // const person = {
// //   fname: "Max",
// //   age: 30,
// // };

// // const { fname, age } = person;

// // console.log(fname);

// // // class and object oriented

// class Department {
//   // public name: string;
//   private employees: string[] = [];
//   constructor(private readonly id: string, public name: string) {
//     // this.name = n;
//   }
//   describe(this: Department) {
//     console.log(`Department: (${this.id}): ${this.name}`);
//   }
//   addEmployee(employees: string) {
//     this.employees.push(employees);
//   }
//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// const acconting = new Department("1", "Accounting");

// acconting.describe();

// // const accountingCopy = { name: "Dummy", describe: acconting.describe };

// // accountingCopy.describe();

// acconting.addEmployee("Max");
// acconting.addEmployee("Manu");
// acconting.addEmployee("Manaswi");

// // avoid to write cleaner code

// // accounting.employees[2] = "anna";

// acconting.printEmployeeInformation();

// gemini teaching

// class Person {
//   constructor(
//     public name: string = "Default Name",
//     public age: number = 0,
//     public occupation: string = "Unknown"
//   ) {}
//   greet() {
//     console.log(
//       `Hi my name is ${this.name}, age ${this.age} and my Occupations is ${this.occupation}`
//     );
//   }
// }

// class Student extends Person {
//   constructor(private studentId: string, public enrolledCourses: string[]) {
//     super();
//   }
//   study() {
//     console.log(
//       `${this.name} id =${this.studentId} , study ${this.enrolledCourses}`
//     );
//   }
// }

// class Instructor extends Person {
//   constructor(private department: string, public coursesTaught: string[]) {
//     super();
//   }
//   teach() {
//     console.log(
//       `${this.name} department=${this.department} , teaches ${this.coursesTaught}`
//     );
//   }
// }

// abstract class

// class Rectange extends Shape {
//   constructor(public width: number, public height: number) {
//     super();
//   }
//   calculateArea(): number {
//     return this.width * this.height;
//   }
// }

// class Circle extends Shape {
//   constructor(public radius: number) {
//     super();
//   }
//   calculateArea(): number {
//     return Math.PI * Math.pow(this.radius, 2);
//   }
// }

// const rectange = new Rectange(5, 20);
// const circle = new Circle(3);

// console.log("Rectange area:", rectange.calculateArea());
// console.log("circle area:", circle.calculateArea());

abstract class Department {
  // private readonly id: string;
  // private name: string;
  static fiscalYear: number = 2024;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    console.log(Department.fiscalYear); // way to access fiscalYear(static variable)
  }
  static createEmployee(name: string) {
    return { name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string = "";
  private static instance: AccountingDepartment;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
  describe(): void {
    console.log("Accounting Department - ID " + this.id);
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

// it.employees[2] = 'Anna';

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

// const accounting = new AccountingDepartment("d2", []);
const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReport = "adding new value";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();

const employee1 = Department.createEmployee("Max");

console.log(employee1, Department.fiscalYear);
accounting.describe();
