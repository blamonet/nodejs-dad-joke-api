import fs = require('fs');

export namespace JokeService {
    export function loadJokes(): Array<string> {
        return JSON.parse(fs.readFileSync('./data/jokes.json', 'utf8'));
    }
    export function randomJoke(jokes: Array<string>): string {
        return jokes[Math.floor(Math.random() * jokes.length)];
    }
}
