const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`Welcome to the Joke API ${process.env.VERSION}!`);
});

router.get('/random', (req, res) => {
    res.send(JSON.stringify(req.joke));
});

module.exports = router;
