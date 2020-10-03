const { Transform } = require("stream");

class UpperCaseTransformer extends Transform {
  constructor(func, shift, action) {
    super();
    this.func = func
    this.shift = shift
    this.action = action
  }
  _transform(data, encoding, callback) {
    this.push(this.func(data.toString(), this.shift, this.action));
    callback();
  }
};

module.exports = getTransformStream = (func, shift, action) => new UpperCaseTransformer(func, shift, action)