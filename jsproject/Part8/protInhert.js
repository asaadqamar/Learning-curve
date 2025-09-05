// prototypal Inheritance

function person(name) {
  this.name = name;
}

person.prototype.greet = function () {
  console.log(`hello my name is ${this.name}`);
};

let greeting = new person("Asaad");

console.log(greeting.greet());
