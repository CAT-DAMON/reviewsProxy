const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
require('newrelic');

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static('lib'));
app.use('/listing/:storeId/:itemId', express.static(path.join(__dirname, 'index.html')))
app.use('/loaderio-b4426e5005f280df638b295f80075f6b.txt', express.static(path.join(__dirname, '../loader.io.txt')));

app.get('/listing/:store/:item', (req, res) => {
  const api = req.params;
  res.redirect(`http://52.53.212.170/listing/${api.store}/${api.item}`);
});

app.listen(port, () => {
  console.log(`Proxy listening at http://localhost:${port}`);
});
