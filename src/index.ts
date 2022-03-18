import express from 'express';
import { router } from './routes/main';
import { JokeService } from './services/joke';

const app = express();
const port = 80;

const jokes = JokeService.loadJokes();

const jokeMiddleware = (req, res, next) => {
    req.joke = JokeService.randomJoke(jokes);
    next();
};

app.use(jokeMiddleware);

app.use('/', router);

app.listen(port, null);
