const event = require('events');
const http = require("http");
const PORT = 4300;
const hostname = 'localhost';


var eventEmitter = new event.EventEmitter();

const server = http.createServer((req, res) => {
    if (req.url == '/') {

        eventEmitter.on('subscribe', (channelName) => {
            res.write(''`Thanks For Subscribeing to ${channelName}`);
        });
        eventEmitter.emit('subscribe', 'College Wallah');

    }
    res.end();
});
server.listen(PORT, () => {
    console.log(`Responce done in ${hostname} in ${PORT}`);
})