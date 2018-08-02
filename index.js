'use strict';
const NeuralNet = require('./NeuralNet');

function sigmoid(a) {
    if (!p) p = 1.0;
    return (1.0 / (1 + math.exp(-a / p)));
}

let brain = new NeuralNet(4, 2, 1, 6);
let outputs = brain.activate([100, 100, 50, 50], -1, sigmoid);
console.log(outputs);