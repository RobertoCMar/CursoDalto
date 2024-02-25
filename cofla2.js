// Definimos una variable para recibir el número de alumnos del arreglo 
let NumDeAlumnos = prompt("¿Cuántos alumnos serán evaluados");
//Definimos nuestro arreglo
let alumnos = [];

//Preguntamos el nombre de cada alumno y lo agregamos al arreglo, con el índice del número de alumno y un segundo índice 0
for(let i=0; i < NumDeAlumnos; i++){
    alumnos[i] = [prompt(`¿Cuál es el nombre del alumno?` + (i+1)), 0];
}

function  tomarAsistencia(nombre, p){
    //Si vino el joven
    let presencia = prompt(`¿Vino ${nombre}?`)
    if(presencia == 'sí'){
        //Aumentamos en uno el valor índice uno del segundo arreglo, que usaremos para contar asistencias
       alumnos[p][1]++;
    }
}
//Se ejecuta la función 30 veces
for(let i = 0; i<30; i++){
    for(alumno in alumnos){
        //Se toma como primer parámetro el nombre en string, y como segundo el valor del índice del alumno
        tomarAsistencia(alumnos[alumno][0], alumno)
     }
}
//Se imprime el número de asistencias de cada alumno y si está reprobado, se indica
//el índice 0 de cada alumno en el arreglo con todos los alumnos guarda su nombre
//el índice 1 de cada alumno en el arreglo con todos los alumnos guarda su cantidad de asistencias 
for (alumno in alumnos){
     let resultado = `${alumnos[alumno][0]} tiene <br>
     <b>___ASISTENCIAS: </b>${alumnos[alumno][1]} <br>
     <b>___FALTAS: </b> ${30 - alumnos[alumno][1]}
     `;
     if(30 - alumnos[alumno][1] >= 18){
        resultado += '<b style= color: red> REPROBADO </b><br>'
     } else {
        resultado += '<br><br>'
     }
     document.write(resultado);
    }

