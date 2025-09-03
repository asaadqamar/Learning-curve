function Cars(model) {
  this.model = model;
}

let model = new Cars("2018");
// console.log(model);

function Tea(type, company) {
  this.type = type;
  this.company = company;
  this.statusOfTea = function () {
    return `Your ${this.type} is of ${this.company}`;
  };
}

let finalResult = new Tea("Green Tea", "Liption");
// console.log(finalResult.statusOfTea());

// prototype
function Schools(quality) {
  this.quality = quality;
}

Schools.prototype.playGround = function () {
  return `${this.quality} quality, and has playground`;
};

let finalSelection = new Schools("Bad");
console.log(finalSelection.playGround());

// Errors
function Drink(name) {
  if (!new.target) {
    throw new Error("   It must be called with New Keyword");
  }
  this.name = name;
}

let drinkName = Drink("cocke");
// console.log(drinkName);
