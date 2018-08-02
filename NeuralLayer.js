const Neuron = require('./Neuron');

class NeuralLayer {
    constructor(num_neurons, num_inputs_per_neuron) {
        this.neurons = new Array(num_neurons);
        for (let i = 0; i < num_neurons; i++) {
            this
                .neurons
                .push(new Neuron(num_inputs_per_neuron));
        }
    }

    activate (inputs, bias, activationFunction) {
        let outputs = [];
        for (let neuron of this.neurons) {
            let result = neuron.activate(inputs, bias);
            if (activationFunction) result = activationFunction(result);
            outputs.push(result);
        }
        return outputs;
    }
}

module.exports = NeuralLayer;
