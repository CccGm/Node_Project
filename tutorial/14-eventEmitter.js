const EventEmitter = require("events");

const customeEmitter = new EventEmitter();

customeEmitter.on("response", (name, id) => {
  console.log(`data recived ${name} was ${id}`);
});

customeEmitter.on("response", () => {
  console.log("data recived");
});

customeEmitter.emit("response", "john", 34);
