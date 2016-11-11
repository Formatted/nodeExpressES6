const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

app.set('port', PORT);
app.use(express.static(`${__dirname}/app/`));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('index');
});

app.listen(app.get('port'));

console.log('Server running at http://127.0.0.1:', PORT);
