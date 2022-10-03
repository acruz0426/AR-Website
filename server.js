const fs  = require('fs');
const https = require('https')

const hostname = '127.0.0.1';
const port = 3000;

const options = {
    key: fs.readFileSync('./certs/certs-key.pem'),
    cert: fs.readFileSync('./certs/certs.pem'),
};

fs.readFile('./index.html', function (err, html){
    if (err) {
        throw err;
    }
    https.createServer(options, function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8000);
});


// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });