import http from 'http';
const server = http.createServer((req, res) => {
    const url=req.url;
    const method=req.method;
    if(url=="/msg" && method=="GET"){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World Successful\n');
    }
});

const port = 3000;
server.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}/`); 
});

