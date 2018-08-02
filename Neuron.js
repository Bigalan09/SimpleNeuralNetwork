class Neuron {
    constructor(num_inputs, weights) {
        if (weights) {
            this.weights = weights;
            this.weights.push(Math.random() - Math.random());
            this.num_inputs = this.weights.length + 1;
        } else {
            this.weights = [];
            for (let i = 0; i < num_inputs + 1; i++) {
                this
                    .weights
                    .push(Math.random() - Math.random());
            }
            this.num_inputs = num_inputs + 1
        }
    }

    activate(inputs, bias) {
        if (this.num_inputs != inputs.length + 1) {
            console.error("number of weights and number of inputs must match.");
            return;
        }
        let output = 0.0;
        for (let i = 0; i < this.num_inputs - 1; i++) {
            output += inputs[i] * this.weights[i];
        }
        output += bias * this.weights[this.weights.length - 1];

        return output;
    }
}

module.exports = Neuron;