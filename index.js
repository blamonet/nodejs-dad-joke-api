const express = require('express');
const routes = require('./routes/main');
const joke = require('./services/joke');

const app = express();
const port = 80;

const jokes = joke.loadJokes();

const jokeMiddleware = (req, res, next) => {
    req.joke = joke.randomJoke(jokes);
    next();
};

app.use(jokeMiddleware);
app.use('/', routes);

app.listen(port, null);
