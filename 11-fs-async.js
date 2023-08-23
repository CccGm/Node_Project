const { readFile, writeFile } = require("fs");
console.log("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("error =>", err);
    return;
  }
  const first = result;
  readFile("./content/secound.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err, "error");
      return;
    }
    const secound = result;
    writeFile(
      "./content/result-async.txt",
      `here is the rely: ${first},${secound}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");
