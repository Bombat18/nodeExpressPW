const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const currentMaxListeners = myEmitter.getMaxListeners();
console.log('Current maximum number of listeners:', currentMaxListeners);

myEmitter.setMaxListeners(5);

const newMaxListeners = myEmitter.getMaxListeners();
console.log('New maximum number of listeners:', newMaxListeners);
