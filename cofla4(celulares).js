class celular{
    constructor(marca, modelo, color, ROM, RAM, pantalla, cámara, peso){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ROM = ROM;
        this.RAM = RAM;
        this.pantalla = pantalla;
        this.cámara = cámara;
        this.peso = peso;
        this.encendido = false;
    }
   verInfo(){
    document.write(`<br>Este <b>${this.marca} ${this.modelo}</b> de color ${this.color}, 
    tiene: <br>
    <b>${this.ROM}</b> de espacio de disco duro <br> 
    <b>${this.RAM}</b> de RAM <br> 
    una pantalla de <b>${this.pantalla}</b> <br>
    una cámara de <b>${this.cámara}</b> <br>
    y tiene un peso de <b>${this.peso}</b><br>`)
  }

  presionarPower(){
    if(this.encendido == false){
      alert(`El ${this.marca} ${this.modelo} ahora está encendido`);
      this.encendido = true;
    } else {
        alert(`El ${this.marca} ${this.modelo} ahora está apagado`)
        this.encendido = false;
    }
}

  tomarFoto(){
    alert(`El ${this.marca} tomó una foto con una cámara de ${this.cámara}`);
  }

  tomarVídeo(){
    alert(`El ${this.marca} está tomando un vídeo con una cámara de ${this.cámara}`);
    let terminar = prompt("Presiona '0' para terminar el vídeo");

    if(terminar == 0){
        alert("El celular dejó de grabar")
    }
  }

  reiniciar(){
    alert(`El ${this.marca} se está reiniciando...`)
  }
}

class AltaGama extends celular{
  constructor(marca, modelo, color, ROM, RAM, pantalla, cámara, cámara2, peso){
  super(marca, modelo, color, ROM, RAM, pantalla, cámara, peso);
  this.cámara2 = cámara2;
  }
  grabarCámaraLenta(){
    alert(`El ${this.marca} ${this.modelo} empezó a grabar en cámara lenta`);
    let parar = prompt("Ingresa '1' cuando quieras detener la grabación");
    if(parar == "1"){
      alert("El celular dejó de grabar");
    }  
  }
  ReconocimientoFacial(){
    alert(`Iniciando reconocimiento facial en el ${this.marca} ${this.modelo}`);
  }
  verInfoAltaGama(){ this.verInfo() + `Posee una cámara extra de ${this.cámara2}`};
}
     

const Redmi12 = new celular(
    "Xiaomi", 
    "Redmi 12", 
    "Azul Cielo", 
    "256GB", 
    "8GB", 
    "2460 x 1080", 
    "50MP", 
    "198.5gr"
    );

const iPhone7 = new celular(
    "Apple",
    "iPhone 7",
    "Rosa",
    "32 GB",
    "2GB",
    "1334 x 750",
    "12MP",
    "138gr"
);

const SamsungA20 = new celular(
    "Samsung",
    "A20",
    "Negro",
    "32GB",
    "3GB",
    "1560 x 720",
    "13MP",
    "169gr",
);

const iPhone14 = new AltaGama(
  "Apple",
  "iPhone 14",
  "Blanco",
  "256GB",
  "16GB",
  "1200 x 720",
  "60MP",
  "30MP",
  "120gr"
)

const LG = new AltaGama(
  "LG",
  "K50",
  "Azul marino",
  "256GB",
  "12GB",
  "1400 x 800",
  "55MP",
  "22MP",
  "155gr"
)

let mostrar = prompt('¿Quieres ver algunas opciones de celulares? (Escribe "sí")')


if(mostrar == "sí" || mostrar == "si" || mostrar == "SI" || mostrar == "SÍ"){
    Redmi12.verInfo();
    iPhone7.verInfo();
    SamsungA20.verInfo(); 
    iPhone14.verInfoAltaGama();
    LG.verInfoAltaGama();
} else {
    alert("Una pena que no interese lo más nuevo en tecnología, che...")
}

SamsungA20.tomarFoto();
iPhone7.presionarPower();
Redmi12.tomarVídeo();
iPhone7.presionarPower();
Redmi12.reiniciar();
LG.ReconocimientoFacial();
iPhone14.tomarVídeo();
LG.grabarCámaraLenta();