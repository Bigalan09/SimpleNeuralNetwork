const NeuronLayer = require('./NeuralLayer');
const Neuron = require('./Neuron');

class NeuralNet {
    constructor(num_inputs, num_outputs, num_hidden, neurons_per_hidden) {
        this.layers = [];
        if (num_hidden > 0) {
            this
                .layers
                .push(new NeuronLayer(neurons_per_hidden, num_inputs));

            for (let i = 0; i < num_hidden - 1; i++) {
                this
                    .layers
                    .push(new NeuronLayer(neurons_per_hidden, neurons_per_hidden));
            }

            this
                .layers
                .push(new NeuronLayer(num_outputs, neurons_per_hidden));
        } else {
            this
                .layers
                .push(NeuronLayer(num_outputs, num_inputs))
        }
    }

    activate(inputs, bias, activationFunction) {
        return this.layers.reduce((x, y) => {
            return y.activate(x, bias, activationFunction);
        }, inputs, null);
    }
}

module.exports = NeuralNet;