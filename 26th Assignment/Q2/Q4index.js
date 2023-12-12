const { log } = require('console');
var fs = require('fs');
var data = `Advantages of Node.js:

1. Non-blocking I/O: Node.js is designed to handle asynchronous operations efficiently, making it suitable for building scalable and high-performance applications.

2. Single programming language: Node.js allows you to use JavaScript for both server-side and client-side development, promoting code reuse and consistency.

3. Large and active community: Node.js has a vibrant and active community that contributes to a rich ecosystem of modules and tools, making development faster and more straightforward.`
fs.appendFile('Q2\\nodejs_architecture.txt', data, 'utf8', (err) => {
    if (err) throw err;
    console.log("sucess");
})
fs.readFile('Q2\\nodejs_architecture.txt','utf8',(readErr,data)=>{
    if (readErr) throw readErr;
    console.log('Updated file :',data);
})