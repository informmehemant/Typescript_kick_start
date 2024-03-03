interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable{
  name: string;
  age =  30;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase: string): void {
    console.log(phrase +' '+ this.name)
  }

}

let user1: Greetable;

user1 = new Person('Max');

user1.greet("Hi there - I am ");

user1 = {
  name: "Max",
  greet(phrase: String) {
    console.log(phrase + '' + this.name);
  },
};


// readonly only modifier in interface

interface Greetable1 {
  readonly name: string;
  greet(phrase: string):void ;
} 

type Greetable4 = {
  readonly name: string;
  greet(phrase: string): void ;
}
