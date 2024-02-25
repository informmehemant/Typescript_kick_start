"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name, age, occupation) {
        if (name === void 0) { name = "Default Name"; }
        if (age === void 0) { age = 0; }
        if (occupation === void 0) { occupation = "Unknown"; }
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    Person.prototype.greet = function () {
        console.log("Hi my name is ".concat(this.name, ", age ").concat(this.age, " and my Occupations is ").concat(this.occupation));
    };
    return Person;
}());
var Student = (function (_super) {
    __extends(Student, _super);
    function Student(studentId, enrolledCourses) {
        var _this = _super.call(this) || this;
        _this.studentId = studentId;
        _this.enrolledCourses = enrolledCourses;
        return _this;
    }
    Student.prototype.study = function () {
        console.log("".concat(this.name, " id =").concat(this.studentId, " , study ").concat(this.enrolledCourses));
    };
    return Student;
}(Person));
var Instructor = (function (_super) {
    __extends(Instructor, _super);
    function Instructor(department, coursesTaught) {
        var _this = _super.call(this) || this;
        _this.department = department;
        _this.coursesTaught = coursesTaught;
        return _this;
    }
    Instructor.prototype.teach = function () {
        console.log("".concat(this.name, " department=").concat(this.department, " , teaches ").concat(this.coursesTaught));
    };
    return Instructor;
}(Person));
