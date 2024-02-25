Materiass = [] 
Materias = []
 Materiass = [
   "Lectura",
   "Matemáticas",
   "Ciencias",
   "Diseña Software",
   "Implementa Software",
   "Codifica Software",
   "Recursos Socioemocionales",
   "Ciencias Sociales",
   "Inglés"
 ]
 
 Materias[0] = [
  "Lectura", 
  "lectura", 
  "Español", 
  "español", 
  "Lengua Materna", 
  "lengua materna", 
  "Lengua materna", 
  "lengua Materna"
]
 Materias[1] = [
  "Matemáticas", 
  "matemáticas",
  "Matematicas",
  "matematicas",
  "Mate",
  "mate",
  "Mates",
  "mates"
]
 Materias[2] = [
  "Ciencias",
  "ciencias",
  "Ciencia",
  "ciencia",
  "Química",
  "Quimica",
  "química",
  "quimica",
  "Física",
  "física",
  "Fisica",
  "fisica"
 ]
 Materias[3] = [
  "Diseña Software",
  "Diseña software",
  "diseña Software",
  "diseña software",
  "Diseña",
  "diseña"
 ]
 Materias[4] = [
  "Implementa Software",
  "Implementa software",
  "implementa Software",
  "implementa software",
  "Implementa",
  "implementa"
 ]
 Materias[5] = [
  "Codifica Software",
  "Codifica software",
  "codifica Software",
  "codifica software",
  "Codifica",
  "codifica"
 ]
 Materias[6] = [
  "Recursos Socioemocionales",
  "recursos Socioemocionales",
  "Recursos Socioemocionales",
  "recursos socioemocionales",
  "Socioemocional",
  "socioemocional",
  "Rec. Socioemocionales",
  "rec. socioemocionales",
  "Socioemocionales",
  "socioemocionales"
 ]
 Materias[7] = [
  "Ciencias Sociales",
  "ciencias Sociales",
  "Ciencias sociales",
  "Sociales",
  "sociales"
 ]
 Materias[8] = [
  "Inglés",
  "Ingles",
  "inglés",
  "ingles",
  "Lengua Extranjera",
  "Lengua extranjera",
  "lengua Extranjera",
  "lengua extranjera"
 ]
 DatosClases = {
   "Lectura": [
    "-Profe Elisa!", 
   "Alondra", "Joaquín", "Roberto", "Román", "Riquelme","Aureliano Buendía", "Carmen", "Ursula", "7 de marzo", "Uriel", "Alan", "Mia", "Cristo", "Jesús", "Diego", "Peso Pluma", "Freddie", "Danna", "Aura", "Itadori"
              ],
   "Matemáticas": [
    "-Profe Laura",
    "Rosas", "Cofla", "Cristo", "Roberto", "Juan", "Nachito", "Dalto", "Román", "Campos", "Rafa", "Donatello", "Miguel", "Angel", "Dory", "Sol", "Asta", "Dominik", "Bob", "Sebastián", "Doctor"
   ],
   "Ciencias": [
    "-Profe Cobos",
    "Diego", "Dory", "Roberto", "Papu", "7 de marzo", "Joan", "Sebastián", "Juan", "Gabriel", "Mia", "Itzel", "Luffy", "Roronoa", "Satoru", "Maki", "Kaguya", "Miyuki", "Miko", "Yu", "Chika"
   ],
   "Diseña Software": [
    "-Magrara",
    "Cofla", "Darién", "Lemuel", "Nicolás", "Bonou", "Salomón", "Linda", "Daniela", "Cristopher de Jesús", "Saltillo", "Naruto", "Nando", "Mike", "Walter", "Saul Goodman", "Chuck Berry", "John Lennon", "Paul McCartney", "Roberto", "George Harrison"
   ],
   "Implementa Software": [
    "-Magrara",
    "Ringo Starr", "Richard", "Cofla", "Daniel", "Armando", "Mozart", "Chrollo", "Lucifer", "Dalto", "Hisoka", "Killua", "Argos", "Rafa", "Sandoval", "Salsero", "Raúl", "Domingo", "Juan Carlos", "Leproso", "Cristiano"
   ],
   "Codifica Software": [
    "-Profe LemuelGOD",
    "Dalto", "Cofla", "Sagún", "Ana", "Paty", "Georgina", "Iker", "Diego", "Gabriela", "Ximena", "Simp", "Michelle", "Michael", "Cristo", "Serpia", "Luna", "Thailly", "Kaori", "Cristina", "Solsticio"
   ],
   "Recursos Socioemocionales": [
    "-Profe Cindy",
    "Yang", "Cofla", "Sandoval", "Severo", "Paola Hermosín", "Riquelme", "Andrés", "Angela", "Karol", "Colima", "Carol", "Jim Morrison", "Kurt Cobain", "George Harrison", "Siempre", "MyLord", "Dulce", "César", "Jesús", "Buda"
   ],
   "Ciencias Sociales": [
    "-La Alexandra we XD",
    "Pedro", "Orlando", "Elías", "Aarón", "Román", "Roberto", "Cofla", "Roger", "Brian", "John", "Manuel", "Violeta", "Rossy", "Karla", "Carlos", "Ray", "Penelope", "Iguarán", "Santiago", "Emiliano"
   ],
   "Inglés": [
    "-Pilar",
    "Alisson", "Cindy", "Rubén", "Juan", "Simp", "Limbo", "Perla", "Rubí", "Crack", "Brandon", "Germán", "Roberto", "Yolanda", "Isela", "Rodrigo", "Pedro", "Solid", "Papantla", "Stussy", "Robin"
   ],
 }

 for(materia of Materiass){
 DatosClases[materia].sort();

 }
 
 const consultarClase = (materia)=>{
  let profesor = DatosClases[materia][0];
  let alumnos = DatosClases[materia].shift();
  alumnos = DatosClases[materia];
  document.write(`El profesor asignado para la materia ${materia} es ${profesor} <br> Los alumnos inscritos son: ${alumnos}`)
  DatosClases[materia].shift()
 }
 
 let Pregunta = prompt("¿te gustaría consultar sobre alguna clase? Responde 'sí' si te interesa.") ;
 
 if(Pregunta == "sí" || Pregunta == "si" || Pregunta == "Si" || Pregunta == "Sí" || Pregunta == "SI" || Pregunta == "SÍ"){
  let consulta = prompt("¿Sobre qué materia te gustaría consultar");
  if(Materias[0].includes(consulta)){
    consultarClase(Materias[0][0], 0);
  } else if(Materias[1].includes(consulta)){
    consultarClase(Materias[1][0], 1);
  } else if(Materias[2].includes(consulta)){
    consultarClase(Materias[2][0], 2);
  } else if(Materias[3].includes(consulta)){
    consultarClase(Materias[3][0], 3);
  } else if(Materias[4].includes(consulta)){
    consultarClase(Materias[4][0], 4);
  } else if(Materias[5].includes(consulta)){
    consultarClase(Materias[5][0], 5);
  } else if(Materias[6].includes(consulta)){
    consultarClase(Materias[6][0], 6);
  } else if(Materias[7].includes(consulta)){
    consultarClase(Materias[7][0], 7);
  } else if (Materias[8].includes(consulta)){
    consultarClase(Materias[8][0], 8);
  } else {
    alert(`No se encontró la materia "${consulta}"`)
  }
 }  else {
  alert("Bueno, vuelve pronto...");
 }