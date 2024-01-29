"use strict";
var Department = (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.prototype.describe = function () {
        console.log("Department: (".concat(this.id, "): ").concat(this.name));
    };
    Department.prototype.addEmployee = function (employees) {
        this.employees.push(employees);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
var acconting = new Department("1", "Accounting");
acconting.describe();
acconting.addEmployee("Max");
acconting.addEmployee("Manu");
acconting.addEmployee("Manaswi");
acconting.printEmployeeInformation();
