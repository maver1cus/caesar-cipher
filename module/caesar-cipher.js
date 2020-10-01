module.exports = function caesarCipher (str, shift, action) {
    const START_CODE_UPPERCASE_SYMBOLS = 65;
    const END_CODE_UPPERCASE_SYMBOLS = 90;
    const START_CODE_LOWERCASE_SYMBOLS = 97;
    const START_CODE_LOWECASE_SYMBOLS = 122;
    const COUNT_SYMBOLS_ALPHABET = 26;
    shift = action === 'encode' ? +shift : -shift;
    str = str.toString()
    
    if (shift < 0) shift = shift + 26;
    
    return str.split('').map(symbol => {
      const codeSymbol = symbol.charCodeAt();
      if (codeSymbol >= START_CODE_UPPERCASE_SYMBOLS && codeSymbol <= END_CODE_UPPERCASE_SYMBOLS) {
        symbol = String.fromCharCode(
          ((codeSymbol - START_CODE_UPPERCASE_SYMBOLS + shift) % COUNT_SYMBOLS_ALPHABET) + START_CODE_UPPERCASE_SYMBOLS
        );
      } else if (codeSymbol >= START_CODE_LOWERCASE_SYMBOLS && codeSymbol <= START_CODE_LOWECASE_SYMBOLS) {
        symbol = String.fromCharCode(
          ((codeSymbol - START_CODE_LOWERCASE_SYMBOLS + shift) % COUNT_SYMBOLS_ALPHABET) + START_CODE_LOWERCASE_SYMBOLS
        );
      }
      return symbol
    }).join('')
}
  