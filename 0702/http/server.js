const http = require('http')//common
//import http form 'http'

const server = http.createServer((req,res)=>{
    res.writeHead(200);
    res.write('<h1>Hello world</h1>')
    res.end('<p>End</p>')
});

server.on('request',()=>{
    console.log("요청이벤트");
})
server.on("connection",()=>{
    console.log("접속이벤트");
});

server.listen(8000,() => {
    console.log("http://localhost:8000");
})