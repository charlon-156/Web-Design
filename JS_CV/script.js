var msg = document.getElementById('img')
var fundo = document.getElementsByTagName('body')[0]
var hour = document.getElementById('hour')

function loading() {
    var date = new Date()
    var h = date.getHours()

    hour.innerHTML = `São ${h} horas`
    if (h>5 && h<=12) {
        msg.innerHTML = 'Bom dia!'
        fundo.style.backgroundColor = 'blue'
        
    } else if(h<18){
        msg.innerHTML = 'Boa tarde!'
        fundo.style.backgroundColor = 'brown'
    } else {
        msg.innerHTML = 'Boa noite!'
        fundo.style.backgroundColor = 'gray'
        
    }
}

document.addEventListener('load', loading())