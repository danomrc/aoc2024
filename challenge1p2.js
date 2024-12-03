const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8');

const inputArray = input.split('\n');

const firstNumbers = [];
const secondNumbers = [];

for (let i = 0; i < inputArray.length; i++) {
    const [a, b] = inputArray[i].split(' ').map(Number);
    firstNumbers.push(a);
    secondNumbers.push(b);
}

const occurenceMap = new Map();

secondNumbers.forEach(element => {
    if (occurenceMap.has(element)) {
        occurenceMap.set(element, occurenceMap.get(element) + 1);
    } else {
        occurenceMap.set(element, 1);
    }
});

let sum = 0;

for (let i = 0; i < firstNumbers.length; i++) {
    const frequency = occurenceMap.get(firstNumbers[i]);
    if (occurence) {
       sum += firstNumbers[i] * frequency;
    }
}

console.log(sum)


