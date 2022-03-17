const expressService = require('express');
const routes = require('./routes/main');
const jokeService = require('./services/joke');
const packageInformation = require('../package.json');
const app = expressService();
const port = 80;
const jokes = jokeService.loadJokes();
process.env.VERSION = packageInformation.version;
const jokeMiddleware = (req, res, next) => {
    req.joke = jokeService.randomJoke(jokes);
    next();
};
app.use(jokeMiddleware);
app.use('/', routes);
app.listen(port, null);
//# sourceMappingURL=index.js.map
