// Global  - no window !!!

// __dirname - path to current folder
// __filename - file name
// require    - function to use moduls (CommonJs)
// module   - info about currebt module (file)
// process - info abput env where the program is being executed

console.log(__dirname);
console.log(__filename);

setInterval(() => {
  // every one secound call that
  console.log("object");
}, 1000);
