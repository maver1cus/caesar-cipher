const commands = require('./module/create-comandder');
const getInputStream = require('./module/getInputStream');
const getOutputStream = require('./module/getOutputStream');
const getTransformStream = require('./module/getTransformStream');
const caesarCipher = require("./module/caesar-cipher");
const path = require('path');
const { pipeline } = require('stream');


let { action, shift, input, output } = commands.opts();

input = (input) ? path.join(__dirname, input) : '';
output = (output) ? path.join(__dirname, output) : '';

if (action !== 'decode' && action !== 'encode') {
  process.stderr.write(
    'Invalid parameter! Please, write encode/decode for action parameter\n'
  );
  process.exit(2);
}

if (shift === undefined || shift === '' || typeof +shift !== 'number') {
  process.stderr.write(
    'Invalid parameter! Please, write number for shift parameter\n'
  );
  process.exit(3);
}

const inputStream = getInputStream(input);
const outputStream = getOutputStream(output);
const transformStream = getTransformStream(caesarCipher, shift, action);

pipeline(
    inputStream,
    transformStream,
    outputStream,
    e => {
      if (e) {
        console.error("Something went wrong", e);
        process.exit(4)
      } else {
        console.log('end work')
      }
    }
  );