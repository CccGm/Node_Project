const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const secound = readFileSync("./content/secound.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `here is the result ${first},${secound}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next one");
