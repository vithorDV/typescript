let nome: string|number = 'vithor'

function frase(texto:string|number){
if(typeof texto === 'string'){
    console.log(texto.toLocaleUpperCase())
}else{
    console.log(texto)
}
}