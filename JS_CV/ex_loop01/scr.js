
// fin = "&#xF3C1"
// simb = "&#xF3C1"

function testar(){
    n1 = document.getElementById("i1")
    n2 = document.getElementById("i2")
    step = document.getElementById("i3")
    p = document.getElementById("result")

    if (n1.value.legth==0 || n2.value.legth==0 || step.value.legth==0) {
        alert("inputs vazios ;-;")
    } else {
        i = Number(n1.value)
        f = Number(n2.value)
        p = Number(step.value)
        if (n1<n2) {
            for (let c = n1; c < n2; c+=step) { 
                p += toString(c); 
            }
            
        } else if (n1>n2) {
            for (let c = n1; c < n2; c-=step) { 
                p += toString(c); 
            }

        } else{
            console.log("n iguais")
        }
    }
}

