var gratis = false

const verificar = hora=>{
    let edad = prompt('¿Qué edad tienes?');
    if(edad >= 18){
        if(hora >= 2 && hora<= 6 && gratis==false){
            alert("Sos el primero en llegar después de las 2, podés pasar gratis");
            gratis = true;
        } else alert("Sos mayor, puedes pasar");
        
    } else alert("Sos menor, no puedes pasar");
}

verificar(1)
verificar(11)
verificar(3)
verificar(2)
verificar(5)