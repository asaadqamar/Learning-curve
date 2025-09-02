// loop

let sum = 0;
let i = 1;

while (i <= 5) {
  sum += i;
  i++;
}

// console.log(sum);

// challange 2
let countdown = [];
let j = 5;

while (j > 0) {
  countdown.push(j);
  j--;
}
// console.log(countdown);

// challange 3
/* let teaCollection = [];
let tea;
do {
  tea = prompt(`Enter tea name, (type "stop" to finish)`);
  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop"); */
// console.log(teaCollection);

//challange 4

let total = 0;
let sum4 = 1;
do {
  total += sum4;
  sum4++;
} while (sum4 <= 3);
// console.log(total);

//challange 5

let multipliedNumbers = [];
let number = [2, 4, 6];

for (let l = 0; l < number.length; l++) {
  multipliedNumbers.push(number[l] * 2);
}

// console.log(multipliedNumbers);

let cities = ["paris", " New York", "Tokyo", "London"];
let cityList = [];

for (let n = 0; n < cities.length; n++) {
  cityList.push(cities[n]);
}
console.log(cityList);
