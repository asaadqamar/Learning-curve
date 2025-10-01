let dell = { cpu: "2.4GHz", memory: "16GB" };
let HP = { touch: true, speaker: "Best Quality", __proto__: dell };
let Huwava = { smart: true, foldable: true };
// console.log(`HP`, HP, HP.__proto__);

// Modren way to fetch ProtoType
let toyota = { quality: "perfect", wheels: 4, allWheelDrive: true };
let Tesla = { selfdrive: true, electric: true };

Object.setPrototypeOf(Tesla, toyota);

console.log(`Tesla`, Tesla.allWheelDrive);
// console.log(`Tesla`, Tesla);
