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

firstNumbers.sort()
secondNumbers.sort()

let sum = 0;

for (let i = 0; i < firstNumbers.length; i++) {
    sum += Math.abs(firstNumbers[i] - secondNumbers[i])
}

console.log(sum)


