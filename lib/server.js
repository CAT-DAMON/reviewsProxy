const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
require('newrelic');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('lib'));
app.use('/listing/:storeId/:itemId', express.static(path.join(__dirname, 'index.html')));

app.get('/', (req, res) => {
  res.redirect('/listing/10/93');
});

app.listen(port, () => {
  console.log(`Proxy listening at http://localhost:${port}`);
});
