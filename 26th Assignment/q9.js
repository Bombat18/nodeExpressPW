const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const myEventHandler = () => {
  console.log('Event handler called!');
};

myEmitter.on('myEvent', myEventHandler);
myEmitter.emit('myEvent');
myEmitter.off('myEvent', myEventHandler);
myEmitter.emit('myEvent');