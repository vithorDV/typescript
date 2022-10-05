function frase(usuario: { nome:string, num?:number}) {
    if(usuario.num !== undefined){
    return console.log(`olá ${usuario.nome}, você acaba de votar no número ${usuario.num}`)
    }else{
        return console.log(`olá ${usuario.nome}`)
    }
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
let usuario3={
    nome:'v'
}
frase(usuario3)
