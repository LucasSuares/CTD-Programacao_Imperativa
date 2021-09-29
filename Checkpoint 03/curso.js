// CHECKPOINT 03 - PROGRAMAÇÃO IMPERATIVA - TURMA

// Passo 3

// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).


const aluno = require("./aluno")
const estudantes = require("./estudantes")
const listaDeEstudantes = require("./estudantes")

let curso = {
    nome: "Certified Tech Developer",
    notaDeAprovacao: 7,
    faltasMax: 3,
    estudantes: listaDeEstudantes,

    //  Passo 4

    // 	Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

    addAluno: function(nome, QtdFaltas, notas){
        let novoAluno = new aluno(nome, QtdFaltas, notas)
        this.estudantes.push(novoAluno)
    },

    //  Passo 5

    // 	Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

    alunoAprovado: function (estudante){
        let alunoSelecionado;
        let media = 0;
        let faltas = 0;
        for(let housers of this.estudantes){
            if(housers.nome === estudante){
                alunoSelecionado = housers;
                media = alunoSelecionado.calcularMedia();
                faltas = alunoSelecionado.QtdFaltas;
            } 
        }
        if(media >= this.notaDeAprovacao && faltas < this.faltasMax || media >= (this.notaDeAprovacao*0,10) && faltas == this.faltasMax ){
            return true;
        }
        else{
            return false;
        }
    },

    //  Passo 6

    // 	Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 

    listaAlunosAprovados: function(){
        let novaLista = this.estudantes.map((housers) =>{
            return this.alunoAprovado(housers.nome);
        })
        return novaLista;
    }
}


curso.addAluno("João", 2, [7,8,8])


// console.log(curso.alunoAprovado("João"))

console.log(curso.listaAlunosAprovados())



// Passo 7 -

// 	Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).


// 'estudantes.js' importado - OK