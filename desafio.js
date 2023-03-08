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

// // Questão 3: Descubra a lógica e complete o próximo elemento: 

// a) 1, 3, 5, 7, r:9   n+2  

// b) 2, 4, 8, 16, 32, 64, r:128  n*2

// c) 0, 1, 4, 9, 16, 25, 36, r:49  7^2

// d) 4, 16, 36, 64, r:100  -> 2^2, 4^2, 6^2, 8^2, 10^2

// e) 1, 1, 2, 3, 5, 8, r:13  fibonacci

// f) 2,10, 12, 16, 17, 18, 19, r:20   uma função que cresce e quanto mais se aproxima do limite menos cresce?


function question3 () {
    console.log('QUESTÃO 3:')
    console.log(`a)  9`)
     console.log(`b)  128`)
      console.log(`c)  49`)
       console.log(`d)  100`)
        console.log(`e)  13 `)
         console.log(`f)  20`)

}

question3();




function question4 () {
    console.log(`Questão 4: Quando dois veículos se cruzam numa rodovia, os dois estão na mesma posição da rodovia (vendo a mesma placa de KM: X), ou seja, considerando a rodovia como trajeto, eles estarão a mesma distância de qualquer ponto da rodovia só que em sentidos opostos`)
}

question4 ();


function question5 (string) {
    let result = "";

    for (let i = string.length -1; i >= 0; i--) {
        result = result+string[i]
    }

    console.log(string, 'ao contrário fica: ',result);
}

question5 ("contrario")