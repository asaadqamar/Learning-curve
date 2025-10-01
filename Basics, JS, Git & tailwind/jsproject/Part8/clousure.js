// clousure in JS

function closure() {
  let counter = 3;
  return function () {
    counter++;
    return counter;
  };
}
let result = closure();
console.log(result());
