const dotenv = require('dotenv');
const express = require('express');
const session = require ('express-session');

dotenv.config();

const PORT = process.env.PORT || 1234;
const router = require('./app/router');
const dataMapper = require('./app/dataMapper');

const app = express();

app.use(express.static('public'));

app.use( session({
  secret: 'Hello, we are Jason and we make beautiful projects',
  saveUninitialized: true,
  resave: true,
  cookie: {
      secure:false,
      maxAge: 1000*60*60
    }
  }) 
);

app.set('view engine', 'ejs');
app.set('views', 'app/views');


app.use(router);


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
