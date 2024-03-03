interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Max",
  age: 35,
  greet(phrase: String) {
    console.log(phrase + '' + this.name);
  },
};
