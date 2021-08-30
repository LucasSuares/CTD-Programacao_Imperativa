let podeSubir = (altura, acompanhada) => {
    return altura >= 1.4 && altura < 2 || altura < 1.4 && acompanhada ? "acesso autorizado": "acesso Negado" 
}

console.log(podeSubir(1.3, false))

