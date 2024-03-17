class Materia {
    constructor(nombreDeMateria, profe, alumnos){
      this.nombreDeMateria = nombreDeMateria;
      this.profe = profe;
      this.alumnos = alumnos;
    }

   imprimirDatos() {  
escribir(`La materia <b style= "color: red">${this.nombreDeMateria[0]}</b> <br> Tiene a <b>${this.profe}</b> como profesor y a ${this.alumnos.length} alumnos inscritos: <br> ${this.alumnos} `);
  }
  
  buscarAlumno(nombre) {
    if(this.alumnos.includes(nombre.toUpperCase())){
      return escribir(`<b>${nombre}</b> se encuentra inscrit@ en la materia <b style= "color: red;">${this.nombreDeMateria[0]}</b> y su profesor es ${this.profe}`);
    } else {
      return false;
    }
  }
  
  agregar(alumno) {
    if(this.alumnos.length >= 10){
      return escribir(`<br>La clase de ${this.nombreDeMateria[0]} tiene ${this.alumnos.length} alumnos y está llena`)
    } else if(this.alumnos.includes(alumno.toUpperCase())){
      return escribir(`<br>El alumno ${alumno} ya está inscrito en ${this.nombreDeMateria[0]}`);
    } else {
        this.alumnos.push(alumno.toUpperCase());
        escribir(`<br>El alumno ${alumno} se inscribió correctamente a la materia de ${this.nombreDeMateria[0]}. Ahora hay ${this.alumnos.length} alumnos`);
        return escribir(`${this.alumnos} <br>`);
    }
  }
}

  const Lect = new Materia(['LECTURA', 'LENGUA Y COMUNICACIÓN', 'LENGUA', 'ESPAÑOL'], 'ELISA', ['JOACO', 'KARIME', 'LUNA', 'MONTES']);
  const Mate = new Materia(['MATEMÁTICAS', 'MATEMÁTICA', 'MATES', 'MATE'], 'LAURA', ['COFLA', 'CRISTO', 'JESÚS', 'JAIME', 'ROGER', 'LUCY']);
  const Progrm = new Materia(['PROGRAMACION', 'PROGRAMACIÓN', 'PROGRAMAR', 'PROGRAMA'], 'LEMUEL', ['COFLA', 'JOACO', 'LUCAS', 'ROBERTO', 'OMAR', 'LUCY']);


const escribir = (texto) => {document.body.innerHTML += `<br>${texto}`};

const analizar = () => {
  let consulta = prompt("Materia a consultar");
  if(Lect.nombreDeMateria.includes(consulta.toUpperCase())){
Lect.imprimirDatos();
} else if(Mate.nombreDeMateria.includes(consulta.toUpperCase())){
  Mate.imprimirDatos();
} else if(Progrm.nombreDeMateria.includes(consulta.toUpperCase())){
  Progrm.imprimirDatos();
} else { 
  alert('No se encontró la materia')
}}

const buscar = () => {
 var i = 0;
  let joven = prompt("¿Cuál es el nombre del alumno que desea buscar?")
  let mat1 = Lect.buscarAlumno(joven);
  let mat2 = Mate.buscarAlumno(joven);
  let mat3 = Progrm.buscarAlumno(joven);
  let materias = [mat1, mat2, mat3];
  for(materia of materias){
    if(materia != false){
      i++;
    }
  }
    
  if(i==0){
    escribir("No se encontró al alumno<br>");
} else { 
    escribir(`El alumno está en ${i} clase(s)<br>`);
}}

const agregar = () => {
  let materiaModificada = prompt('¿A qué materia se va a inscribir');
  let nuevoAlumno = prompt('¿Cuál es su nombre?');
   
  if(Lect.nombreDeMateria.includes(materiaModificada.toUpperCase())){
    Lect.agregar(nuevoAlumno);
  } else if (Mate.nombreDeMateria.includes(materiaModificada.toUpperCase())){
    Mate.agregar(nuevoAlumno);
  } else if(Progrm.nombreDeMateria.includes(materiaModificada.toUpperCase())){
    Progrm.agregar(nuevoAlumno);
  } else {
    alert('No se encontró la materia');
  }
}