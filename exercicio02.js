function buscaFibonacci(numero, qtdeTermos) {
    let a = 0;
    let b = 1;

    if (numero === 0 || numero === 1) {
        return true;
    }

    let c;
    let termosCalculados = 2;

    while (termosCalculados < qtdeTermos) {
        c = a + b;

        if (c > numero) {
            return false;
        }

        else if (c === numero) {
            return true;
        }
        a = b;
        b = c;
        termosCalculados++;
    }

    return false;
}

// Quantidade de termos da sequência gerada. O valor pode ser alterado para efetuar novos testes.
const qtdeTermos = 15;

// Valor a ser buscado na sequência, que também pode ser alterado para novos testes.
const valorEntrada = 21;

if (buscaFibonacci(valorEntrada, qtdeTermos)) {
    console.log(`${valorEntrada} pertence à sequência de Fibonacci com ${qtdeTermos} termos.`);
} else {
    console.log(`${valorEntrada} não pertence à sequência de Fibonacci com ${qtdeTermos} termos.`);
}
