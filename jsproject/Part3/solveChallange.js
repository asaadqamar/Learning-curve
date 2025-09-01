// First

let teaFlavors = ["green tea", "black tea", "oolong tea"];

let firstTea = teaFlavors[0];
console.log(firstTea);

// Second

let cities = ["London", "Tokyo", "Paris", "New York"];
let favoriteCity = cities[2];

//third
let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";

// Fourth
let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");

//Fifth
let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop();
// console.log(teaOrders);

//sixth

let popularTeas = ["green tea", "oolong tea", "chai"];
let softCopyTeas = popularTeas;

// seven
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities];
// console.log(hardCopyCities);

// eight
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = europeanCities.concat(asianCities);

console.log(worldCities);

// nine
let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
console.log(menuLength);

// ten
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");

console.log(isLondonInList);
