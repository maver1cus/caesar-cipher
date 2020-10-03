const fs = require("fs");

module.exports = outputStream = output => {
  if (output) {
    if (fs.existsSync(output)) {
      return fs.createWriteStream(output, { flags: 'a+' });
    } else {
      console.error("Output file does not exist");
      process.exit(3);
    }
  }

  return process.stdout;
}