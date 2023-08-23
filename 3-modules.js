// moduls - encapsulated code (only sgre minimum)

// ~~ local

// const secret = "SUPER SECRET";
// const gm = "gm";
// const a12 = "12";

// const sayHi = (name) => {
//   console.log(`hello there ${name}`);
// };

// sayHi("np");
// sayHi(gm);
// sayHi(a12);

// ~~ Global

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");

sayHi("np");
sayHi(names.gm);
sayHi(names.a12);
