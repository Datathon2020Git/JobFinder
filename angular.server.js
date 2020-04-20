const express = require('express');
const path = require('path');
const http = require('http');
// var bodyParser = require('body-parser')

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || '8080';
// app.use(bodyParser.json());
app.use(express.static('.'));
app.set('port', port);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/** 
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on port:${port}`));