var numero1 = document.getElementById('number1');
var numero2 = document.getElementById('number2');
var botao = document.getElementById('botao');
var res = document.getElementById("resultado");
function calc(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calc(+numero1.value, +numero2.value).toString();
});
