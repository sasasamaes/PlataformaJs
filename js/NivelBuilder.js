function NivelBuilder(altura,ancho,x,y,imagen)
{
  this.nivel = null;



  this.paso1 = function(){
    this.nivel = new Nivel();
  }
  this.paso2 = function(){
    this.nivel.addPlataforma();
  }
  this.paso3 = function(){
    this.nivel.addEnemigo();
  }
  this.paso4 = function(){
    this.nivel.addMoneda();
  }
  this.paso5 = function(){
    this.nivel.addHeroe();
  }
  this.resultado = function(){
    this.nivel.addHeroe();
  }
}
