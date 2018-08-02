'use strict';
const NeuralNet = require('./NeuralNet');

function sigmoid(a, p) {
    if (!p) p = 1.0;
    return (1.0 / (1 + Math.exp(-a / p)));
}

let brain = new NeuralNet(4, 2, 3, 6);
let outputs = brain.activate([100, 150, 0.30, 0.6], -1, sigmoid);
console.log(outputs);