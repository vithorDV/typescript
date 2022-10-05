function frase(usuario: { nome:string, num:number}) {
    return console.log(`olá ${usuario.nome}, você acaba de votar no número ${usuario.num}`)
    
}

let usuario1={
    nome: 'vithor',
    num:0,
    idade:20
}

let usuario2={
    nome: 'geralt',
    num:4

}
frase(usuario2)