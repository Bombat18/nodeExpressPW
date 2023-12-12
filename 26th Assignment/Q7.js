const http = require("http");
const PORT = 4300;
const hostname = 'localhost';
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('<h1> I Am happy To Learn Full Atack Web Development From PW Skills! </h1>');

    }
    res.end();
});
server.listen(PORT, () => {
    console.log(`Responce done in ${hostname} in ${PORT}`);
})