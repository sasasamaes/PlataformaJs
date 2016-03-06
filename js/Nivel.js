function Nivel(pfondo){
  bandera = true;

  fondo = new Kinetic.Layer();
  fondo.add(pfondo);

  this.addPlataforma = function(){
    this.plataforma = new Plataforma();
  }
  this.addEnemigo = function(){
    this.enemigo = new Enemigo();
  }
  this.addMoneda = function(){
    this.moneda =  new Moneda();
  }
  this.addPuerta = function(){
    this.puerta = new Puerta();
  }
  this.addHeroe = function(){
    this.heroe = new Heroe();
  }

}
