const dotenv = require('dotenv');
const express = require('express');
dotenv.config();

const PORT = process.env.PORT || 1234;
const router = require('./app/router');
const dataMapper = require('./app/dataMapper');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
