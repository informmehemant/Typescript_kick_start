"use strict";
var add;
add = function (n1, n2) {
    return n1 + n2;
};
console.log(add(2, 4));
var Person = (function () {
    function Person(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    };
    return Person;
}());
var user1;
user1 = new Person();
user1.greet("Hi there - I am ");
user1 = {
    name: "Max",
    greet: function (phrase) {
        console.log(phrase + '' + this.name);
    },
};
