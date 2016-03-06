function Gravedad(gravedad,valorRebote){
  this.vy += gravedad;
  this.move(0,this.vy);
  if((this.getY() + this.getHeight()) > this.limiteTope){
    this.setY(this.limiteTope - this.getHeight());
    this.vy = 0;
    this.contador = 0;
  }
}
