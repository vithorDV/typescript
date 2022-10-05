let nomes = ['vithor','pedro','ana','luiza','bia','geralt',20]
nomes.forEach(function(nome){
    if(typeof nome === 'string'){
        console.log(nome.toLocaleUpperCase())
    }
    else(
        console.log(nome)
    )
})