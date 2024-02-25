const sumar = (a, b) =>{
   return parseInt(a) + parseInt(b);
}

const restar= (a, b) => {
    return parseInt(a) - parseInt(b);
}

const multiplicar = (a, b) => {
    return parseInt(a)*parseInt(b);
}

const dividir = (a, b) =>{
    return parseInt(a)/parseInt(b);
}
const potencia = (a, b) =>{
    return parseInt(a)**parseInt(b);
}

const raiz = a => {return Math.sqrt(parseInt(a))}

const raizCúbica = a => {return Math.cbrt(parseInt(a))}

alert("¿Qué operación gustas de hacer?");
operación = prompt("1: suma, 2: resta, 3: multiplicación, 4: división 5: potencia 6: raíz 7: raíz cúbica");
if(operación !="1" && operación!="2" && operación!="3" && operación!="4" && operación!="5" && operación!="6" && operación!="7"){
    alert("No es una operación valida")
} else if (operación == 1){
    let num1 = prompt("¿Cuál es el primer número?");
    let num2 = prompt("¿Cuál es el segundo número?");
    let resultado = sumar(num1, num2);
    alert(resultado);
} else if (operación == 2){
    let num1 = prompt("¿Cuál es el primer número?");
    let num2 = prompt("¿Cuál es el segundo número?");
    let resultado = restar(num1, num2);
    alert(resultado);
} else if (operación == 3){
    let num1 = prompt("¿Cuál es el primer número?");
    let num2 = prompt("¿Cuál es el segundo número?");
    let resultado = multiplicar(num1, num2);
    alert(resultado);
} else if(operación == 4){
    let num1 = prompt("¿Cuál es el primer número?");
    let num2 = prompt("¿Cuál es el segundo número?");
    let resultado = dividir(num1, num2);
    alert(resultado);
} else if(operación == 5){
    let num1 = prompt("¿Cuál es el número a potenciar?");
    let num2 = prompt("¿A qué potencia lo quieres elevar?");
    let resultado = potencia(num1, num2);
    alert(resultado)
} else if(operación == 6){
    let num = prompt("¿De qué número quieres sacar la raíz cuadrada?");
    let resultado = raiz(num);
    alert(resultado);
} else {
    let num = prompt("¿A qué número quieres sacar la raíz cúbica?");
    let resultado = raizCúbica(num);
    alert(resultado);
}