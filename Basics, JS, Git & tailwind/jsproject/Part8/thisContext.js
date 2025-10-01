const person = {
  name: "Asad",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetMe = person.greet;
greetMe();

const bindGreet = person.greet.bind({ name: "Ali" });
bindGreet();

// Differ b/w bind,call, apply
