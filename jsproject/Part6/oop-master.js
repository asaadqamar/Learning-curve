class Car {
  constructor(make, model, seats, speed) {
    this.make = make;
    this.model = model;
    this.seats = seats;
    this.speed = speed;
  }

  drive() {
    return `${this.make} drives at ${this.speed}`;
  }

  capacity() {
    return `${this.make}, ${this.model} gas capacity of ${this.seats}`;
  }
}

class Truck extends Car {
  constructor(make, model, seats, speed, load) {
    super(make, model, seats, speed);
    this.load = load;
  }

  loadC() {
    return `${this.make} has load capacity of ${this.load}`;
  }
}

let finalCar = new Car("Toyota", 2010, 4, 200);
// console.log(finalCar.drive());

let finalTruck = new Truck("Toyota", 2010, 4, 200, "2 tons");
// console.log(finalTruck.loadC());

// Encapsulation (hidin imp info using #)

class BankAccount {
  #ID = "8883 - 7873 - 8733 - 89838";
  #balance = 67667.78;
  loan = 5000;

  constructor(depositAmount) {
    this.depositAmount = depositAmount;
  }

  squareOff() {
    let squareAmount = this.#balance - this.loan;
    return squareAmount;
  }

  deposit() {
    return this.#balance + this.depositAmount;
  }
}

let accDetails = new BankAccount(5000);
// console.log(accDetails.deposit());

// Abstruction (just returning the minimal message, don't want to know what's going on )

class YoYRevenue {
  search() {
    // calculate the lats year earning
    // cal this year earning
    return `Calculating the earning ....`;
  }
  yoyDiffer() {
    // cal yearly difference
    return `Getting the yearly Difference.....`;
  }
  result() {
    // displaying result based on different var
    let search = this.search();
    let yoyDiffer = this.yoyDiffer();
    return `1- ${search} 2- ${yoyDiffer}`;
  }
}

let finalResult = new YoYRevenue();
// console.log(finalResult.result());

// polymorphism (one thing can take many forms)
class bird {
  fly() {
    return `I can fly`;
  }
}

class penguin extends bird {
  fly() {
    return `I can't fly`;
  }
}

let Bird = new bird();
let Penguin = new penguin();
// console.log(Bird.fly());
// console.log(Penguin.fly());

// Static method in class, no one access in object only accesable by class itself
class calculater {
  static add(a, b) {
    return a + b;
  }
}

// console.log(calculater.add(5, 20));

// Getter or Setters
class Employee {
  #salery;
  constructor(name, salery) {
    if (salery.value < 0) {
      throw new Error(`salery can't be ngitive`);
    }
    this.name = name;
    this.#salery = salery;
  }

  get salery() {
    return `you cant get salery`;
  }
  set salery(value) {
    if (value < 0) {
      return `salery can't be ngitive`;
    }
  }
}

let empData = new Employee("ali", -500);
console.log(empData);
