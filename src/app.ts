class Department {
  protected employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }
  // This means intanciation with Deparment class
  describe(this: Department) {
    console.log(`Department ${this.id}: ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[]; // this is long way to write the code
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const It = new ITDepartment("d1", ["Hemant"]);
class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReporting(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}
// It.employees[2] = "Basava"; // this method will not work because of

It.describe();

// This is js flaw where this doesn't work

// const ItCopy = { name: "Dummy", describe: It.describe };

// ItCopy.describe();

It.addEmployee("Hemant");
It.addEmployee("Shashi");

It.printEmployeeInformation();

const accounting = new AccountingDepartment("d2", []);
accounting.addReporting("some thing went wrong !!!");
accounting.addEmployee("Anitha");
accounting.printEmployeeInformation();
