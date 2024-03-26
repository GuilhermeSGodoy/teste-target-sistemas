function inverteString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

const stringOriginal = "Hello, World!";

const stringInvertida = inverteString(stringOriginal);

console.log("String original: ", stringOriginal);
console.log("String invertida: ", stringInvertida);
