var fs = require("fs");
const nodejs_architecture = ` Event Loop: Manages asynchronous operations.
- V8 Engine: Executes JavaScript code.
- libuv: Provides the event loop and asynchronous I/O.
- Core Modules: Essential modules like fs, http, and more.`
fs.writeFile('nodejs_architecture.txt', nodejs_architecture, (err)=> {
    if (err) throw err;
    console.log("Information has been added Sucessfully." );
})