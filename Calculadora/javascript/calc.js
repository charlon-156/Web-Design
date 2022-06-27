
function tela(num){
    var tela = document.getElementById("tela");
    tela.innerText = tela.innerText+num;;
}

function resposta(){
    var tela = document.getElementById("tela")
    var resultado = eval(tela.innerText);
    tela.innerText = resultado;
}
function limpar(){
    document.getElementById("tela").innerText = ""
    
}