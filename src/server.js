const express = require('express');
const path = require('node:path');
const router = require('./router');
const session = require('express-session');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'keyboard-secret-encryption',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

app.use(router);

app.listen(PORT, () => { console.log(`servidor ativo http://localhost:${PORT}`) });