const express = require('express');
const { version } = require('../../package.json').version;
const router = express.Router();
router.get('/', (req, res) => {
    res.send(`Welcome to the Joke API ${version}!`);
});
router.get('/random', (req, res) => {
    res.send(JSON.stringify(req.joke));
});
module.exports = router;
//# sourceMappingURL=main.js.map