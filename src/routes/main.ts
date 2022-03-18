import * as express from 'express';

export const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Welcome to the Joke API ${process.env.npm_package_version}!`);
});

router.get('/random', (req, res) => {
    res.send(JSON.stringify(req.joke));
});
