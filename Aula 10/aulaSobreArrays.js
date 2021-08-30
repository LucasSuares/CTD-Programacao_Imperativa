const integrantesDoGrupo = ['Fabiana Yumi', 'Gustavo Felipe', 'Henrique Arantes', 'José Lucas', 'Maiara Porto']

console.log(integrantesDoGrupo[3]);

integrantesDoGrupo[0] = 'Fabiana Sato'
integrantesDoGrupo[1] = 'Gustavo Brock'
integrantesDoGrupo[2] = 'Henrique Nunes'
integrantesDoGrupo[3] = 'José Suares'
integrantesDoGrupo[4] = 'Maiara Martinelli'
console.log(integrantesDoGrupo);

integrantesDoGrupo.push('Tati Teixeira')
integrantesDoGrupo.unshift('Lucas Feitosa')
console.log(integrantesDoGrupo);

integrantesDoGrupo.pop('Tati Teixeira')
integrantesDoGrupo.shift('Lucas Feitosa')
console.log(integrantesDoGrupo);

const integrantesDh = ['Tati Teixeira', 'Lucas Feitosa']

console.log(integrantesDoGrupo.includes(integrantesDh[0, 1]))

integrantesDoGrupo.unshift('Lucas Feitosa')
console.log(integrantesDoGrupo[0] === integrantesDh[1]);

// O que esses códigos retornam?
// 1. undefined
// 2. Spiderman
// 3. str = 'una string qualquer'


function imprimirInverso(array) {
    return array.reverse()
}

console.log(imp
