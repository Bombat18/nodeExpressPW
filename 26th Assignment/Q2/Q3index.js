
var fs = require("fs");

fs.readFile('Q2\\nodejs_architecture.txt', (err, data) => {
    if (err) {
        return console.error(err);
    }
    else {
        console.log("Sucess" + data.toString());
    }
})