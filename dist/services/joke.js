const fs = require('fs');
const joke = {
    loadJokes() {
        return JSON.parse(fs.readFileSync('./data/jokes.json', 'utf8'));
    },
    randomJoke(jokes) {
        return jokes[Math.floor(Math.random() * jokes.length)];
    },
};
module.exports = joke;
//# sourceMappingURL=joke.js.map