//system of calculator

function screenPrint(number){
    let screen = document.getElementById("screen");
    screen.innerText = screen.innerText+number;
}

function respost(){
    let screen = document.getElementById("screen")
	let exp = screen.innerHTML;
    
    if (exp.indexOf("+") > 0) {
        let numeros = exp.split("+")

        n1 = Number(numeros[0])
        n2 = Number(numeros[1])

        resultado = n1 + n2
        screen.innerHTML = resultado
    }
	
    
	if (exp.indexOf("-") > 0) {
        numeros = exp.split("-")

		n1 = Number(numeros[0])
		n2 = Number(numeros[1])
        
		resultado = n1 - n2
		screen.innerHTML = resultado
	}
    
    if (exp.indexOf("*") > 0) {
        numeros = exp.split("*")

        n1 = Number(numeros[0])
        n2 = Number(numeros[1])

        resultado = n1 * n2
        screen.innerHTML = resultado
    }

	if (exp.indexOf("/") > 0) {
		numeros = exp.split("/")

		n1 = Number(numeros[0])
		n2 = Number(numeros[1])

		resultado = n1 / n2
		screen.innerHTML = resultado
	}
}
