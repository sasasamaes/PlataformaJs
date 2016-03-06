function Plataforma(x,y,textura)
{
    //llama al constructor de Kinetic
    Kinetic.Rect.call(this);
    this.setWidth(200);
    this.setHeight(40);
    this.setX(x);
    this.setY(y);
    this.setFillPatternImage(textura);
}
Plataforma.prototype = Object.create(Kinetic.Rect.prototype);
