const fs = require("fs");

module.exports = inputStream = input => {
  if (input) {
    if (fs.existsSync(input)) {
      return fs.createReadStream(input);
    } else {
      console.error("Input file does not exist");
      process.exit(3);
    }
  }

  return process.stdin;
}