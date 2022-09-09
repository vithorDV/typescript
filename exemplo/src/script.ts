let numero1 = document.getElementById('number1') as HTMLInputElement
let numero2 = document.getElementById('number2') as HTMLInputElement
let botao = document.getElementById('botao')  
let res = document.getElementById("resultado") 

function calc (n1: number,n2: number){
    return n1 + n2
}
botao.addEventListener('click', function() {
    res.innerHTML = calc(+numero1.value, +numero2.value).toString()
})