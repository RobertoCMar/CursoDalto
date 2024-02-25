class app{
    constructor(nombre, peso, descargas, valoración, instalado, abierto){
      this.nombre = nombre;
      this.peso = peso;
      this.descargas = descargas;
      this.valoración = valoración;
      this.instalado = instalado;
      this.abierto = abierto;
    }
    info(){
        return(`<br>El juego <b>${this.nombre}</b> tiene: <br> Un peso de <b>${this.peso}</b><br> <b>${this.descargas}</b> de descargas <br> Y <b>${this.valoración}</b> estrellas de valoración`)
    }

    instalar(){
       if(this.instalado == true){
         alert(`El juego ${this.nombre} ya está instalado`)
       } else{
        alert(`Se instaló el juego ${this.nombre}`);
        this.instalado = true;
       }
    }

    desinstalar(){
        if(this.instalado == false){
            alert(`El juego ${this.nombre} no está instalado`);
        } else {
            alert(`El juego ${this.nombre} se ha desinstalado`)
            this.instalado = false;
        }
    }
    abrir(){
        if(this.instalado == true){
            this.abierto = true
        alert(`Se abrió el juego ${this.nombre}`)
        } else {
            alert(`El juego ${this.nombre} aún no está instalado`)
        }
    }

    cerrar(){
       if(this.abierto == true){
        this.abierto = false;
        alert(`Se cerró el juego ${this.nombre}`);
       } else{
        alert(`El juego ${this.nombre} no está abierto`)
       }
    }
}

const BrawlStars = new app(
    "Brawl Stars",
    "383MB",
    "+100M",
    3.2,
    false,
    false
)

const HonkaiStarRail = new app(
    "Honkai: Star Rail",
    "16GB",
    "+100M",
    4.2,
    false,
    false
)

const Hitman = new app(
    "Hitman 2",
    "565MB",
    "+5OM",
    4.8,
    false,
    false
)

const Brawlhalla = new app(
    "Brawlhalla 2",
    "332MB",
    "+100M",
    5,
    false,
    false
)

const FC = new app(
    "FC MOBILE",
    "1.9GB",
    "+20M",
    2.9,
    false,
    false
)

const Minecraft = new app(
    "Minecraft",
    "777MB",
    "+100M",
    4.3,
    false,
    false
)

const GenshinImpact = new app(
    "Genshin Impact",
    "15GB",
    "+100M",
    3.9,
    false,
    false
)

document.write(`
${BrawlStars.info()} <br>
${HonkaiStarRail.info()} <br>
${Hitman.info()} <br>
${Brawlhalla.info()} <br>
${FC.info()} <br>
${Minecraft.info()} <br>
${GenshinImpact.info()} <br>
`)

Minecraft.instalar();
Minecraft.desinstalar();
Hitman.instalar();
Hitman.abrir();
Hitman.cerrar();
Brawlhalla.instalar();
Brawlhalla.cerrar();
GenshinImpact.abrir();
FC.cerrar();
HonkaiStarRail.instalar();
HonkaiStarRail.abrir()
HonkaiStarRail.cerrar();
HonkaiStarRail.desinstalar();
