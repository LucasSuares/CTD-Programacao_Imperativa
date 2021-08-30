let aluno1 = {
    nome: "José",
    sobrenome: "da Silva",
    idade: 27,
    peso: 83.5,
    altura: 1.70,
    Plano: true,
    imc: function () {return this.peso / (this.altura**2)},
    resultado: function() {
       return console.log(`${this.nome} ${this.sobrenome} tem ${this.idade} anos e seu índice de massa corporal é de ${parseFloat(this.imc().toFixed(2))}.`)
    }
}

aluno1.resultado();