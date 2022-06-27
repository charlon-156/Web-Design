var num = document.querySelector('input#inum')
var list = document.getElementById('lista')
var res = document.querySelector('div#res')
var valores = [];

function add() {
    if (n100(num.value) && inList(num.value, valores)) {
        valores.push(Number(num.value))

    var item = document.createElement('option');
        item.txt = `Número ${num.value} adicionado`;
        list.appendChild(item)
    } else {
        console.log("erro")
    }
}


function n100(n) {
    if (Number(n)>1 && Number(n)<=100) {
        return true

    } else {
        return false
    }
}

function inList(n, li) {
    if (li.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}