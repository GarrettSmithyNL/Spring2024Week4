// Define/extend an EventEmitter class
const EventEmiiter = require("events");
class MyEmitter extends EventEmiiter {}

// initialize an new emitter object
const myEmitter = new MyEmitter();

myEmitter.addListener("example", () =>
  console.log("event 1st example has been emitted")
);
myEmitter.on("example", () =>
  console.log("event 2nd example has been emitted")
);
myEmitter.on("example", () =>
  console.log("event 3rd example has been emitted")
);

// add
myEmitter.on("sample", () => console.log("event 1 sample has been emitted"));
myEmitter.on("sample", () => console.log("event 2 sample has been emitted"));
myEmitter.on("sample", () => console.log("event 3 sample has been emitted"));
myEmitter.on("sample", () => console.log("event 4 sample has been emitted"));

console.log(
  "example: the 'example' event count is: ",
  myEmitter.listenerCount("example")
);
console.log(
  "sample: the 'sample' event count is: ",
  myEmitter.listenerCount("sample")
);
console.log("Event names: ", myEmitter.eventNames());

console.log("emit(fire) the sample example");
const firstSample = () => {
  myEmitter.emit("sample");
};
firstSample();

console.log("emit(fire) the event example");
const firstExample = () => {
  myEmitter.emit("example");
};
firstExample();
