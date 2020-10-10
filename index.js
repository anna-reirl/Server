const http = require('http')

const app = http.createServer((req, res) => {
    if (req.url === './hello') {
        res.statusCode = 418;
        res.setHeader('X-Custom-Header','skillfactory');
        res.write('Hello from server!');
    } else if (req.method === 'POST' && req.url === '/data') {
        res.write('I\'ve got your data');
    } else {
        res.write("Default response");
    }
    res.end();  
});

app.listen(8000)

app.on('listening', ()=>{
    console.log('server is listening on port 8000')
})