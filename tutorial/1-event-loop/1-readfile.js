const { readFile } = require("fs");

console.log("start a first stack");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("complete file task");
});
console.log("starting next task");
