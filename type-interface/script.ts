type NomeCompleto = string;

let nome: NomeCompleto = 'Vithor Dário Vastres'



/* COM TYPE
    type ConfigUser = {
    nome:string,
    idade:number
}*/
interface ConfigUser{
    nome:string
}
interface ConfigUser{
    idade:number
}
function lista(usuario:ConfigUser){
    return`Olá ${usuario.nome}, você tem ${usuario.idade} anos`
}
lista({
    nome:'vithor',
    idade:20
})