// CHECKPOINT 03 - PROGRAMAÇÃO IMPERATIVA - TURMA


// Passo 1

// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

//  Passo 2

// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

function Aluno (nome, QtdFaltas, notas){
    this.nome = nome;
    this.QtdFaltas=QtdFaltas;
    this.notas=notas;
    this.calcularMedia = function(){
        let soma = this.notas.reduce((acumulador, valor) =>{
            return acumulador + valor;
        })
        return Number((soma/(this.notas.length)).toFixed(2));
    }
    this.faltas = function(){
        return this.QtdFaltas ++
    }
}


module.exports = Aluno;


// Teste 


// let aluno1 = new aluno("José Lucas", 0, [6, 7, 10])

// console.log(aluno1.calcularMedia())

// aluno1.faltas()
// aluno1.faltas()

// console.log(aluno1.QtdFaltas)

