const events = require("events");
const eventEmitter = new events.EventEmitter();

// Creating an event handler:
const myEventHandler = () => {
  console.log("I hear a scream");
};

// Assigning the event handler to an event:
eventEmitter.on("scream", myEventHandler);

// Firing the 'scream' event:
eventEmitter.emit("scream");
