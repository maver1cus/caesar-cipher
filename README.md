#Task Caesar cipher CLI tool

### Guide how to use CLI

### Installation
    npm install
### Usage
```bash
node caesar-cipher-cli.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
   Options:
    - -a, --action [type],     an action encode/decode
    - -s, --shift <number>     a shift
    - -i, --input <filename>   an input file
    - -o, --output <filename>  an output file

**Usage example:**

```bash
node caesar-cipher-cli.js -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
node caesar-cipher-cli.js --action encode --shift 7 --input plain.txt --output encoded.txt
```

```bash
node caesar-cipher-cli.js --action decode --shift 7 --input decoded.txt --output plain.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
