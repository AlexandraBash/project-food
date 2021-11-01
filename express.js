const express = require('express');
const app = express();
const port = 3001;


app.use('/', express.static(__dirname + '/public'));

app.post('/api/send', (req, res) => {

  res.status(201).json({ok: true});
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
  });

app.listen(port, () => {
  console.log(`Сервер запущен http://localhost:${port}`);
});