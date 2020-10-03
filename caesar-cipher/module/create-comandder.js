const { program } = require('commander');

program
  .storeOptionsAsProperties(false)
  .option('-a, --action [type],', 'an action encode/decode')
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <filename>', 'an input file')
  .option('-o, --output <filename>', 'an output file');

program.parse(process.argv);

module.exports = program;
