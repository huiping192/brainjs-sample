const brain = require('brain.js')


function test() {
    const net = new brain.NeuralNetwork();

    net.train([{input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 }},
        {input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 }},
        {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]);

    const output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.99, black: 0.002 }

    console.log(`prob: white: ` + output.white + " black: " + output.black);
}

function test1() {
    const net = new brain.NeuralNetwork();

    net.train([{input: { r: 0.03, g: 0.7 }, output: { black: 1 }},
        {input: { r: 0.16, b: 0.2 }, output: { white: 1 }},
        {input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 }}]);

    const output = net.run({ r: 1, g: 0.4, b: 0 });  // { white: 0.81, black: 0.18 }

    console.log(`prob: white: ` + output.white + " black: " + output.black);
}

function test2() {
    const net = new brain.recurrent.LSTM();

    net.train([
      'doe, a deer, a female deer',
      'ray, a drop of golden sun',
      'me, a name I call myself',
    ]);

    const output = net.run('doe');  // ', a deer, a female deer'

    console.log(`prob:` + output);
}

function test3() {
    const net = new brain.recurrent.LSTM();

    net.train([
      { input: 'I feel great about the world!', output: 'happy' },
      { input: 'The world is a terrible place!', output: 'sad' },
    ]);

    const output = net.run('I feel great about the world!');  // 'happy'

    console.log(`prob:` + output);
}


test3()