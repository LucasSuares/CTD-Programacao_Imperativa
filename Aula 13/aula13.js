/*
Grupo 02
Iago Mendes
Louise Nascimento
José Lucas Souza
Thiago Perez
Anderson A Souza
*/

let contas = {
    numeroConta : 002,
    tipoConta : "CC",
    saldo : 1000000,
    titular : "Grupo2",
}

console.log(contas)

console.log("***********************************")

function NovaConta(nc, tc, sld, ti){
    this.numeroConta = nc;
    this.tipoConta = tc;
    this.saldo = sld;
    this.titular = ti
}

let conta1 = new NovaConta(5486273622,	"Conta Corrente",	27771,	"Abigael Natte")
let conta2 = new NovaConta(1183971869,	"Conta Poupança",	8675,	"Ramon Connell")
let conta3 = new NovaConta(9582019689,	"Conta Poupança",	27363,	"Jarret Lafuente")
let conta4 = new NovaConta(1761924656,	"Conta Poupança",	32415,	"Ansel Ardley")
let conta5 = new NovaConta(7401971607,	"Conta Poupança",	18789,	"Jacki Shurmer")
let conta6 = new NovaConta(630841470,	"Conta Corrente",	28776,	"Jobi Mawtus")
let conta7 = new NovaConta(4223508636,	"Conta Corrente",	2177,	"Thomasin Latour")
let conta8 = new NovaConta(185979521,	"Conta Poupança",	25994,	"Lonnie Verheijden")
let conta9 = new NovaConta(3151956165,	"Conta Corrente",	7601,	"Alonso Wannan")
let conta10 = new NovaConta(2138105881,	"Conta Poupança",	33196,	"Bendite Huggett")

let listaClientes = [conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9, conta10]

let banco = {
    clientes = listaClientes
}

console.log(conta1, conta2, conta3, conta4, conta5, conta6, conta7, conta8, conta9, conta10)