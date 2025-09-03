// Function ONE
/* function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}

let teaOrder = makeTea("Zafrani Tea"); */
// console.log(teaOrder);

// Function Two
function orderTea(teaTypes) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}
let confirmedOrder = orderTea();
// console.log(confirmedOrder);

// Arrow Function
const calculateTotal = (price, quantity) => {
  return price * quantity;
};
let totalCost = calculateTotal("10", "5");
// console.log(totalCost);

// fUNCTION 4
function makeTea(typeOfTea) {
  return `maked tea is ${typeOfTea}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}

let teaStatus = processTeaOrder(makeTea);
// console.log(teaStatus);

// function five

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}

let teaMaker = createTeaMaker();
let result = teaMaker("Tea");
console.log(result);
