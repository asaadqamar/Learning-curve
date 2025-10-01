let allTeas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let t = 0; t < allTeas.length; t++) {
  if (allTeas[t] !== "chai") {
    selectedTeas.push(allTeas[t]);
  } else {
    break;
  }
}

// console.log(selectedTeas);

// challange 2
let cities = ["London", "New York", "Paris", "Berlin"];
let vistedCities = [];

for (let c = 0; c < cities.length; c++) {
  if (cities[c] === "Paris") {
    continue;
  }
  vistedCities.push(cities[c]);
}
// console.log(vistedCities);

// challange 3
let number = [1, 2, 3, 4, 5];
let smallNumber = [];

for (const i of number) {
  if (i === 4) {
    break;
  }
  smallNumber.push(i);
}
// console.log(smallNumber);

// challange 4

let preffredTeas = [];

for (const i of allTeas) {
  if (i === "chai") {
    continue;
  }
  preffredTeas.push(i);
}
// console.log(preffredTeas);

// challange 5
let citiesPopulation = {
  London: 84834786,
  "New York": 2000,
  Paris: 47348485784,
  Berlin: 965465746574,
};

let newPopulatopn = {};

for (const i in citiesPopulation) {
  if (i === "Paris") {
    break;
  }
  newPopulatopn[i] = citiesPopulation[i];
}
// console.log(newPopulatopn);

// Challange 6
let largeCities = {};

for (const i in citiesPopulation) {
  if (citiesPopulation[i] < 3000000) {
    continue;
  }
  largeCities[i] = citiesPopulation[i];
}
// console.log(largeCities);

// challange 7

let availableTea = [];
allTeas.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTea.push(tea);
});
// console.log(availableTea);

// challange 8

let travelCities = [];
cities.forEach((city) => {
  if (city === "Berlin") {
    return;
  }
  travelCities.push(city);
});
// console.log(travelCities);

// Challange 9
let kNumber = [2, 5, 7, 9];
let doubledNumber = [];

for (let i = 0; i < kNumber.length; i++) {
  if (kNumber[i] === 7) {
    continue;
  }
  doubledNumber.push(kNumber[i] * 2);
}
// console.log(doubledNumber);

// Challange 10

let shortTea = [];
for (const tea of allTeas) {
  if (tea.length > 9) {
    continue;
  }
  shortTea.push(tea);
}
console.log(shortTea);
