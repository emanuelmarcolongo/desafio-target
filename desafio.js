function question1 () {
    let indice = 13;
    let soma = 0;
    
    for (let k = 0; k < indice; k++) {
        soma = soma + k;
    }

    console.log('question 1:', soma);
}

question1();


function question2 (numero) {
    if (numero === 1 || numero === 0) {
        return console.log(`Questão 2: O número ${numero} pertence a sequencia de Fibonacci`)
    }
    let a = 0;
    let b = 1;
    let c = a + b;

    while (c <= numero) {
        if (c === numero) {
            return console.log(`Questão 2: O número ${numero} pertence a sequencia de Fibonacci`)
        }

        a = b;
        b = c;
        c = a + b;
    }

    return console.log(`Questão 2: O número ${numero} NÃO pertence a sequencia de Fibonacci`)
}

question2 (6);
question2 (34);