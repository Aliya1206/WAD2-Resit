const express = require('express');
const app = express();
require('dotenv').config();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.urlencoded({
    extended: true
}))

const path = require('path');
const public = path.join(__dirname, 'public');
app.use(express.static(public));

app.use('/css', express.static(__dirname + '/public/css'));

const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('view engine', 'mustache');


const router = require('./routes/courseworkRoutes');
app.use('/', router);

app.listen(3000, () => {
    console.log('Server started on port 3000. Crt^c to quit.');
}) 