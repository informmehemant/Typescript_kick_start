// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) =>{
  return n1+ n2;
}

console.log(add(2,4))

interface Named {
  readonly name?: string;
  outputName?: string;
}
interface Greetable extends Named{
  greet(phrase: string): void;
}

class Person implements Greetable{
  name?: string;
  age =  30;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
    
  }
  greet(phrase: string): void {
    if (this.name) {
      console.log(phrase +' '+ this.name)
    } else {
      console.log('Hi!');
    }
    
  }

}

let user1: Greetable;
user1 = new Person();
// user1.name = "hemant"
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

// class can extend only once, reverse of interface

