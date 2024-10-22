function contar(string){
    let numero = 0;

    for(let i = 0; i < string.length; i++){
        if(string[i] != ' ' ){
            numero++;
        }
    }
    return numero;
}

function palíndromo(string){
    let semEspacos = "";
    let invertida = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            semEspacos += string[i];
            invertida = string[i] + invertida;
        }
    }

    let iguais = true;
    for (let i = 0; i < original.length; i++) {
        if (original[i].toLowerCase() !== invertida[i].toLowerCase()) {
            iguais = false;
        
        }
    }

    return iguais;
}


function contarVogaisEConsoantes(string) {
    let totalVogais = 0;
    let totalConsoantes = 0;

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            if (
                char === 'a' || char === 'A' ||
                char === 'e' || char === 'E' ||
                char === 'i' || char === 'I' ||
                char === 'o' || char === 'O' ||
                char === 'u' || char === 'U'
            ) {
                totalVogais++;
            } else {
                totalConsoantes++;
            }
        }
    }

    return { vogais: totalVogais, consoantes: totalConsoantes };
}


function substituirCaracteres(string, char1, char2) {
    let novaString = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] === char1) {
            novaString += char2;
        } else {
            novaString += string[i];
        }
    }

    return novaString;
}

function soma(matriz) {
    let soma = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]; 
        }
    }

    return soma;
}

function numeroNaMatriz(matriz, numero) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === numero) {
                return true; 
            }
        }
    }
    return false; 
}

function Exercicio07(matriz){
    var numDiagonal;
    var i=0;
    while(i<matriz.length){
        console.log(matriz[i][i]);
        i++;
    }
}