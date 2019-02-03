const express = require('express');
const app = new express();
const port = 3000;

// Logging Middleware
const logger = function (req, res, next) {
  console.log('logging')
  next()
}

// Logger start
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Get /
app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port port!`));


// Get /test
app.get('/test', (req, res) => {
  res.send('GET request to the homepage')
})

// Get Params from Url
app.get('/books/:bookId', (req, res) => {
  res.send(req.params.bookId)
})

// Read File
var fs = require('fs');
fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});


