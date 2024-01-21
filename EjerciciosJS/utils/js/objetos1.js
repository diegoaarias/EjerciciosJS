class equipo{
    nombre;
    plantilla;
    presupuesto;

    constructor() {
        this.nombre = nombre;
        this.plantilla = Array.isArray(plantilla) ? plantilla : [];;
        this.presupuesto = Number(presupuesto);
      }

      ficharJugador(jugador) {
        if (!Array.isArray(this.plantilla)) {
            return;
        }
        this.plantilla.push(jugador);
    }

    listarPlantilla(){
      for (let i = 0; i < this.plantilla.length; i++) {
        console.log(plantilla[i])
      }
    }

    topTresJugadoresCaros() {
      let topTres = this.plantilla.sort((a, b) => b.valor - a.valor).slice(0, 3);
      topTres.forEach(jugador => {
          console.log(jugador);
      });
  }
}

class jugador{
    nombre;
    posicion;
    valor;

    constructor() {
        this.nombre = nombre;
        this.posicion = this.posicion;
        this.valor = Number(valor);
      }
}