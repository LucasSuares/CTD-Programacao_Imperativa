// Micro Desafio 01

function teste1 (x, y){
    return y - x;
}

console.log(teste1(10, 40));

// Micro Desafio 02

function teste2 (x, y){
    return x * 2;
    console.log(x);
    return x/2
    // Ao utilizar a palavra reservada return termina a execução 
}

// Converter polegadas em centímetros

function converterPolCen (valor){
    return console.log(valor * 2.54);
}

converterPolCen(10);

// Converter string em uma URL

function convertURL (dominio){
    return console.log("http://www."+dominio+".com.br");
}

convertURL("dh")


// Adiciona símbolo de exclamação no final

function addExcl (caractere){
    return console.log(caractere+ "!");
}

addExcl("Olá")

// Calcular idade do cachorro

function idadeCachorro (tempoDeVida){
    return console.log("O cachorro possui " +tempoDeVida * 7+ " anos de idade.");
}

idadeCachorro(10);

// Calcular valor da hora de trabalho

function calcHoraTrab (salario, horasTrabalhadas = 160){
    return console.log("O valor da sua hora de trabalho é R$ " + (salario/horasTrabalhadas) + " reais.");
}

calcHoraTrab(2000);

// Calcular IMC

function calcImc (peso, altura){
    return console.log("Seu IMC é " + (peso/(altura**2)).toFixed(2));
}

calcImc(90, 1.73);

// Colocar uma palavra ou frase em maiúsculo

function capitalize (palavraLowerCase){
    return console.log(palavraLowerCase.toUpperCase());
}

capitalize("desenvolvimento web");

// Informar tipo de dado

function tipoDeDado(valor){
    return console.log(typeof valor);
}

tipoDeDado("10");

// calcular a circunferência de um círculo

function circunferenciaCirculo (raio) {
    return console.log("A circunferência é " + parseFloat((2 * Math.PI * raio).toFixed(2)));
  }
  
circunferenciaCirculo(5);