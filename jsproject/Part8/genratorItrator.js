// By adding * into the function keyword itself it become Genrator function and it itrates only the number of time it has yield in it

function* genratorFun() {
  yield 1;
  yield 2;
  yield 3;
}

let getGenrator = genratorFun();
console.log(getGenrator.next().value);
console.log(getGenrator.next().value);
console.log(getGenrator.next().value);
console.log(getGenrator.next().value);
